import { getConfigByKey } from '../api';

export async function getApiSourceType() {
  window.dataSourceType = await getConfigByKey('dataSourceType');
}