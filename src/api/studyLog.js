import { db } from '../utils';

export const StudyLogStoreName = 'studyLog';

/**
 * @memberof api
 * @function addStudyLog
 * @property {object} studyLogInfo 学习记录信息
 * @description 新增一条学习记录
 */
async function addStudyLog(studyLogInfo) {
  await db.add(StudyLogStoreName, studyLogInfo);
}

export {
  addStudyLog,
}