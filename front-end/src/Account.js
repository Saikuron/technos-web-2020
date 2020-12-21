import {useContext} from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
// Local
import Context from './Context'
import Channels from './Channels'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

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
    channels
  } = useContext(Context)

  return (
    <div css={styles.root}>
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
        
      <div style={styles.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
            <Grid item xs>
              <div css={styles.card}>
                <Typography color="textPrimary">
                  Change your name (actual : )
                </Typography>
                <form noValidate>
                  <TextField 
                      id="standard-basic"
                      label="Name"
                  />
                  <Button variant="contained">
                      Create Channel
                  </Button>
                </form>
              </div>
            </Grid>
            <Grid item xs>
              <div css={styles.card}>
                <Typography color="textPrimary">
                  Change your mail (actual : )
                </Typography>
                <form noValidate>
                  <TextField 
                      id="standard-basic"
                      label="Mail"
                  />
                  <Button variant="contained">
                      Create Channel
                  </Button>
                </form>
              </div>
            </Grid>
            <Grid item xs>
              <div css={styles.card}>
                <Typography color="textPrimary">
                  Change your password (actual : )
                </Typography>
                <form noValidate>
                  <TextField 
                      type="password"
                      id="standard-basic"
                      label="Password"
                  />
                  <Button variant="contained">
                      Create Channel
                  </Button>
                </form>
              </div>
            </Grid>
            <Grid item xs>
              <div css={styles.card}>
                <Typography color="textPrimary">
                  Change your avatar (actual : )
                </Typography>
                <form noValidate>
                  <TextField 
                      id="standard-basic"
                      label="Avatar"
                  />
                  <Button variant="contained">
                      Create Channel
                  </Button>
                </form>
              </div>
            </Grid>
          <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={1}
            >
            <Link href={`/`}>Return to homepage</Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
