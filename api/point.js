import { db } from '../utils';

const PointStoreName = 'point';

async function addPoint(pointInfo) {
  const point = JSON.parse(JSON.stringify(pointInfo));
  const pointId = await db.add(PointStoreName, point);
  return Promise.resolve(pointId);
}

export {
  addPoint
}