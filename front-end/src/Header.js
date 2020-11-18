import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'

const styles = {
  header: {
    textAlign: 'center',
    height: '50px',
    paddingBottom: '1.5%',
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
  },
  headerLogIn: {
    backgroundColor: 'red',
  },
  headerLogOut: {
    backgroundColor: 'blue',
  },
}

export default () => {
  return (
    <header css={styles.header}>
      <h1>ECE WebChat application</h1>
    </header>
  );
}
