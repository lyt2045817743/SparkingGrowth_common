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

export const TodoStatusTagConfig = Object.keys(TodoStatusLabel).map((key) => ({
  text: TodoStatusLabel[key],
  value: key,
}));

export const TodoStatusTagType = {
  [TodoStatusMap.Undo]: "info",
  [TodoStatusMap.Done]: "success",
  [TodoStatusMap.Overdue]: "danger",
  [TodoStatusMap.DoneButOverdue]: "warning",
};

export const TodoTypeMap = {
  Undefined: 0,
  Summary: 1,
  StudyByVideo: 2,
  Read: 3,
  Idea: 4,
  StudyByRead: 5,
  Simple: 6,
  Dev: 7,
  Schedule: 8,
  StudyByBlog: 9,
  StudyByOfficial: 10,
  StudyByOtherSite: 11,
  Note: 12,
  BugFix: 15,
  Coding: 16,
  GoodHabit: 18
};

export const TodoTypeLabel = {
  [TodoTypeMap.Undefined]: "一级待办",
  [TodoTypeMap.Simple]: "简单待办",
  [TodoTypeMap.Summary]: "写总结",
  [TodoTypeMap.Schedule]: "定计划",
  [TodoTypeMap.StudyByVideo]: "视频学习",
  [TodoTypeMap.StudyByBlog]: "博客学习",
  [TodoTypeMap.StudyByRead]: "书籍学习",
  [TodoTypeMap.StudyByOfficial]: "官网学习",
  [TodoTypeMap.StudyByOtherSite]: "其他权威网站",
  [TodoTypeMap.Dev]: "新功能研发",
  [TodoTypeMap.BugFix]: "Bug修复",
  [TodoTypeMap.Coding]: "Coding",
  [TodoTypeMap.Read]: "阅读",
  [TodoTypeMap.Idea]: "思考时间",
  [TodoTypeMap.Note]: "记笔记",
  [TodoTypeMap.GoodHabit]: "好习惯"
};

export const TodoTypeScore = {
  [TodoTypeMap.Simple]: 0.5,
  [TodoTypeMap.Summary]: 2,
  [TodoTypeMap.Schedule]: 1,
  [TodoTypeMap.StudyByVideo]: 5,
  [TodoTypeMap.StudyByBlog]: 2,
  [TodoTypeMap.StudyByRead]: 5,
  [TodoTypeMap.StudyByOfficial]: 5,
  [TodoTypeMap.StudyByOtherSite]: 3,
  [TodoTypeMap.Dev]: 3,
  [TodoTypeMap.Read]: 1,
  [TodoTypeMap.Idea]: 1,
  [TodoTypeMap.Note]: 3,
  [TodoTypeMap.BugFix]: 1,
  [TodoTypeMap.Coding]: 3,
  [TodoTypeMap.GoodHabit]: 0.5
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
  },
  {
    value: 101,
    label: "学习成长",
    children: getCascadeOptionsByFilter([
      TodoTypeMap.Note,
      TodoTypeMap.StudyByVideo,
      TodoTypeMap.StudyByRead,
      TodoTypeMap.StudyByOfficial,
      TodoTypeMap.StudyByOtherSite,
      TodoTypeMap.StudyByBlog,
    ]),
  },
  {
    value: 102,
    label: '代码世界',
    children: getCascadeOptionsByFilter([
      TodoTypeMap.Dev,
      TodoTypeMap.BugFix,
      TodoTypeMap.Coding
    ])
  },
  {
    value: 103,
    label: "其他",
    children: getCascadeOptionsByFilter([
      TodoTypeMap.Schedule,
      TodoTypeMap.Summary,
      TodoTypeMap.Read,
      TodoTypeMap.Idea,
      TodoTypeMap.GoodHabit
    ]),
  },
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