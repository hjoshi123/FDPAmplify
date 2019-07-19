import './App.css';
import React, { Component } from "react";

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { ChatBot, AmplifyTheme } from "aws-amplify-react"; // or 'aws-amplify-react-native';
Amplify.configure(awsconfig);

const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "#ff6600"
  }
};

class App extends Component {
  handleComplete(err, confirmation) {
    if (err) {
      alert("Bot conversation failed");
      return;
    }

    alert("Success: " + JSON.stringify(confirmation, null, 2));
    return "Trip booked. Thank you! what would you like to do next?";
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Amplify Chatbot</h1>
        <ChatBot
          title="My Bot"
          theme={myTheme}
          botName="BookTrip_dev"          
          welcomeMessage="Welcome, how can I help you today?"
          onComplete={this.handleComplete.bind(this)}
          clearOnComplete={true}
          conversationModeOn={false}
        />
      </div>
    );
  }
}

export default withAuthenticator(App, true);