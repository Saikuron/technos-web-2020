import { useState } from 'react';
import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'
// import Color from './Color'

const styles = {
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#565E71',
    padding: '50px',
  },
  color: {
    backgroundColor: 'green',
    height: '100px',
  },
  header: {
    textAlign: 'center',
    height: '50px',
    paddingBottom: '1.5%',
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
  },
  headerLogIn: {
    backgroundColor: 'red',
  },
  headerLogOut: {
    backgroundColor: 'blue',
  },
  footer: {
    textAlign: 'center',
    height: '50px',
    paddingTop: '1.5%',
    color: 'white',
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
  },
  footerText: {
    color: 'white',
    textDecoration: 'none',
  },
  footerSeparation: {
    margin: '0.5%',
  },
  main: {
    backgroundColor: '#373B44',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  channels: {
    minWidth: '200px',
  },
  channel: {
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    backgroundColor: '#3A3F55',
  },
  messages: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
    '& ul': {
      'margin': 0,
      'padding': 0,
      'textIndent': 0,
      'listStyleType': 0,
    },
  },
  messagesTitle: {
    textAlign: 'center',
  },
  message: {
    // margin: '.2rem',
    // padding: '.2rem',
    backgroundColor: '#667788',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,.2)',
    },
    textAlign: 'justify',
    margin: '2%',
    listStyleType: 'none',
    paddingLeft: '2%',
    paddingRight: '1%',
    paddingTop: '0.6%',
    paddingBottom: '1%',
    borderRadius: '20px',
  },
  messageAuthor: {
    fontWeight  : 'bold',
    marginBottom: '2%',
    color: '#66ccff',
  },
  messageDate: {
    color: '#333333',
    marginTop: '0.3%',
    marginBottom: '1%',
  },
  messageContent: {
    paddingLeft: '30px',
    paddingRight: '30px',
    border: '1px solid black',
    borderRadius: '25px',
  },
  form: {
    // borderTop: '2px solid #373B44',
    padding: '.5rem',
    paddingLeft: '20%',
    paddingRight: '20%',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    // flex: '1 1 auto',
    flexGrow: '8',
    // width: '70%',
    marginRight: '.5rem'
  },
  send: {
    backgroundColor: '#D6DDEC',
    padding: '.2rem .5rem',
    border: '',
    ':hover': {
      backgroundColor: '#2A4B99',
      cursor: 'pointer',
      color: '#fff',
    },
    flexGrow: '1',
  },

}

export default ({
  channel = {
    name: 'Fake channel'
  }
}) => {
  const [messages, setMessages] = useState([{
    author: 'Sergei',
    creation: 1604241219000,
    content: `
    ## 1 - Architecture - Level easy

    It is now the right time to re-organize/refactor our code. Split this
    monolithic react Component into multiple section. In the end, we should end
    up with the following components: 'Header', 'Footer', 'Main', 'Channels',
    'Channel', 'Messages', 'MessageSend':

    - 'App.js' file uses 'Header.js', 'Main.js', 'Footer.js'
    - 'Main.js' file uses 'Channels.js', 'Channel.js'
    - 'Channels.js' prints the list of channels
    - 'Channel.js' prints the messages, uses 'Messages.js' and 'MessageSend.js'
    - 'Messages.js' prints the list of messages inside the current channel
    - 'MessageForm.js' send a new message

    \`\`\`
    +--------------------------------------------+
    |                  Header                    |
    +--------------------------------------------+
    |   Channels    |          Channel           |
    |               | +------------------------+ |
    |               | |        Messages        | |
    |               | +------------------------+ |
    |               | |      MessageSend       | |
    |               | +------------------------+ |
    +--------------------------------------------+
    |                  Footer                    |
    +--------------------------------------------+
    \`\`\`
    `,
  },{
    author: 'David',
    creation: 1604241931000,
    content: `
    ## 2 - Styles - Level easy

    Give it some styles, use CSS to make it looks good. Possible source of
    improvements include changing the colors, replacing the HTML "send" button
    with an icon, working on the header, providing day/night themes ... be creative
    `,
  },{
    author: 'Sergei',
    creation: 1604310451000,
    content: `
    ## 3 - Use an external library - Level medium

    Format the date in a human readable format. While the date is generated on
    the server side to ensure its relevance and prevent from forgery, it must be
    displayed according to the user browser local. The
    [Moment.js](https://momentjs.com/) library has been the library of choice
    for many years to accomplish date formatting. Read what is displayed on the
    top right corner of their homepage, it is now depreciated. Read the reasons
    and act accordingly.
    `,
  },{
    author: 'David',
    creation: 1604949631000,
    content: `
    ## 4 - Support message contents in Markdown - Level hard

    Markdown is the most popular syntax to format text into HTML. It is used
    by the majority of the project Readme files, to write documentation and to
    generate websites.

    I recommand you to use the [unified](https://unifiedjs.com/) which is very
    powerful and comes with a lot of plugins. You can read the Markdown to HTML
    guide in the learn section and enrich it with your selection of relevant
    plugins.

    Consider adding syntax highlight support with a library like
    [Prism](https://prismjs.com/).
    `,
  }]);
  const addMessage = (message) => {
    setMessages([
      ...messages,
      message
    ])
  };
  return (
    <div className="App" css={styles.root}>
      <Header className="App-header" cssHeader={styles.header}/>
      {/*<Color cssColor={styles.color}/>*/}
       <Main className="App-main" cssMain={styles.main}
        cssChannels={styles.channels}
        cssChannel={styles.channel}
        cssMessages={styles.messages}
        cssMessagesTitle={styles.messagesTitle}
        cssMessage={styles.message}
        cssMessageAuthor = {styles.messageAuthor}
        cssMessageDate = {styles.messageDate}
        cssMessageContent = {styles.messageContent}
        cssForm={styles.form}
        cssContent={styles.content}
        cssSend={styles.send}
        channel={channel}
        messages={messages}
        addMessage={addMessage}
      />
      <Footer className="App-footerLab" cssFooter={styles.footer}
        cssFooterText={styles.footerText}
        cssFooterSeparation={ styles.footerSeparation }
      />
    </div>
  );
}
