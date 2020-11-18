import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
// Markdown
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'
// Time // David Worms version, I used mine instead
// import dayjs from 'dayjs'
// import calendar from 'dayjs/plugin/calendar'
// import updateLocale from 'dayjs/plugin/updateLocale'
// dayjs.extend(calendar)
// dayjs.extend(updateLocale)
// dayjs.updateLocale('en', {
//   calendar: {
//     sameElse: 'DD/MM/YYYY hh:mm A'
//   }
// })
var dayjs = require('dayjs');
var isToday = require('dayjs/plugin/isToday')
var isYesterday = require('dayjs/plugin/isYesterday')
var localizedFormat = require('dayjs/plugin/localizedFormat')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(isToday)
dayjs.extend(isYesterday)
dayjs.extend(localizedFormat)
dayjs.extend(relativeTime)

const useStyles = (theme) => ({
  root: {
    position: 'relative',
    flex: '1 1 auto',
    overflow: 'auto',
    '& ul': {
      'margin': 0,
      'padding': 0,
      'textIndent': 0,
      'listStyleType': 0,
    },
  },
  messagesTitle: {
    paddingLeft: '5%',
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
    fontWeight: 'bold',
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
    border: '1px solid #ffffff33',
    borderRadius: '25px',
  },
  fabWrapper: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50px',
  },
  fab: {
    position: 'fixed !important',
    top: 0,
    width: '50px',
  },
})

export default forwardRef(({
  channel,
  messages,
  onScrollDown,
}, ref) => {
  const styles = useStyles(useTheme())
  // Expose the `scroll` action
  useImperativeHandle(ref, () => ({
    scroll: scroll
  }));
  const rootEl = useRef(null)
  const scrollEl = useRef(null)
  const scroll = () => {
    scrollEl.current.scrollIntoView()
  }
  // See https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
  const throttleTimeout = useRef(null) // react-hooks/exhaustive-deps
  useLayoutEffect(() => {
    const rootNode = rootEl.current // react-hooks/exhaustive-deps
    const handleScroll = () => {
      if (throttleTimeout.current === null) {
        throttleTimeout.current = setTimeout(() => {
          throttleTimeout.current = null
          const { scrollTop, offsetHeight, scrollHeight } = rootNode // react-hooks/exhaustive-deps
          onScrollDown(scrollTop + offsetHeight < scrollHeight)
        }, 200)
      }
    }
    handleScroll()
    rootNode.addEventListener('scroll', handleScroll)
    return () => rootNode.removeEventListener('scroll', handleScroll)
  })
  const loc = dayjs.locale()
  return (
    <div css={styles.root} ref={rootEl}>
      <h1 css={styles.messagesTitle}>Messages for {channel.name}</h1>
      <ul>
        {messages.map((message, i) => {
          const { contents: content } = unified()
            .use(markdown)
            .use(remark2rehype)
            .use(html)
            .processSync(message.content)
          return (
            <li key={i} css={styles.message}>
              <p>
                <span css={styles.messageAuthor} >{message.author}</span>
                {' - '}
                <span css={styles.messageDate}>
                  {
                    dayjs(message.creation).isToday() ? (
                      dayjs().diff(dayjs(message.creation), 'minute') < 15 ?
                        dayjs(message.creation).fromNow() :
                        dayjs(message.creation).format('LT')
                    ) :
                      dayjs(message.creation).isYesterday() ? (loc === "fr" ? "Hier - " : "Yesterday - ") + dayjs(message.creation).format('LT') :
                        dayjs(message.creation).format('L - LT')
                    // dayjs().calendar(message.creation)
                  }
                </span>
              </p>
              <div css={styles.messageContent} dangerouslySetInnerHTML={{ __html: content }}>
              </div>
            </li>
          )
        })}
      </ul>
      <div ref={scrollEl} />
    </div>
  )
})
