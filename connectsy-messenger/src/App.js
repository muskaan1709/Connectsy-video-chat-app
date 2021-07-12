import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import moment from 'moment';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import logo from './resources/Connectsy-Chat-logo.png'


function App() {

  const [input, setInput] = useState('');

  const [messages, setMessages] = useState([]); //An array of objects for getting username as well as the text from that username

  const [username, setUserName] = useState('');




  // useEffect=runs code on a condition
  useEffect(() => {

    // run once when the App component loads
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))

      });


  }, [])


  useEffect(() => {

    setUserName(prompt('Please enter your name'))

  }, []) // if it is blank inside [],then this code runs ONCE when the App component loads


  const sendMessage = (event) => {
    event.preventDefault();


    // All the logic for sending the message goes here!!!

    // This is the logic when we press send message it adds the input we type to the firestore database with the timestamp and after that the page reloads which in turn causes useEffect to run
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      time: moment().format('LT')
    })


    setInput(''); // After we send a message,set the input to be empty
  }
  return (
    <div className="App">
      <img className="logo-image" src={logo} alt="Connectsy" />


      <form className="app_form">

        <FormControl className="app_formcontrol">
          <Input className="app__input" placeholder="Type a message" value={input} onChange={(event) => setInput(event.target.value)} />
          <IconButton className="app__button" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>


      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (  // Here,we didn't use curly braces becuase map actually returns something and to return we have to use simple brackets
            <Message key={id} username={username} message={message} /> // this unique id is the key for every message so that everytime the app renders we only have to style/animate the recent delivered message in accordance with the key
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
