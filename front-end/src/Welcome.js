import {} from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {ReactComponent as ChannelIcon} from './icons/channel.svg';
import {ReactComponent as FriendsIcon} from './icons/friends.svg';
import {ReactComponent as SettingsIcon} from './icons/settings.svg';
import {ReactComponent as StarIcon} from './icons/star.svg';

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
          <div>
            <Typography color="textPrimary">
              <div css={styles.card}>
                Welcome to our chat application !<br/>
                I have no idea what to write here !<br/>
                But I am happy because my layout works !<br/>
                Youpi !<br/>
                Welcome to our chat application !<br/>
              </div>
            </Typography>
          </div>
        </Grid>
      </Grid>
          <Grid item xs>
            <div css={styles.card}>
              <ChannelIcon css={styles.icon} />
              <Typography color="textPrimary">
                Create channels
              </Typography>
            </div>
          </Grid>
          <Grid item xs>
            <div css={styles.card}>
              <FriendsIcon css={styles.icon} />
              <Typography color="textPrimary">
                Invite friends
              </Typography>
            </div>
          </Grid>
          <Grid item xs>
            <div css={styles.card}>
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
