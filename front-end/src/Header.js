import React from 'react';

function Header( props )
{
  return(
    <header className={props.className} style={props.cssHeader}>
      <h1>ECE WebChat application</h1>
    </header>
  );
}

export default Header;
