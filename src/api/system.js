import { db } from '../utils';

const ConfigStoreName = 'config';

/**
 * @memberof api
 * @function getConfigMap
 * @description 获取所有配置Map
 * @returns {object} 系统配置信息
 */
async function getConfigMap() {
  const list = await db.getAll(ConfigStoreName);
  const configMap = {};
  list.forEach((item) => configMap[item.key] = item.value);
  return Promise.resolve(configMap);
}

/**
 * @memberof api
 * @function getConfigByKey
 * @property {string} key 配置的key
 * @returns {string} 配置的value
 */
async function getConfigByKey(key) {
  const config = db ? await db.get(ConfigStoreName, key) : undefined;
  return config ? config.value : undefined;
}

/**
 * @memberof api
 * @function updateConfig
 * @description 修改配置信息
 * @property {string} key 配置的key
 * @property {string} value 配置的value
 */
async function updateConfig(key, value) {
  await db.put(ConfigStoreName, { key, value });
}

export {
  getConfigMap,
  updateConfig,
  getConfigByKey
}