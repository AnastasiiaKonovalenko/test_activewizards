export const getStudents = () => fetch('https://api.myjson.com/bins/jxili')
  .then(response => response.json())
  .catch(() => 'Something wrong');

export const getCourses = () => fetch('https://api.myjson.com/bins/1gocva')
  .then(response => response.json())
  .catch(() => 'Something wrong');
