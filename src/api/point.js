import { db } from '../utils';

const PointStoreName = 'point';

/**
 * @memberof api
 * @function addPoint
 * @property {object} pointInfo 积分信息
 * @return {number} pointId
 */
async function addPoint(pointInfo) {
  const point = JSON.parse(JSON.stringify(pointInfo));
  const pointId = await db.add(PointStoreName, point);
  return Promise.resolve(pointId);
}

export {
  addPoint
}