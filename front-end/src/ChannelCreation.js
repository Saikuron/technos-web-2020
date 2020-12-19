/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useContext } from 'react';
import Context from './Context'
import axios from 'axios';

// import { useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// const useStyles = (theme) => {
//     // See https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/OutlinedInput/OutlinedInput.js
//     const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
//     return {
//         form: {
//             borderTop: `2px solid ${borderColor}`,
//             padding: '.5rem',
//             display: 'flex',
//         },
//         content: {
//             flex: '1 1 auto',
//             '&.MuiTextField-root': {
//                 marginRight: theme.spacing(1),
//             },
//         },
//         send: {
//         },
//     }
// }

function ChannelCreation({fetchChannels}) {
    // const styles = useStyles(useTheme())
    const [nameContent, setNameContent] = useState('');
    const {
        oauth
        // , setOauth, drawerVisible, setDrawerVisible
      } = useContext(Context)
    const onSubmit = async () => {
        if(!nameContent) return;
        // const { data: channel } = 
        console.log(oauth.email)
        await axios.post(
          `http://localhost:3001/channels`
          , {
            name: nameContent,
            users: [{email:oauth.email}]
        })
        fetchChannels()
        setNameContent('')
        // alert('submit');
    }
    const handleChange = (e) => {
        setNameContent(e.target.value);
    }
    // console.log(oauth.email)
    return (
        <div>
            <h1>Channel Creation</h1>
            <form onSubmit={onSubmit} noValidate>
                <TextField 
                    id="standard-basic"
                    label="Name"
                    value={nameContent}
                    onChange={handleChange} 
                />
                <Button variant="contained" onClick={onSubmit}>
                    Create Channel
                </Button>
            </form>
        </div>
    );
}

export default ChannelCreation;