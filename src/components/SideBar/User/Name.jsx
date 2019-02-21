import React from 'react';

const Name = ({ name, onClickHandler, sidebarOpen }) => {
  return(
    <>
      <div className='name'>
          <strong>{name}</strong> <span onClick={onClickHandler}><i className="fa fa-caret-down" /></span>
      </div>
    </>
  )
}

export default Name;
