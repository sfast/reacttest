import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from 'components/SideBar';
import Header from 'components/Header';
import imageUrl from 'assets/img/placeholder.png';
import { pages as adminLinks} from 'routes/portal/portalAdminRoutes'; 
import { pages as userLinks} from 'routes/portal/portalUserRoutes'; 
import './portal.scss';

const Portal = (props) => {
  const [sidebarOpen, toggleSidebar] = useState(window.innerWidth < 900 ? false : true)
  const [viewType, toggleViewType] = useState('admin')
  const links = viewType === 'admin' ? adminLinks : userLinks;

  function handleonSidebarToggle() {
    toggleSidebar(!sidebarOpen);
  }

  function handleOnChangeView(value) {
    toggleViewType(value)
   
  }

  function onLinkSelect(e, path) {
    e.stopPropagation();
    props.history.push(path)
  }
  useWindowWidth(toggleSidebar); 
  return(
    <>
      <Sidebar  
        imageUrl={imageUrl} 
        name='H Sargis' 
        links={links}
        handleOnChangeView={handleOnChangeView} 
        sidebarOpen={sidebarOpen}
        handleonSidebarToggle={handleonSidebarToggle}
        onLinkSelect={onLinkSelect}
        viewType={viewType}
        {...props}
      />
      <div className={`main ${sidebarOpen ? 'main--collapsed' : 'main--expanded'}`} id='main_content'>
          <Header 
            handleonSidebarToggle={handleonSidebarToggle} 
            sidebarOpen={sidebarOpen}
          />
          <Switch>
            {links.map((link, key) => {
              return  <Route path={link.paths[0].path} render={() => <link.component {...link} {...props}/>} key={key}/>
            })}
          </Switch>
      </div>
    </>
  )
}

function useWindowWidth(cb) {
  useEffect(() =>{
    const handleResize = () => {
      const width = window.innerWidth;
      if( width < 900){
        cb(false)
      }
    };
    window.addEventListener('resize', handleResize)
    return() => {
      window.removeEventListener('resize', handleResize )
    };
  });
}

export default Portal;
