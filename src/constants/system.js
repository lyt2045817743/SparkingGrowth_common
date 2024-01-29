/**
 * @memberof constants
 * @name DataSourceType
 * @description 数据来源枚举
 * @enum {number}
 * @property {number} Local 1，本地
 * @property {number} Remote 2，远程
 * @property {function} getDefault 获取默认值
*/
export const DataSourceType = {
  Local: 1,
  Remote: 2,
  getDefault() {
    return this.Local;
  }
}