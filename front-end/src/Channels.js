// import { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
// import Link from '@material-ui/core/Link'
// Local
import { useHistory } from 'react-router-dom'
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HomeIcon from '@material-ui/icons/Home';
import Button from "@material-ui/core/Button"
import Switch from '@material-ui/core/Switch'

const styles = {
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
}

export default ({channels}) => {
  const history = useHistory();
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
    <br/><br/> Online Status <Switch />
    </ul>
          <IconButton onClick={addChannel}>
            <AddCircleIcon size='medium' color='primary' />
          </IconButton>
    </div>
  );
}
