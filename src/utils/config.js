import { getConfigByKey } from '../api';

/**
 * @memberof utils
 * @function getApiSourceType
 * @description 获取当前数据来源类型
 */
export async function getApiSourceType() {
  window.dataSourceType = await getConfigByKey('dataSourceType');
}