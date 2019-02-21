import React, { useState } from 'react';
import Tabs from './Tabs';
import Content from './Content'
import './tabContent.scss';

const TabContent = (props) => {
  const [ tab , changeContent] = useState('Content');
  function changeTab(value) {
    const regex = /[^/]+$/g;
    const link = props.location.pathname.replace(regex, value.toLowerCase());
    props.history.push(link);
    changeContent(value);
  };

  const tabs = props.tabs.map(tab => tab.tab);
  const content = props.tabs.filter(content => content.tab === tab)[0];
  
  return (
    <div className='tab_content'>
      <Tabs tabsArray={tabs} {...props} changeTab={changeTab}/>
      <Content content={content.tabContent}/>
    </div>
  )
};

export default TabContent;
