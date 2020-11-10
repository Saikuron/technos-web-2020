import React from 'react';

function Footer( props )
{
  return(
    <footer className={props.className} style={props.cssFooter}>
      <a href="mailto: lucas.rietsch@edu.ece.fr" style={{color: 'white'}}>Email us | </a>
      <a href="tel: 0766112538" style={{color: 'white'}}>Call us</a>
    </footer>
  );
}

export default Footer;
