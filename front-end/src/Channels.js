// import { useState } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import Link from '@material-ui/core/Link'
// Local
import { useHistory } from 'react-router-dom'
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const styles = {
  // root: {
  //   minWidth: '200px',
  // },
  channel: {
    padding: '.2rem .5rem',
    whiteSpace: 'nowrap',
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
        {channels.map((channel, i) => (
          <li key={i} css={styles.channel}>
            <Link
              href={`/channels/${channel.id}`}
              onClick={(e) => {
                e.preventDefault()
                history.push(`/channels/${channel.id}`)
              }}
            >
              {channel.name}
            </Link>
          </li>
        ))}
      </ul>
          <IconButton onClick={addChannel}>
            <AddCircleIcon size='medium' color='primary' />
          </IconButton>
    </div>
  );
}
