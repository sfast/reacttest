import React, { memo } from 'react';

import User from './User';
import NavMenu from './Menu';
import './sideBar.scss';

const SideBar = memo(({ handleOnChangeView, imageUrl, name, sidebarOpen, links, onLinkSelect, viewType }) => {
  return(
    <div className={`sidebar ${sidebarOpen ? 'sidebar--expanded' : '' }`} >
        <div className='sidebar__item'>
          <User imageUrl={imageUrl} name={name} changeView={handleOnChangeView} sidebarOpen={sidebarOpen} viewType={viewType}/>
        </div>
        <div className='sidebar__item'>
          <NavMenu  links={links} onLinkSelect={onLinkSelect} sidebarOpen={sidebarOpen}/>
        </div>
    </div>
  )
})

export default SideBar;
