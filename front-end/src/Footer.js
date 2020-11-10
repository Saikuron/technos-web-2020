import React from 'react';

function Footer( props )
{
  return(
    <footer className={props.className} style={ props.cssFooter }>
      <a href="mailto: lucas.rietsch@edu.ece.fr" style={ props.cssFooterText }>Email us</a>
      <span style={ props.cssFooterSeparation }> | </span>
      <a href="tel: 0766112538" style={ props.cssFooterText }>Call us</a>
    </footer>
  );
}

export default Footer;
