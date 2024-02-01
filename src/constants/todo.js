/**
 * @memberof constants
 * @name TodoStatusMap
 * @description 待办状态枚举
 * @enum {array}
 * @property {number} Overdue -1，已逾期
 * @property {number} Undo 0，未完成
 * @property {number} Done 1，已完成
 * @property {number} DoneButOverdue 3，逾期完成
*/
export const TodoStatusMap = {
  Overdue: -1,
  Undo: 0,
  Done: 1,
  DoneButOverdue: 3,
};

export const TodoStatusLabel = {
  [TodoStatusMap.Undo]: "未完成",
  [TodoStatusMap.Done]: "已完成",
  [TodoStatusMap.Overdue]: "已逾期",
  [TodoStatusMap.DoneButOverdue]: "逾期完成",
};

export const TodoTypeMap = {
  Undefined: -1,
  Simple: -2,
};

export const TodoTypeLabel = {
  [TodoTypeMap.Undefined]: "一级待办",
  [TodoTypeMap.Simple]: "简单待办",
};

export const TodoTypeScore = {
  [TodoTypeMap.Simple]: 0.5,
};

function getCascadeOptionsByFilter(filters) {
  return filters.map((key) => ({
    value: key,
    label: TodoTypeLabel[key],
  }));
}

/**
 * @memberof constants
 * @name TypeCascadeOptions
 * @description 待办分类级联选项
 * @enum {array}
*/
export const TypeCascadeOptions = [
  {
    value: 100,
    label: "简单分类",
    children: getCascadeOptionsByFilter([
      TodoTypeMap.Undefined,
      TodoTypeMap.Simple,
    ]),
  }
];

/**
 * @memberof constants
 * @name CycleMap
 * @description 待办循环类型枚举
 * @enum {number}  
 * @property {number} UnCycle 0，不循环
 * @property {number} Everyday 1，每日
*/
export const CycleMap = {
  UnCycle: 0,
  Everyday: 1
}

/**
 * @memberof constants
 * @name CycleOptions
 * @description 待办循环类型下拉数据
 * @enum {array}
*/
export const CycleOptions = [
  {
    value: [CycleMap.UnCycle],
    label: '不循环'
  },
  {
    value: [CycleMap.Everyday],
    label: '每日'
  }
]