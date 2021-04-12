import React, {Component, Fragment} from 'react';

import ChatsList from '../../components/Chats/ChatsList';

class Chats extends Component {
  state = {
    chats: [
      {
        buddy: {
          Fname: 'John',
          Lname: 'Smith',
          id: 'ea2123'
        },
        dateCreated: 'today',
        id: 'chat1'
      },
      {
        buddy: {
          Fname: 'John',
          Lname: 'Joe',
          id: 'abecd'
        },
        dateCreated: 'yesterday',
        id: 'chat2'
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <h1>Chats</h1>
        <ChatsList chats={this.state.chats} />
      </Fragment>
    );
  }
}

export default Chats;