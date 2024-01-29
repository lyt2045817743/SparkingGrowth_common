import { db } from '../utils';

export const BookStoreName = 'book';

/**
 * @memberof api
 * @function getBookList
 * @returns {Array} 书籍列表数据
 */
async function getBookList() {
  const list = await db.getAll(BookStoreName);
  return Promise.resolve(list);
}

export {
  getBookList,
}