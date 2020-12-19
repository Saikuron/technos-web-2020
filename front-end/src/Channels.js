import {useContext, useEffect} from 'react';
import axios from 'axios';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import Link from '@material-ui/core/Link'
// Local
import Context from './Context'
import {useHistory} from 'react-router-dom'
import SendIcon from "@material-ui/icons/Send"
import Button from "@material-ui/core/Button"
import Switch from '@material-ui/core/Switch'
import { View } from 'react';

const styles = {
   root: {
     minWidth: '200px',
     paddingTop: '20px',
     textAlign: 'left',
   },
  channel: {
    padding: '.2rem .5rem',
    whiteSpace: 'nowrap', 
  },
  send: {
    width: '70%',
    textAlign: 'left'
  },
  switch: {
    flex: 1,
    flexDirection: 'column-reverse',
  }
}

export default () => {
  const {
    oauth,
    channels, setChannels
  } = useContext(Context)
  const history = useHistory();
  useEffect( () => {
    const fetch = async () => {
      try{
        const {data: channels} = await axios.get('http://localhost:3001/channels', {
          headers: {
            'Authorization': `Bearer ${oauth.access_token}`
          }
        })
        setChannels(channels)
      }catch(err){
        console.error(err)
      }
    }
    fetch()
  }, [oauth, setChannels])
  return (
    <ul style={styles.root}>
      <Button
        variant="contained"
        css={styles.send}
        href={`/`}
      >
        <Link>
          HOME
        </Link>
      </Button>
      <br/><br/>
      { channels.map( (channel, i) => (
        <li key={i}>
        <br/>
          <Button
            variant="contained"
            css={styles.send}
            href={`/channels/${channel.id}`}
          >
            <Link
              onClick={ (e) => {
                e.preventDefault()
                history.push(`/channels/${channel.id}`)
              }}
            >
              • {channel.name}
            </Link>
          </Button>
        </li>
      ))}
    <br/><br/> Online Status <Switch />
    </ul>
  );
}
