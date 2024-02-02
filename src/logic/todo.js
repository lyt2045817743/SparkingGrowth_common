import { TodoStatusMap } from '../constants'

/**
 * @memberof logic
 * @function formatCompletedTodo
 * @description 已完成待办数据更新
 * @property {object} todoInfo
 * @returns {object} { todoInfo }
*/
export function formatCompletedTodo(item) {
  const { deadline } = item;
  const now = Date.now();
  const isOverdue = now > new Date(deadline).getTime();
  const status = isOverdue ? TodoStatusMap.DoneButOverdue : TodoStatusMap.Done;

  return {
    todoInfo: { status, finishTime: now },
  }
}