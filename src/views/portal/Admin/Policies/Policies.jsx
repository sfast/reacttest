import React from 'react';
import PageHeading from '../../../../components/PageHeading/Heading';

const Policies = () => {
  const buttons = [
    {name: 'Add', type: 'button', actions:() =>{} },
  ]
  return (
    <>
      <PageHeading  heading='Policies' buttons={buttons}/> 
    </> 
  );
};

export default Policies;