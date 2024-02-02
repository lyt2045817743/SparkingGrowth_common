import { db } from '../utils';

export const ActivityStoreName = 'activity';

/**
 * @memberof api
 * @function getActivityList
 * @returns {Array} 活动数据
 */
async function getActivityList() {
  const list = await db.getAll(ActivityStoreName);
  return Promise.resolve(list);
}

export {
  getActivityList
}