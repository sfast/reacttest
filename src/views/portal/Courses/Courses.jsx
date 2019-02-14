import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeading } from '../../../components/PageHeading';


const Courses = (props) => {
  const buttons = [
    {name: 'Action', type: 'dropdown', actions: [ 'Action' ] },
    {name: 'Add', type: 'button', action: () => {} },
  ]
  return (
    <>
      <PageHeading  heading='Courses' buttons={buttons}/> 
      <Link to='/portal/courses/1/content'>Course</Link>
    </>
  );  
};


export default Courses;