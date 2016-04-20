require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

const rnChatImage = require('../images/chatroom.png');
const googlePlayImage = require('../images/google_play_icon.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={ rnChatImage } alt="Yeoman Generator"></img>
        <div className="notice">
          Welcome to join us !
        </div>
        <a target="_blank" href="https://homeportal.climax.com.tw">
          <img className="download-btn" src={ googlePlayImage }></img>
        </a>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
