/**
 * @memberof constants
 * @name CourseTypeMap
 * @description 课程类型枚举值
 * @enum {number}
 * @property {number} WebDoc 1
 * @property {number} Book 2
 * @property {number} Course 3
 * @property {number} Forum 4
*/
export const CourseTypeMap = {
  WebDoc: 1,
  Book: 2,
  Course: 3,
  Forum: 4
}

export const CourseTitleMap = {
  [CourseTypeMap.WebDoc]: '在线文档',
  [CourseTypeMap.Book]: '书籍',
  [CourseTypeMap.Course]: '课程',
  [CourseTypeMap.Forum]: '论坛'
}