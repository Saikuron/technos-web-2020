import {useContext, useEffect, useCallback} from 'react'
import axios from 'axios'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
// Local
import Context from './Context'
import Channels from './Channels'
import ChannelCreation from './ChannelCreation'
import Channel from './Channel'
import Welcome from './Welcome'
import Account from './Account'
import Settings from './Settings'
import {
  Route,
  Switch,
} from 'react-router-dom'

const useStyles = (theme) => ({
  root: {
    backgroundColor: '#373B44',
    overflow: 'hidden',
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  drawer: {
    width: '200px',
    display: 'none',
  },
  drawerVisible: {
    display: 'block',
  },
})

export default () => {
  const {
    // currentChannel,
    drawerVisible,
  } = useContext(Context)
  const theme = useTheme()
  const styles = useStyles(theme)
  const alwaysOpen = useMediaQuery(theme.breakpoints.up('sm'))
  const isDrawerVisible = alwaysOpen || drawerVisible
  const {
    oauth,
    channels, setChannels
  } = useContext(Context)
  const fetch = useCallback( async () => {
    try {
      const { data: channels } = await axios.get('http://localhost:3001/channels', {
        headers: {
          'Authorization': `Bearer ${oauth.access_token}`,
          'email' : `${oauth.email}` 
        }
      })
      setChannels(channels)
    } catch (err) {
      console.error(err)
    }
    checkUserInDB(oauth)
  },[oauth, setChannels])
  useEffect(() => {
    fetch()
  }, [oauth, setChannels, fetch])
  const fetchChannels = async () => {
    fetch()
  }
  const checkUserInDB = async (userData) => {
    // If we get the user from the db and no return, create user
    const { data: users } = await axios.get('http://localhost:3001/users', {
      headers: {
        'Authorization': `Bearer ${oauth.access_token}`
      }
    })
    let userExists = false;
    if( users.some( user => user.email === userData.email )) {
      // Create a new one
      userExists = true;
    }
    if (!userExists) {
      await axios.post('http://localhost:3001/users', {
        data: {
          username: userData.username,
          email: userData.email,
      }}, {
        headers: {
          'Authorization': `Bearer ${oauth.access_token}`
        }
      })
    }
  }
  return (
    <main css={styles.root}>
      <Drawer
        PaperProps={{ style: { position: 'relative' } }}
        BackdropProps={{ style: { position: 'relative' } }}
        ModalProps={{
          style: { position: 'relative' }
        }}
        variant="persistent"
        open={isDrawerVisible}
        css={[styles.drawer, isDrawerVisible && styles.drawerVisible]}
      >
        <Channels channels={channels}/>
      </Drawer>
      <Switch>
        <Route path="/channels/new">
          <ChannelCreation fetchChannels={fetchChannels}/>
        </Route>
        <Route path="/channels/:id">
          <Channel/>
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </main>
  );
}
