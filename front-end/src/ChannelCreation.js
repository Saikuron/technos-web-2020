/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import Context from './Context'
import UsersList from './UsersList'
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
    const [checked, setChecked] = useState([]); 
    const history = useHistory();

    const {
        oauth
        // , setOauth, drawerVisible, setDrawerVisible
      } = useContext(Context)
    const onSubmit = async () => {
        if(!nameContent) return;
        // const { data: channel } = 
        console.log(oauth.email)
        console.log(checked)
        const usersToAdd = checked.map( (userToAdd) => {
            return {email: userToAdd.email}
        })
        usersToAdd.push({email: oauth.email})
        console.log(usersToAdd)
        await axios.post(
          `http://localhost:3001/channels`
          , {
            name: nameContent,
            users: usersToAdd
            // users: [{email:oauth.email}]
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
        <div style={{paddingLeft: '30px'}}>
            <h1>Channel Creation</h1>
            <form onSubmit={onSubmit} noValidate>
                <TextField 
                    id="standard-basic"
                    label="Name"
                    value={nameContent}
                    onChange={handleChange} 
                    style={{width: '260px'}}
                />
                <UsersList checked={checked} setChecked={setChecked} ></UsersList>
                <Button variant="contained" color="primary" onClick={onSubmit} style={{width: '170px'}}>
                    Create Channel
                </Button>
                <Button variant="contained" color="secondary" onClick={(e) => {
                    e.preventDefault()
                    history.push('/channels')
                }} style={{width: '90px'}}>
                    Cancel
                </Button>
            </form>
        </div>
    );
}

export default ChannelCreation;