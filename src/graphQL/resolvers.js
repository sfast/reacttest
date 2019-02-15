// import gql from 'graphql-tag';
// import { GET_COURSES } from '../views/portal/Courses/Courses';
import courses from './api/courses.json';



export const clientResolvers = {
  Query: {
    courses: () => new Promise(resolve => {
      console.log('%c get courses', 'color:orange; font-weight: bold')
      setTimeout( () => {
        return resolve(courses);
      }, 2000)
    }),
    course: (_, variables, { cache}) => new Promise(resolve => {
      console.log(variables)
      // const { courses } = cache.readQuery({ query: GET_COURSES });
      const result = courses.filter( course => course._id === variables.id)
      return resolve(result);
    }),
  }, 

};
