import React from 'react';

import Channels from './Channels';
import Channel from './Channel';

function Main( props )
{
  return(
    <main className={props.className} style={props.cssMain}>
      <Channels cssChannels={props.cssChannels}/>
      <Channel cssChannel = {props.cssChannel}
        cssMessages = {props.cssMessages}
        cssMessagesTitle = {props.cssMessagesTitle}
        cssMessage = {props.cssMessage}
        cssMessageAuthor = {props.cssMessageAuthor}
        cssMessageDate = {props.cssMessageDate}
        cssMessageContent = {props.cssMessageContent}
        cssForm={props.cssForm}
        cssContent={props.cssContent}
        cssSend={props.cssSend}
        addMessage = {props.addMessage}
        channel = {props.channel}
        messages = {props.messages}
      />
    </main>
  );
}

export default Main;
