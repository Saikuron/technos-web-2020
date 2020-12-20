import {useState, useCallback, useContext, useEffect} from 'react';
import Context from './Context'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList(props) {
  const classes = useStyles();
  const {checked, setChecked} = props;
  // const [checked, setChecked] = useState([0]);

  const handleToggle = (user) => () => {
    const currentIndex = checked.indexOf(user);
    const newChecked = [...checked];
    
    if (currentIndex === -1) {
      newChecked.push(user);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    
    setChecked(newChecked);
  };

  const {
    users, setUsers, oauth
  } = useContext(Context)

  const fetch = useCallback( async () => {
    try {
      const { data: usersFromDB } = await axios.get('http://localhost:3001/users', {
        headers: {
          'Authorization': `Bearer ${oauth.access_token}`
        }
      })
      setUsers(usersFromDB)
      console.log(usersFromDB)
    } catch (err) {
      console.error(err)
    }
  },[setUsers])
  useEffect(() => {
    fetch()
  }, [setUsers, fetch])

  return (
    <List className={classes.root}>
      {users.map((user) => {
        if( user.email === oauth.email ) return
        const labelId = `checkbox-list-label-${user.id}`;

        return (
          <ListItem key={user.id} role={undefined} dense button onClick={handleToggle(user)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(user) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${user.username}`} />
          </ListItem>
        );
      })}
    </List>
  );
}
