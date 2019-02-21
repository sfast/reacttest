import React, { useState } from 'react';
import { 
  Button, 
  ButtonDropdown, 
  DropdownToggle,
  DropdownMenu, 
  DropdownItem 
} from 'reactstrap';
import './heading.scss';

const Heading  = (props) => {
  const [dropdownOpen, toggle] = useState(false);
  function handleOnToggle() {
    toggle(!dropdownOpen);
  }
  const buttons = props.buttons ? props.buttons.map(button =>  { 
    switch(button.type){
      case 'button' : return <div className='heading__item_button' key={button.name}><Button  onClick={button.action} color='primary'>{button.name}</Button></div>;
      case 'dropdown' : return(
      <div className='heading__item_button' key={button.name}>
        <ButtonDropdown   isOpen={dropdownOpen}  toggle={handleOnToggle}> 
        <DropdownToggle caret outline color='primary'>
          {button.name}
        </DropdownToggle>
        <DropdownMenu>
          {button.actions.map(act => <DropdownItem key={act}>{act}</DropdownItem> )}
        </DropdownMenu>
      </ButtonDropdown>
      </div>);
      default : return null;
    }
  }) : null;
  return(
    <div className='heading'>
      <div className='heading__item'>
        <h3>{props.heading}
          <sup>
            <button  className='heading__help_button' >
              <svg viewBox="0 0 100 100">
                <path d="M50 85.5a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5zM18.82 31.17a7.25 7.25 0 1 0 14.51 0 16.67 16.67 0 1 1 33.34 0c0 20.9-23.92 10-23.92 39.05a7.25 7.25 0 1 0 14.5 0c0-15.98 23.93-11.79 23.93-39.05a31.18 31.18 0 0 0-62.36 0z"></path>
              </svg>
          </button>
          </sup>
        </h3>
      </div>
      <div className='heading__item'>
      {buttons}
      </div>
    </div>
  )
}

export default Heading;
