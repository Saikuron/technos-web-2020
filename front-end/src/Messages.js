import React from 'react';

function Messages( props )
{
  return(
    <div style={props.cssMessages}>
      <h1>Messages for {props.channel.name}</h1>
      <ul>
        { props.messages.map( (message, i) => (
          <li key={i} style={props.cssMessage}>
            <p>
              <span>{message.author}</span>
              {' '}
              <span>{(new Date(message.creation)).toString()}</span>
            </p>
            <div>
              {
                message.content
                .split(/(\n +\n)/)
                .filter( el => el.trim() )
                .map( el => <p>{el}</p>)
              }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
