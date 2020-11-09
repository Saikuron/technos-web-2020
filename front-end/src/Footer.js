import React from 'react';

function Footer( props )
{
  return(
    <footer className={props.className} style={props.cssFooter}>
      <a href="mailto: lucas.rietsch@edu.ece.fr" style={{color: 'white'}}>Contact us!</a>
    </footer>
  );
}

export default Footer;
