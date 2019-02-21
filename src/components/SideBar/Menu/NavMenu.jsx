import React from 'react';
import { CSSTransition } from 'react-transition-group';
import MenuExpanded from './MenuExpanded';
import MenuCollapse from './MenuCollapse';

const NavMenu = (props) => {

  return(
    <>
    <CSSTransition in={props.sidebarOpen}
      timeout={300}
      classNames={{
        enter: 'open-sidebar',
        exit: 'close-sidebar',
      }}
      unmountOnExit
    >
      <MenuExpanded {...props}/>
    </CSSTransition> 
  
    {/* {props.sidebarOpen ? null :  */}
    <CSSTransition in={!props.sidebarOpen}
      timeout={300}
      classNames={{
        enter: 'open-sidebar_collapsed',
        exit: 'close-sidebar_collapsed',
      }}
      unmountOnExit
    >
      <MenuCollapse  {...props}/> 
    </CSSTransition>
    {/* } */}
    </>
   )
}
 

export default NavMenu;
