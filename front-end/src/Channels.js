// import { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useHistory } from 'react-router-dom'
import { IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch'
import AddIcon from '@material-ui/icons/Add';

const useStyles = (theme) => ({
   root: {
    //  minWidth: '200px',
     paddingTop: '20px',
     textAlign: 'left',
   },
  channel: {
    padding: '.2rem .5rem',
    whiteSpace: 'nowrap', 
  },
  send: {
    width: '100%',
    // textAlign: 'left'
  },
  switch: {
    flex: 1,
    flexDirection: 'column-reverse',
  }
})

export default ({channels}) => {
  const history = useHistory();
  const styles = useStyles(useTheme())
  const addChannel = (e) => {
    e.preventDefault();
    // setFormChannel(true);
    history.push(`/channels/new`);
  }
  // const [formChannel, setFormChannel] = useState(false);
  return (
    <div>
      <ul style={styles.root}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeIcon/>}
          css={styles.send}
          onClick={ (e) => {
            e.preventDefault()
            history.push('/channels')
          }}
        >
            HOME
        </Button>
        <br/><br/>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SettingsIcon/>}
          css={styles.send}
          onClick={ (e) => {
            e.preventDefault()
            history.push('/settings')
          }}
        >
            SETTINGS
        </Button>
        <br/><br/><br/>
        { channels.map( (channel, i) => (
          <li key={i}>
          <br/>
            <Button
              variant="contained"
              css={styles.send}
              onClick={ (e) => {
                e.preventDefault()
                history.push(`/channels/${channel.id}`)
              }}
            >
                {channel.name}
            </Button>
          </li>
        ))}
      <br/>
      </ul>
      <Button
        variant="contained"
        color="secondary"
        css={styles.send}
        startIcon={<AddIcon />}
        onClick={addChannel}
      >
        Create channel
      </Button>
    </div>
  );
}
