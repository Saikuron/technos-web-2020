import React from 'react';

var dayjs = require('dayjs');

var isToday = require('dayjs/plugin/isToday')
var isYesterday = require('dayjs/plugin/isYesterday')
var localizedFormat = require('dayjs/plugin/localizedFormat')
var relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(isToday)
dayjs.extend(isYesterday)
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)

function Messages( props )
{
  const loc = dayjs.locale()

  return(
    <div style={props.cssMessages}>
      <h1>Messages for {props.channel.name}</h1>
      <ul>
        { props.messages.map( (message, i) => (
          <li key={i} style={props.cssMessage}>
            <p>
              From <span style={{fontWeight  : 'bold'}}>{message.author}</span>
              {''}
              <br/>
              <div style={{color: 'red'}}>
              {
                dayjs( message.creation ).isToday() ? (
                  dayjs().diff( dayjs( message.creation ), 'minute' ) < 15 ?
                    dayjs( message.creation ).fromNow() :
                    dayjs( message.creation ).format('LT')
                ) :
                dayjs( message.creation ).isYesterday() ? (loc === "fr" ? "Hier - " : "Yesterday - ") + dayjs( message.creation ).format('LT') :
                dayjs( message.creation ).format('L - LT')
              }
              </div>
            </p>
            <div style={{paddingLeft: '30px',paddingRight: '30px'}}>
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
