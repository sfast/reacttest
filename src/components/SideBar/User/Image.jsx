import React from 'react';

const Image = ({ imageUrl, sidebarOpen }) => {
  return(
    <div className={`image ${!sidebarOpen ? 'image--hidden' : ''}`}>
        <img  src={imageUrl} alt='user profile'/>
    </div>
  )
}

export default Image;
