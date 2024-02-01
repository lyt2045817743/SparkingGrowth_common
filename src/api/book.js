import { db } from '../utils';

export const BookStoreName = 'book';

/**
 * @memberof api
 * @function getBookList
 * @property {object} filters 过滤条件
 * @property {number} filters.type 书籍类型
 * @returns {Array} 书籍列表数据
 */
async function getBookList(filters) {
  let list = await db.getAll(BookStoreName);
  if (filters.type) {
    list = list.filter((item) => item.type === filters.type);
  }
  return Promise.resolve(list);
}

export {
  getBookList,
}