import { useContext, useState } from 'react'
import React from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Context from './Context'
import CardJean from './CardJean'
import CardLucas from './CardLucas'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/core/Slider';
import SendIcon from '@material-ui/icons/Send';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import SaveIcon from '@material-ui/icons/Save';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    width: '100%',
    position: 'relative',
    height: '100%'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
  button: {
    margin: theme.spacing(1),
    marginTop: '2%',
    marginLeft: '2%',
    paddingLeft: '4%',
    paddingRight: '4%',
  },
}));

export default function FloatingActionButtonZoom() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [settings, setSettings] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [switchesState, setSwitchesState] = useState({
    checkedNotif: true,
    checkedActive: true,
  });
  const [sliderValue, setSliderValue] = useState(0);
  const [themeValue, setThemeValue] = useState('');
  const [favChannel, setFavChannel] = useState('');

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleSwitch = (event) => {
    setSwitchesState({ ...switchesState, [event.target.name]: event.target.checked });
  };
  const handleSlider = (event, newValue) => {
    setSliderValue(newValue);
  };
  const handleChangeTheme = (event) => {
    setThemeValue(event.target.value);
  }
  const handleChangeFavChannel = (event) => {
    setFavChannel(event.target.value);
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const goHome = (e) => {
    e.preventDefault();
    // setFormChannel(true);
    history.push(`/`);
  }

  const {
    oauth, setOauth
  } = useContext(Context)

  const onClickLogout = (e) => {
    e.stopPropagation()
    setOauth(null)
    history.push('/')
    setOpen(false)
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'secondary',
      className: classes.fab,
      icon: <HomeIcon />,
      label: 'Home',
      onClick: {goHome}
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: <HomeIcon />,
      label: 'Home',
      onClick: {goHome}
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: <HomeIcon />,
      label: 'Home',
      onClick: {goHome}
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: <HomeIcon />,
      label: 'Home',
      onClick: {goHome}
    },
  ];

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const {
    channels
  } = useContext(Context)
  const saveSettings = (e) => {
    e.preventDefault()
    const newSettings = {
      username: username,
      email: email,
      switchesState: switchesState,
      sliderValue: sliderValue,
      themeValue: themeValue,
      favChannel: favChannel,
    }
    setSettings(newSettings)
    // await axios.put(`http://localhost:3001/users/${oauth.email}`)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
        >
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="About us" {...a11yProps(1)} />
          <Tab label="Contact us" {...a11yProps(2)} />
          <Tab label="Log Out" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <TextField 
            id="standard-basic"
            label={oauth.username}
            placeholder="Change username"
            style={{width: '300px'}}
            value={username}
            onChange={handleChangeUsername}
          />
          <br/>
          <TextField 
              id="standard-basic"
              label={oauth.email}
              placeholder="Change mail"
              style={{width: '300px'}}
              value={email}
              onChange={handleChangeEmail}
          />
          <br/><br/>
          Notifications 
          <Switch
            checked={switchesState.checkedNotif}
            onChange={handleSwitch}
            name="checkedNotif"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <br/>
          <Typography id="discrete-slider" gutterBottom>
            Notifications volume
          </Typography>
          <Slider
            defaultValue={sliderValue}
            value={sliderValue}
            onChange={handleSlider}
            //getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
            style={{width: '300px'}}
          />
          <br/><br/>
          <FormControl variant="filled">
            <InputLabel id="demo-simple-select-filled-label">Theme</InputLabel>
            <Select
              style={{width:'300px'}}
              value={themeValue}
              onChange={handleChangeTheme}
            >
              <MenuItem value={1}>Dark</MenuItem>
              <MenuItem value={2}>Light</MenuItem>
              <MenuItem value={3}>Auto</MenuItem>
            </Select>
          </FormControl>
          <br/>
          Show other if I am active 
          <Switch
            checked={switchesState.checkedActive}
            onChange={handleSwitch}
            color="primary"
            name="checkedActive"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
          <br/><br/>
          <FormControl variant="filled">
            <InputLabel id="demo-simple-select-filled-label">My favorite channel</InputLabel>
            <Select
              style={{width:'300px'}}
              value={favChannel}
              onChange={handleChangeFavChannel}
            >
              { channels.map( (channel, i) => (
                <MenuItem value={channel.id}>{channel.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* Save */}
          <br/>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={saveSettings}
          >
            Save
          </Button>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <br/>
          <Grid container>
            <Grid item xs={6}>
              <CardJean />
            </Grid>
            <Grid item xs={6}>
              <CardLucas />
            </Grid>
          </Grid>
          We are Jean & Lucas, students in IS at ECE Paris<br/>
          <FormControlLabel
            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
            label="Let us know you love us"
          />
          <br/><br/>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Read our general conditions
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"You want to know more?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Our app have been designed by ourselves and we basically don t want anybody else to steal our code, 
                so don t. Thank u !
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <FormControl>
            <TextField id="outlined-basic" label="Give us your mail" variant="outlined" style={{width: '300px'}} required/><br/>
            <TextField id="outlined-basic" label="What is it about" variant="outlined" style={{width: '300px'}} required/><br/><br/>
            <TextField
              id="outlined-multiline-static"
              label="Object"
              required
              multiline
              rows={4}
              type="mail"
              variant="outlined"
              style={{width: '300px'}}
            /><br/><br/>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SendIcon />}
            >
              Send
            </Button>
          </FormControl>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Button variant="outlined" color="secondary" onClick={handleClickOpen} style={{width: '60%', textAlign: 'center', height:'200px'}}> 
            Click to log out
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Please confirm"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Click the button below to confirm ! Hope we will see you soon !
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={onClickLogout} color="secondary">
                Confirm logging out
              </Button>
            </DialogActions>
          </Dialog>
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab aria-label={fab.label} className={fab.className} color={fab.color} onClick={goHome}>
            {fab.icon} 
          </Fab>
        </Zoom>
      ))}
    </div>
  );
}