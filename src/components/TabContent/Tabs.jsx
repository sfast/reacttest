import React from 'react'
// import { Link } from 'react-router-dom';

const Tabs = ({ match, tabsArray, changeTab, ...props }) => {
  return (
    <ul className='tabs_block'>
      {tabsArray.map(tab => {
        const active = tab.toLowerCase() === match.params.tab ? 'tabs_block__item--active' : '';
        return <li key={tab} className={`tabs_block__item ${active}`}><span onClick={() => changeTab(tab)} className='tabs_block__item__link'>{tab}</span></li>
      })}
    </ul>
  )
}

export default Tabs