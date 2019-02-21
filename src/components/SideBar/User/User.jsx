import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Image from './Image';
import Name from './Name';
import DropDown from './DropDown';

const UserExpanded = ({ name, imageUrl, viewType, changeView, sidebarOpen }) => {
  
  const [ droDownOpen, toggleDropDown ] = useState(false);
  
  function handleOnToggleDropDown(e) {
    toggleDropDown(!droDownOpen);
  };

  function onChangeHandler(e) {
    toggleDropDown(!droDownOpen);
    changeView(e.target.value)
  };

  return(
    <div className=' user user--expand'>
        <Image  imageUrl={imageUrl} sidebarOpen={sidebarOpen}/>
        <Name  name={name} onClickHandler={handleOnToggleDropDown} sidebarOpen={sidebarOpen}/>
        { droDownOpen ? <DropDown  view={viewType} onChangeHandler={onChangeHandler} viewType={viewType}/> : null }
    </div>
  )
};

const UserCollapsed = ({name}) =>  {
  return(
    <div className='user user--collapse'>
        <h4><strong>{name[0]}</strong></h4>
    </div>
  )
};


const User = (props) =>{
  return(
    <>
      <CSSTransition in={props.sidebarOpen}
        timeout={300}
        classNames={{
          enter: 'open-user',
          exit: 'close-sidebar',
        }}
        unmountOnExit
      >
        <UserExpanded {...props} /> 
      </CSSTransition>
      {props.sidebarOpen ? null : <UserCollapsed {...props} />}
    </>
  )
};

export default User;
