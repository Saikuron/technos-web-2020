import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
  root: {
    flex: '1 1 auto',
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& > div': {
      margin: `${theme.spacing(1)}`,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& fieldset': {
      border: 'none',
      '& label': {
        marginBottom: theme.spacing(.5),
        display: 'block',
      },
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '25ch',
  },
})

export default ({
  onUser
}) => {
  let login = () => {
    const crypto = require('crypto');
    let base64URLEncode = function (str) {
      return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    };

    let sha256 = function (buffer) {
      return crypto.createHash('sha256')
        .update(buffer)
        .digest();
    };
    let authorization_endpoint = "http://127.0.0.1:5556/dex/auth",
      client_id = "example-app",
      code_challenge,
      code_verifier,
      data,
      redirect_uri = "http://127.0.0.1:3000/callback",
      scope = ["openid", "email", "offline_access"],
      // stdout,
      url;
    // _ref;
    code_verifier = base64URLEncode(crypto.randomBytes(32));
    code_challenge = base64URLEncode(sha256(code_verifier));
    url = [
      `${authorization_endpoint}?`,
      `client_id=${client_id}&`,
      `scope=${scope.join('%20')}&`,
      "response_type=code&",
      `redirect_uri=${redirect_uri}&`,
      `code_challenge=${code_challenge}&`,
      "code_challenge_method=S256"
    ].join('');
    data = {
      code_verifier: code_verifier,
      url: url
    };
    // stdout.write(JSON.stringify(data, null, 2));
    // return stdout.write('\n\n');
    document.location.href = url;
    document.cookie = `code_verifier=${code_verifier}`
  };

  const axios = require('axios');

  let getUserInfo = async (access_token) => {
    let userinfo_endpoint ="http://127.0.0.1:5556/dex/userinfo";
    let { data: user_infos } = await axios.get(userinfo_endpoint, {
      headers: {
        'Authorization': "Bearer " + access_token
      }
    });
    document.cookie = `email=${user_infos.email}`;
    // onUser({ username: user_infos.email })
    return user_infos;
  };

  // https://stackoverflow.com/questions/10730362/get-cookie-by-name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  // https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
  const urlParams = new URLSearchParams(window.location.search);
  const codeParam = urlParams.get('code');
  if (codeParam) {
    // If there is 'code' in the query parameters, then we come from an oauth server
    // login = () => {};
    let code_verifier = getCookie('code_verifier');
    // change for the right user
    onUser({ username: 'david' })
    const qs = require('qs');
    let token_endpoint = "http://127.0.0.1:5556/dex/token",
      client_id = "example-app",
      redirect_uri = "http://127.0.0.1:3000/callback",
      client_secret = "";
    const getData = async () => {
      let { data: tokens } = await axios.post(token_endpoint, qs.stringify({
        grant_type: 'authorization_code',
        client_id: "" + client_id,
        redirect_uri: "" + redirect_uri,
        client_secret: client_secret,
        code_verifier: "" + code_verifier,
        code: "" + codeParam
      }));
      // console.log(tokens)
      document.cookie = `access_token=${tokens.access_token}`;
      // document.cookie = `refresh_token=${tokens.refresh_token}`;
      // document.cookie = `id_token=${tokens.id_token}`;
    }
    // await getData()
    getData()
    // document.location.href = "http://127.0.0.1:3000/";
  }
  // else {
    // let id_token = getCookie('id_token')
    let access_token = getCookie('access_token')
    // let refresh_token = getCookie('refresh_token')
    if (access_token /*&& id_token && refresh_token*/) {
      // No need to connect
      // onUser({ username: 'david' })
      // I can't add await here but I think it would solve the problem
      let inf = getUserInfo(access_token);
      // Change refresh token
    }
  // }

  const styles = useStyles(useTheme())
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div css={styles.root}>
      <div>
        <fieldset>
          <TextField id="filled-basic" label="Username" variant="filled" />
        </fieldset>
        <fieldset>
          <FormControl className={clsx(styles.margin, styles.textField)} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </fieldset>
        <fieldset>
          <div className={styles.root}>
            <Button variant="contained" color="primary" size="large" onClick={(e) => {
              e.stopPropagation()
              // onUser({ username: 'david' })
              // go to url to login
              login();
            }}>
              Login
            </Button>
          </div>
        </fieldset>
      </div>
    </div>
  );
}
