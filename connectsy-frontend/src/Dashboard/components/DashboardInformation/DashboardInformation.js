import React from 'react';

import './DashboardInformation.css';

const DashboardInformation = ({ username }) => {
  return (
    <div className='dashboard_info_text_container'>
      <span className='dashboard_info_text_title'>
        Hello {username}, welcome in Connectsy.
      </span>
      <span className='dashboard_info_text_description'>
        You can start calling directly to a person from the list, create or join a group call or start chatting.
      </span>
    </div>
  );
};

export default DashboardInformation;