import React from 'react';

import './ChatButton.css'


const ChatRoomButton = () => {
  return (
      <div className='Dashboard-chat-button-container'>
        <a
          className='Dashboard-chat-button background_main_color text_main_color'
          href="https://connectsy-chat.netlify.app"
          target="_blank"
        >
          Connectsy Chat
        </a>
      </div>
  
    );
};

export default ChatRoomButton;