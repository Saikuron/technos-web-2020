import React from 'react';

import Messages from './Messages';
import MessageForm from './MessageForm';

function Channel( props )
{
  return(
    <div style = {props.cssChannel}>
      <Messages cssMessages = {props.cssMessages}
        cssMessagesTitle = {props.cssMessagesTitle}
        cssMessage = {props.cssMessage}
        cssMessageAuthor = {props.cssMessageAuthor}
        cssMessageDate = {props.cssMessageDate}
        cssMessageContent = {props.cssMessageContent}
        channel = {props.channel}
        messages = {props.messages}
      />
      <MessageForm cssForm = {props.cssForm}
        cssContent = {props.cssContent}
        cssSend = {props.cssSend}
        addMessage = {props.addMessage}
      />
    </div>
  );
}

export default Channel;
