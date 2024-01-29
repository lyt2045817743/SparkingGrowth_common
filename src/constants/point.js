/**
 * @memberof constants
 * @name PointEventTypeMap
 * @description 积分类型枚举
 * @enum {number}
 * @property {number} Todo 1，完成待办
 * @property {number} Exchange 2，积分兑换
 * @property {number} ExtraPoint 3，补偿积分
 */
export const PointEventTypeMap = {
  Todo: 1,
  Exchange: 2,
  ExtraPoint: 3
};

export const PointEventTypeLabel = {
  [PointEventTypeMap.Todo]: "完成待办",
  [PointEventTypeMap.Exchange]: "积分兑换",
  [PointEventTypeMap.ExtraPoint]: '补偿积分'
};