import React, { memo, useEffect } from 'react';
import {
  // Collapse,
  // Navbar,
  // NavbarToggler,
  // NavbarBrand,
  // Nav,
  // NavItem,
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownItem,
  // DropdownMenu,
  Button } from 'reactstrap';
import './Header.scss';


// function logOut() {

// }
const Header = memo((props) => {
    useEffect(() => {
      // Update the document title using the browser API
      // console.log({headerRef:headerRef.current.getBoundingClientRect()});
      // console.log({menuRef:menuRef.current.getBoundingClientRect()});
      // console.log({buttonRef:buttonRef.current.getBoundingClientRect()});
    });
    const headerRef = React.createRef()
    const buttonRef = React.createRef()
    const menuRef = React.createRef()
    return (
      <div className='header' ref={headerRef}>
        <div className='header__item' ref={buttonRef}>
          <Button 
            color='primary'
            className='justify-content-center align-items-center collapse-navbar navbar_toggle_button'
            onClick={props.handleonSidebarToggle}
          >
            <i className={`fa fa-step-${props.sidebarOpen ? 'backward' : 'forward'}`}/>
          </Button>
        </div>
        <div className='header__item'ref={menuRef}>
        <ul className="navbar">
          <li className='navbar__item'>
            <i className="fa fa-globe" aria-hidden={true}/>
            <i className='fa fa-sort-down icon icon--margin_left line_height'/>
              {/* <span>English</span> */}
            </li>
          <li className='navbar__item'><i className="fa fa-bell"/></li>
          <li className='navbar__item'><i className="fa fa-sign-out icon icon--margin_right"/> Log out</li>
        </ul>
        </div>
      </div>
    )
})

export default Header;
