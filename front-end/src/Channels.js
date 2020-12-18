import {useContext, useEffect} from 'react';
import axios from 'axios';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import Link from '@material-ui/core/Link'
// Local
import Context from './Context'
import {useHistory} from 'react-router-dom'

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
      { channels.map( (channel, i) => (
        <li key={i}>
          <Link
            href={`/channels/${channel.id}`}
            onClick={ (e) => {
              e.preventDefault()
              history.push(`/channels/${channel.id}`)
            }}
          >
            • {channel.name}
          </Link>
        </li>
      ))}
      <Link
        href={`/`}>• HOME</Link>
    </ul>
  );
}
