import React from 'react';

function Header( props )
{
  return(
    <header className={props.className} style={props.cssHeader}>
      <h1>header</h1>
    </header>
  );
}

export default Header;
