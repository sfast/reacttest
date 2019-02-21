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
  };

  const buttons = props.buttons ? 
    props.buttons.map(button =>  { 
      switch(button.type){
        case 'button' : return <div className='heading__details__item_button' key={button.name}><Button  onClick={button.action} color='primary'>{button.name}</Button></div>;
        case 'dropdown' : return(
          <div className='heading__details__item_button' key={button.name}>
            <ButtonDropdown   isOpen={dropdownOpen}  toggle={handleOnToggle}> 
              <DropdownToggle caret outline color='primary'>
                {button.name}
              </DropdownToggle>
              <DropdownMenu>
                {button.actions.map(act => <DropdownItem key={act}>{act}</DropdownItem> )}
              </DropdownMenu>
            </ButtonDropdown>
          </div>);
        default: return null;
      }
    }) 
    : null;


  const additionalInfo = props.additionalInfo
    .map(info => <div className='heading__details__item--child' key={info.title}><strong>{info.title}: </strong>{info.text}</div>);

  return(
    <div className='heading__details'>
      <div className='heading__details__item'>
        <Button   
          color='link' 
          onClick={props.backButton.action}
          className='back_button'
        >
          <i className='fa fa-angle-left'/> {props.backButton.name}
        </Button>
      </div>
      <div className='heading__details--flex'>
        <div className='heading__details__item'>
          
          <h3>{props.heading}</h3>
          <span className='heading__details__edit_button'><i className='fa fa-pencil'/></span>
        </div>
        <div className='heading__details__item'>
          {buttons}
        </div>
      </div>
      <div className='heading__details__item heading__details__item--margin_top'>
        {additionalInfo}
        <div className='heading__details__item--child ' >
          <span  className='info_button'>
            more info...
          </span> 
        </div>
      </div>
    </div>
  )
};

export default Heading;
