import _courses from './courses.json';
import _newcourses from './newcourses.json';

export default {
  getCourses: () => {
      return new Promise((resolve, reject) => {
          setTimeout( () => {
              resolve(_courses);
              // reject('Error');
          }, 1000);
      });
  },
  updateCourses: () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(_newcourses);
            // reject('Error');
        }, 3300);
    });
  },
  getMinCourses: () => {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(_courses.slice(0, 3));
                // reject('Error');
            }, 2000);
        });
  }
};