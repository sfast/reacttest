import React from 'react';
import PageHeading from '../../../../components/PageHeading/Heading';

const Vms = () => {
  const buttons = [
    {name: 'Add', type: 'button', actions:() =>{} },
  ]
  return (
    <>
      <PageHeading  heading='VM Images' buttons={buttons}/> 
    </> 
  );
};

export default Vms;