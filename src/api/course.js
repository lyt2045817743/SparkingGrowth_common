import { db } from '../utils';

export const CourseStoreName = 'course';

/**
 * @memberof api
 * @function getCourseList
 * @property {object} filters 过滤条件
 * @property {number} filters.type 课程类型
 * @returns {Array} 课程列表数据
 */
async function getCourseList(filters = {}) {
  let list = await db.getAll(CourseStoreName);
  if (filters.type) {
    list = list.filter((item) => item.type === filters.type);
  }
  return Promise.resolve(list);
}

export {
  getCourseList,
}