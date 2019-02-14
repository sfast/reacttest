import React from 'react';
import Item from './ItemCollapse';

const Menu = (props) => {
  return(
    <div className='navmenu'>
      {props.links.map(link => <Item key={link.paths[0].path}  {...link} {...props} />)}
    </div>
  )
}

export default Menu;
