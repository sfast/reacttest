import React, { memo, useState } from 'react';
import { 
  ButtonDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem,
  Popover, 
  PopoverHeader, 
  PopoverBody,
  Button 
} from 'reactstrap';
import './Header.scss';

const Header = memo((props) => {
  const [languageDropdownOpen, toggleLangDropDown] = useState(false);
  const [notificationDropDown, toggleNotifDropDown] = useState(false);

  function toggleLang() {
    toggleLangDropDown(!languageDropdownOpen);
  };

  function toggleNots() {
    toggleNotifDropDown(!notificationDropDown);
  };

  return (
    <div className='header' >
      <div className='header__item' >
        <Button 
          color='primary'
          className='justify-content-center align-items-center collapse-navbar navbar_toggle_button'
          onClick={props.handleonSidebarToggle}
        >
          <i className={`fa fa-step-${props.sidebarOpen ? 'backward' : 'forward'}`}/>
        </Button>
      </div>
      <div className='header__item'>
        <ul className="navbar">
          <li className='navbar__item'>
            <ButtonDropdown isOpen={languageDropdownOpen} toggle={toggleLang}>
              <DropdownToggle caret className='header_dropdown_button'>
                English
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Language</DropdownItem>
                <DropdownItem>English</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </li>
          <li className='navbar__item'>
            <Button id="Popover1" type="button" className='header_dropdown_button'>
              <i className="fa fa-bell"/>
            </Button>
            <Popover placement="bottom" isOpen={notificationDropDown} target="Popover1" toggle={toggleNots}>
              <PopoverHeader>Notifications</PopoverHeader>
              <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
            </Popover>
          </li>
          <li className='navbar__item'><i className="fa fa-sign-out icon icon--margin_right"/> Log out</li>
        </ul>
      </div>
    </div>
  )
});

export default Header;
