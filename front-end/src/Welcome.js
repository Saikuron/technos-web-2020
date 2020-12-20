import {} from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useHistory } from 'react-router-dom'
// Layout
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ReactComponent as ChannelIcon} from './icons/channel.svg';
import {ReactComponent as SettingsIcon} from './icons/settings.svg';
import {ReactComponent as StarIcon} from './icons/star.svg';
import Link from '@material-ui/core/Link';

const useStyles = (theme) => ({
  root: {
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',
    // background: 'rgba(0,0,0,.2)',
  },
  card: {
    textAlign: 'center',
  },
  icon: {
    width: '40%',
    fill: '#fff',
  },
  text: {
    width: '30%',
    fill: '#fff',
    backgroundColor: 'blue',
  }
})

export default () => {
  const styles = useStyles(useTheme())
  const history = useHistory();
  const addChannel = (e) => {
    e.preventDefault();
    // setFormChannel(true);
    history.push(`/channels/new`);
  }
  const gotoSettings = (e) => {
    e.preventDefault();
    // setFormChannel(true);
    history.push(`/settings`);
  }
  return (
    <div css={styles.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item xs>
          <div css={styles.card}>
            <Typography color="textPrimary">
                Welcome to our chat application !<br/>
                On the left side there are the channels (you can only access the ones you are in)<br/>
                Down there are some stuffs you are free to try (settings, account...)<br/>
                <br/>
                Enjoy !<br/>
            </Typography>
          </div>
        </Grid>
      </Grid>
        <Grid item xs>
          <div css={styles.card} onClick={addChannel}>
            <ChannelIcon css={styles.icon} />
            <Typography color="textPrimary">
              Create channels
            </Typography>
          </div>
        </Grid>
        <Grid item xs>
          <div css={styles.card} onClick={gotoSettings}>
            <SettingsIcon css={styles.icon} />
            <Typography color="textPrimary">
              Settings
            </Typography>
          </div>
        </Grid>
        <Grid item xs>
          <div css={styles.card}>
            <StarIcon css={styles.icon} />
            <Typography color="textPrimary">
              Favorite Channel
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
