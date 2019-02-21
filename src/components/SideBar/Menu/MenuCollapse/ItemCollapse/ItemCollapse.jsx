import React from 'react';

const ItemCollapse = ({ paths, icon, name, onLinkSelect, views, collapse, ...props }) => {
  const actvieClass = window.location.pathname === paths[0].path  ? 'navmenu__item--active' : '';
  return(
    <div>
      <div className={`navmenu__item navmenu__item--collapse ${actvieClass}`}  onClick={!collapse ? (e) => onLinkSelect(e, paths[0].path) : null} >
        <div className='navmenu__item__icon'><i className={icon}/></div>
        {collapse ? <DropDown  views={views} onLinkSelect={onLinkSelect} {...props}/> : null}
      </div>
    </div>
  )
};
 /*
 *
 *  if LinkItem has array of views use DropDown component
 *
 */
const DropDown = (props) => (
  <div className=' navmenu__item--collapse__dropdown'>
    {props.views.map(view => <Item key={view.paths[0].path} onLinkSelect={props.onLinkSelect} {...view} history={props.history}/>)}
  </div>
);

const Item =(props) => {
  const actvieClass = window.location.pathname === props.paths[0].path  ? 'navmenu__item--active': '';
  return(
    <div className={`navmenu__item--collapse__dropdown__item ${actvieClass}`} onClick={(e) => props.onLinkSelect(e, props.paths[0].path)}>
      <div>{props.name}</div>
    </div>
  )
};


export default ItemCollapse;
