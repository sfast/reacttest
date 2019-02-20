import React from 'react';
import PageHeading from '../../../../components/PageHeading/Heading';

const Portal = () => {
  const buttons = [
    {name: 'New Invironment', type: 'button', actions:() =>{} },
    {name: 'New Course', type: 'button', action: () =>{} },
  ]
  return (
    <>
      <PageHeading  heading='Dashboard' buttons={buttons}/> 
    </> 
  );
};

export default Portal;