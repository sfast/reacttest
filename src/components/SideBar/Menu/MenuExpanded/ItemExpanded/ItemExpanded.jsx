import React, { useState, memo } from 'react';
import { CSSTransition } from 'react-transition-group';


const ItemExpand = memo(({ paths, icon, name, onLinkSelect, views, collapse, ...props }) => {
  const [dropDown, toggleMenu] = useState(false);
  function handleOpenMenu(e) {
    const nextSibling =  e.currentTarget.nextSibling;
    if(nextSibling){
      if(!dropDown) { 
        nextSibling.style.transition = 'all 300ms ease-out';
        nextSibling.style.transform = 'translateY(0)';
      } else {
        nextSibling.style.transform = 'translateY(0)';
      }
    }

    toggleMenu(!dropDown);
  }

  const actvieClass = window.location.pathname === paths[0].path || dropDown ? 'navmenu__item--active' : '';  

  const onClickHandler = collapse ? handleOpenMenu : onLinkSelect;

  return(
      <div className={`navmenu__item navmenu__item--expand ${actvieClass}`} onClick={(e) => onClickHandler(e, paths[0].path)}>
        { icon ?  <div className='navmenu__item__icon'><i className={icon}/></div> : null }
        <div className='navmenu__item__text'>{name} {collapse ? dropDown ? <i className='fa fa-chevron-down'/> : <i className='fa fa-chevron-left'/> : null}</div> 
        <CSSTransition in={dropDown}
          timeout={300}
          classNames={{
            enter: 'open-dropdown',
            exit: 'close-dropdown',
          }}
          unmountOnExit
        ><DropDown  views={views} onLinkSelect={onLinkSelect} {...props}/>
      </CSSTransition>

      </div>
  )
})

 /*
 *
 *  if LinkItem has array of views use DropDown component
 *
 */
 
const DropDown = (props) => {
  return (
  <div className='navmenu__item__dropdown'>
    {props.views.map(view => <Item key={view.paths[0].path} onLinkSelect={props.onLinkSelect} {...view} history={props.history}/>)}
  </div>
)}

const Item = memo((props) => {
  const actvieClass = window.location.pathname === props.paths[0].path  ? 'navmenu__item__dropdown__item--active': '';
  return(
    <div className={`navmenu__item__dropdown__item ${actvieClass}`} onClick={(e) => props.onLinkSelect(e, props.paths[0].path)}>
      <div>{props.name}</div>
    </div>
  )
})

export default ItemExpand;
