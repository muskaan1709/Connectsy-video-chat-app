import { Card, CardContent, Typography } from '@material-ui/core'
import React ,{ forwardRef } from 'react'
import './Message.css';
import moment from 'moment';
moment().format();

const Message=forwardRef((props,ref)=> {
    const isUser=props.username===props.message.username;
  //checks whether the username we have passed in is same as the message username or not
    return (
        <div>
          
            <Card ref={ref} className={isUser ? "message_user" : "message_card"} > {/*only the person who has logged in is going to get this class named as message_user */}
      <CardContent>
        <Typography color="white" variant="h5" component="h5">
        {!isUser && `${props.message.username}` }:  {props.message.message} <span className="time">{props.message.time}</span>
        </Typography>
      </CardContent>
          </Card> 
          
        </div>
    )
})

export default Message
