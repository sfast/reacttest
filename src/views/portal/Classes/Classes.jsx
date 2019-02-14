import React from 'react';
import PageHeading from '../../../components/PageHeading/Heading';

const Classes = () => {
  const buttons = [
    {name: 'Add', type: 'button', actions:() =>{} },
  ]
  return (
    <>
      <PageHeading  heading='Classes' buttons={buttons}/> 
    </> 
  );
};

export default Classes;