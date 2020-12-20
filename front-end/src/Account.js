
/** @jsx jsx */
import { jsx } from '@emotion/core'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const styles = {
  root: {
    textAlign: 'center',
    height: '100%',
    flex: '1 1 auto',
    display: 'flex',
  },
}

export default () => {
  return (
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
  );
}
