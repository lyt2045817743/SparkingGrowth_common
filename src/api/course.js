import { db } from '../utils';

export const CourseStoreName = 'course';

/**
 * @memberof api
 * @function getCourseList
 * @returns {Array} 课程列表数据
 */
async function getCourseList() {
  const list = await db.getAll(CourseStoreName);
  return Promise.resolve(list);
}

export {
  getCourseList,
}