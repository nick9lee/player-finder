import React, {Component} from 'react';

import styles from './Chat.module.css';
import InputBox from '../../../components/Chats/InputBox/InputBox';
import ChatBox from '../../../components/Chats/ChatBox/ChatBox';
import Messages from '../../../components/Chats/Messages/Messages';

class Chat extends Component {
  state = {
    buddy: 'John Smith',
    messages: [
      {
        body: 'Hi',
        self: false,
        timestamp: '1m'
      },
      {
        body: 'Hi',
        self: true,
        timestamp: 'now'
      }
    ],
    curMsg: ''
  };

  onChangeHandler = event => {
    this.setState({curMsg: event.target.value});
  }

  sendHandler = () => {
    if (this.state.curMsg === '') return;

    const messages = [...this.state.messages];
    messages.push({
      body: this.state.curMsg,
      self: true,
      timestamp: 'now'
    });
    this.setState({
      messages: messages,
      curMsg: ''
    });
  }

  onKeyPressHandler = event => {
    if (event.keyCode === 13) this.sendHandler();
  }

  render() {
    return (
      <div>
        <h1>Chat</h1>
        <ChatBox><Messages messages={this.state.messages} /></ChatBox>
        <div className={styles.HOC}>
          <div className={styles.Container}>
            <input
              type='text'
              placeholder='Your Message'
              className={styles.Input}
              value={this.state.curMsg}
              onChange={this.onChangeHandler}
              onKeyDown={this.onKeyPressHandler}
            />
            <button className={styles.SendBtn} onClick={this.sendHandler}>&#62;</button>
          </div>
        </div>
      </div>
    );
  };
}

export default Chat;