import React from 'react';
import PageHeading from '../../../../components/PageHeading/Heading';

const Env = () => {
  const buttons = [
    {name: 'Add', type: 'button', actions:() =>{} },
  ]
  return (
    <>
      <PageHeading  heading='Environments' buttons={buttons}/> 
    </> 
  );
};

export default Env;