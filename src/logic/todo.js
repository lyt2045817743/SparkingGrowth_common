import { TodoStatusMap, TodoTypeScore, PointEventTypeMap, CycleMap } from '../constants'


/**
 * @memberof logic
 * @function formatCompletedTodo
 * @description 已完成待办数据
 * @property {object} todoInfo
 * @returns {object} { todoInfo, pointInfo }
*/
export function formatCompletedTodo(item) {
  const { key: id, deadline, type, score, cycleType } = item;
  const now = Date.now();
  const isOverdue = now > new Date(deadline).getTime();
  const status = isOverdue ? TodoStatusMap.DoneButOverdue : TodoStatusMap.Done;
  const pointInfo = {
    eventId: id,
    eventType: PointEventTypeMap.Todo,
    score: score !== undefined ? score : type.reduce((a, b) => a + TodoTypeScore[b], 0)
  }

  if (isOverdue) {
    pointInfo.score = pointInfo.score / 2;
  }

  if (cycleType !== CycleMap.UnCycle) {
    pointInfo.createTime = now;
  }

  return {
    todoInfo: { status, finishTime: now },
    pointInfo
  }
}