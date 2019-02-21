import React from 'react';

const DropDown = ({ onChangeHandler, viewType }) => {
  return(
    <div className='dropdown'>
      <div  className='dropdown__item  dropdown__item--border_bottom'>Profile</div>
      <div  className='dropdown__item dropdown__item--pointer'>
        <label htmlFor='admin_view'>
          <input type='radio' id='admin-view' name='view' value='admin' checked={viewType === 'admin'} onChange={onChangeHandler}/>
          Admin View
        </label>
      </div>
      <div  className='dropdown__item  dropdown__item--border_bottom'>
        <label htmlFor='user_view' >
          <input type='radio' id='user_view' name='view' value='user' checked={viewType === 'user'} onChange={onChangeHandler}/>
          User View
        </label>
      </div>
      <div  className='dropdown__item dropdown__item--pointer'>Log Out</div>
    </div>
  )
}

export default DropDown;
