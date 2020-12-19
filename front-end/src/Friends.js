
/** @jsx jsx */
import { jsx } from '@emotion/core'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Context from './Context';

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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Do you want some new friends ?</h1>
        </Grid>
        <Grid item xs={12}>
          <form noValidate>
            <TextField 
                id="standard-basic"
                label="Username"
            />
            <Button variant="contained">
                Search friend
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
