// import gql from 'graphql-tag';
import { GET_COURSES } from '../views/portal/Admin/Courses/Courses';
import courses from './api/courses.json';
import newCourses from './api/newcourses.json';



export const clientResolvers = {
  Query: {
    courses: () => new Promise(resolve => {
      console.log('%c get courses', 'color:orange; font-weight: bold')
      setTimeout( () => {
        return resolve(courses);
      }, 2000)
    }),
    course: (_, variables, { cache}) => new Promise(resolve => {
      // console.log(variables)
      const { courses } = cache.readQuery({ query: GET_COURSES });
      const result = courses.filter( course => course._id === variables.id)
      return resolve(result);
    }),
   
  }, 
  Mutation:{
    updateCourses: (_, variables, { cache }) => new Promise(resolve => {
      console.log('%c updating courses', 'color:blue; font-weight:bold')
      const { courses: currentCourses } = cache.readQuery({ query: GET_COURSES });
      const courses = newCourses.filter(item =>  currentCourses.every(existingItem =>  item._id !== existingItem._id))
      cache.writeQuery({ 
        query: GET_COURSES,
        data: { courses: currentCourses.concat(courses) }
      });
      return resolve(cache.readQuery({ query: GET_COURSES }));
    })
  }
};
