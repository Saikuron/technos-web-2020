import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class WriteMessageForm extends React.Component
{
  constructor( props )
  {
    super( props );
    this.handleChange = this.handleChange.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  handleChange( event )
  {
    this.props.onMessageChange( event.target.value );
  }

  handleSubmit( event )
  {
    this.props.onMessageSubmit( this.props.value );
    event.preventDefault();
  }

  render()
  {
    const message = this.props.value;

    return(
      <form onSubmit = { this.handleSubmit }>
        <input className="inputMessage" type="text" placeholder="Write your message"
          value={ message }
          onChange={ this.handleChange }
        />
        <button type="submit">
          Send
        </button>
      </form>
    );
  }
}

class Messages extends React.Component
{
  render()
  {
    // Take all messages from the parent and format them into list elements
    const allMessages =  this.props.messagesList;
    const messagesClean = allMessages.map( (message) => {
        return(
          <p key={ message.creation } id="msg">
            { message.content }
          </p>
        );
    });

    return(
      <ul>
        { messagesClean }
      </ul>
    );
  }
}

function Channels( props )
{
  // Take all channels from the parent and format them into buttons
  const allChannels = props.channelsList;
  const channelsClean = Object.keys(allChannels).map( (channel) => {
    return(
      <p key={ channel }>
        <button onClick={ () => props.onChannelClick(channel) }> {channel} </button>
      </p>
    );
  });

  return(
    <ul>
      { channelsClean }
    </ul>
  );
}

// class Channels extends React.Component
// {
//   render()
//   {
//     const allChannels = this.props.channelsList;
//     const channelsClean = Object.keys(allChannels).map( (channel) => {
//       return(
//         <li key={ channel }>
//           <button onClick={ () => this.props.onChannelClick(channel) }> {channel} </button>
//         </li>
//       );
//     });
//
//     return(
//       <ul>
//         { channelsClean }
//       </ul>
//     );
//   }
// }

class Chat extends React.Component
{
  constructor( props )
  {
    super( props );
    this.handleMessageChange = this.handleMessageChange.bind( this );
    this.handleMessageSubmit = this.handleMessageSubmit.bind( this );
    this.state = {
      // channels: ['general', 'fun', 'work'],
      channels: {
        general: {
          // name: '',
          messages: [ {
            creation: '1',
            content: 'general test',
          }, {
            creation: '2',
            content: 'Second general message',
          }],
        },
        fun: {
          // name: '',
          messages: [ {
            creation: '',
            content: 'fun test',
          } ],
        },
        work: {
          // name: '',
          messages: [ {
            creation: '',
            content: 'work test',
          } ],
        },
      },
      // messages : [],
      currentMessage: '',
      currentChannel: 'general',
    };
  }

  render()
  {
    const currentMessage = this.state.currentMessage;
    const currentChannel = this.state.currentChannel;
    // const messagesList = this.state.messages;
    // const channelsList = this.state.channels;
    const messagesList = this.state.channels[currentChannel].messages;
    const channelsList = this.state.channels;

    return(
      <div className="chat" align="left">
        <div className="channels-list">
        <p>Channels:</p>
            <Channels
              channelsList={ channelsList }
              onChannelClick={ (channel) => this.handleChannelClick(channel) }
            />
        </div>
        <div className="messages-list" align="center">
            <Messages
              messagesList={ messagesList }
            />
        </div>
        <div className="write-message" align="center">
          <WriteMessageForm
            value={ currentMessage }
            onMessageSubmit={ this.handleMessageSubmit }
            onMessageChange={ this.handleMessageChange }
          />
        </div>
      </div>
    );
  }

  handleMessageChange( message )
  {
    this.setState( { currentMessage: message } );
  }

  handleMessageSubmit( message )
  {
    if( !message )
      return;

    // const messages = this.state.messages.slice();
    const currentChannel = this.state.currentChannel;
    let messages = this.state.channels[currentChannel].messages.slice();
    // let channels = Object.entries( this.state.channels ).slice();
    let channels = { ...this.state.channels };
    // let channels = Object.assign( {}, this.state.channels );

    messages = messages.concat( [ {
      creation: Date.now(),
      content: message,
    } ] );
    channels[currentChannel].messages = messages;

    this.setState( prevState => ( {
      channels: channels,
      // channels[currentChannel].messages: messages,
      currentMessage: '',
    } ) );

    // this.setState( {
    //     channels[this.state.currentChannel].messages: messages.concat( [ {
    //     creation: '99',
    //     content: message,
    //    } ] ),
    //   currentMessage: '',
    // } );

    // this.setState( {
    //   messages: messages.concat( [ message ] ),
    //   currentMessage: '',
    // } );
  }

  handleChannelClick(channel)
  {
    let currentChannel = this.state.currentChannel;
    currentChannel = channel;
    this.setState( {
      currentChannel: currentChannel,
    } );
  }

}

// ========================================

ReactDOM.render(
  <Chat />,
  document.getElementById('root')
);
