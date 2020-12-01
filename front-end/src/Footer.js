import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'

const styles = {
  footer: {
    backgroundColor: 'rgba(255,255,255,.3)',
    flexShrink: 0,
    textAlign: 'center',
    height: '50px',
    paddingTop: '1.5%',
    color: 'white',
  },
  footerText: {
    color: 'white',
    textDecoration: 'none',
  },
  footerSeparation: {
    margin: '0.5%',
  },
}

export default (/*props*/) => {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  let email = getCookie('email')
  return (
    <footer css={styles.footer}>
      <a href="mailto: lucas.rietsch@edu.ece.fr" css={styles.footerText}>Email us</a>
      <span css={styles.footerSeparation}> | </span>
      <a href="tel: 0766112538" css={styles.footerText}>Call us</a>
      { email ? ' '+email : ''}
      {/* {props.user ? props.user : ''} */}
    </footer>
  );
}
