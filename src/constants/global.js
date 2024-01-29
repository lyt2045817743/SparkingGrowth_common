/**
 * @memberof constants
 * @name PageTypeMap
 * @description 页面类型枚举
 * @enum {number} 
 * @property {number} Add 1
 * @property {number} Edit 2
 * @property {number} View 3
*/
export const PageTypeMap = {
  Add: 1,
  Edit: 2,
  View: 3
}

export const PageTypeLabel = {
  [PageTypeMap.Add]: '新增',
  [PageTypeMap.Edit]: '编辑',
  [PageTypeMap.View]: '详情',
}