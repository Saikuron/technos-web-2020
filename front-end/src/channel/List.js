import {forwardRef, useImperativeHandle, useLayoutEffect, useRef, useContext} from 'react'
import Context from '../Context'
import Gravatar from 'react-gravatar'
import axios from 'axios'
// import {useHistory} from 'react-router-dom'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
// Markdown
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'
//Icons
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
// Time
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import updateLocale from 'dayjs/plugin/updateLocale'
dayjs.extend(calendar)
dayjs.extend(updateLocale)
dayjs.updateLocale('en', {
  calendar: {
    sameElse: 'DD/MM/YYYY hh:mm A'
  }
})

const useStyles = (theme) => ({
  root: {
    position: 'relative',
    flex: '1 1 auto',
    'pre': {
      
      overflowY: 'auto',
    },
    '& ul': {
      'margin': 0,
      'padding': 0,
      'textIndent': 0,
      'listStyleType': 0,
    },
  },
  message: {
    padding: '.2rem .5rem',
    ':hover': {
      backgroundColor: 'rgba(255,255,255,.05)',
    },
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
  icons: {
    height: '17px'
  }
})

export default forwardRef(({
  channel,
  messages,
  onScrollDown,
  fetchMessages,
}, ref) => {
  const styles = useStyles(useTheme())
  const {oauth} = useContext(Context)
  // const history = useHistory();
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
  useLayoutEffect( () => {
    const rootNode = rootEl.current // react-hooks/exhaustive-deps
    const handleScroll = () => {
      if (throttleTimeout.current === null) {
        throttleTimeout.current = setTimeout(() => {
          throttleTimeout.current = null
          const {scrollTop, offsetHeight, scrollHeight} = rootNode // react-hooks/exhaustive-deps
          onScrollDown(scrollTop + offsetHeight < scrollHeight)
        }, 200)
      }
    }
    handleScroll()
    rootNode.addEventListener('scroll', handleScroll)
    return () => rootNode.removeEventListener('scroll', handleScroll)
  })
  // const deleteMessage = async message => async e => {

  return (
    <div css={styles.root} ref={rootEl}>
      <h1>Messages for {channel.name}</h1>
      <ul>
        { messages.map( (message, i) => {
            const {contents: content} = unified()
            .use(markdown)
            .use(remark2rehype)
            .use(html)
            .processSync(message.content)
            return (
              <li key={i} css={styles.message}>
                <p>
                  <Gravatar email={message.authorMail}/>
                  <span>{message.authorMail}</span>
                  {' - '}
                  <span>{dayjs().calendar(message.creation)} </span>
                  { message.authorMail === oauth.email ? 
                    <span>
                      <IconButton onClick={async (e) => {
                        e.preventDefault()
                        // Active un textField plus bas avec un bouton, qui modifiera le message
                      }}>
                        <EditIcon/>
                      </IconButton>
                      <IconButton aria-label="delete" messagecreation={message.creation} onClick={async (e) => {
                        e.preventDefault()
                        axios.delete(`http://localhost:3001/channels/${channel.id}/messages/${message.creation}`)
                        fetchMessages()
                        alert("The message won't appear after reloading")
                        // window.location.reload()
                        // history.push(`/channels/${channel.id}`)
                      }}>
                        <DeleteIcon />
                      </IconButton>
                    </span>
                    : ''
                  }
                </p>
                <div dangerouslySetInnerHTML={{__html: content}}>
                </div>
              </li>
            )
        })}
      </ul>
      <div ref={scrollEl} />
    </div>
  )
})
