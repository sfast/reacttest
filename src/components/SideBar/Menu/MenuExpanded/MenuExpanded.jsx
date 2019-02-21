import React from 'react';
import Item from './ItemExpanded';

const Menu  = (props) => {
  return(
    <div className='navmenu'>
      {props.links.map(link => <Item key={link.paths[0].path}  {...link} {...props} />)}
    </div>
  )
};

export default Menu;
