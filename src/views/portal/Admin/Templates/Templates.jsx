import React from 'react';
import PageHeading from '../../../../components/PageHeading/Heading';

const Templates = () => {
  const buttons = [
    {name: 'Add', type: 'button', actions:() =>{} },
  ]
  return (
    <>
    <PageHeading  heading='Templates' buttons={buttons}/> 
  </> 
  );
};

export default Templates;