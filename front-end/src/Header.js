
import { useContext } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Context from './Context'

const useStyles = (theme) => ({
  header: {
    padding: theme.spacing(1),
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
  },
  headerLogIn: {
    backgroundColor: 'red',
  },
  headerLogOut: {
    backgroundColor: 'blue',
  },
  menu: {
    [theme.breakpoints.up('sm')]: {
      display: 'none !important',
    },
  }
})

export default ({
  drawerToggleListener
}) => {
  const styles = useStyles(useTheme())
  const {
    oauth, setOauth,
    drawerVisible, setDrawerVisible
  } = useContext(Context)
  const drawerToggle = (e) => {
    setDrawerVisible(!drawerVisible)
  }
  const onClickLogout = (e) => {
    e.stopPropagation()
    setOauth(null)
  }
  // const myAccount = (e) => {
  //   e.preventDefault();
  //   // setFormChannel(true);
  //   //history.push(`/account/update`);
  // }
  return (
    <header css={styles.header}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={drawerToggle}
        css={styles.menu}
      >
        <MenuIcon />
      </IconButton>
      {
        oauth ?
          <span>
            {oauth.email} |
            <Link  href={`/account`}> My account </Link>
            |
            <Link onClick={onClickLogout}> Log Out </Link>
            |
            <Link href={`/`}> Home </Link>
          </span>
        :
          <span>new user</span>
      }
      
    </header>
  );
}
