/**
 * @memberof utils
 * @function getFullUrl
 * @description 获取完整url
 * @property {string} baseUrl 基本url
 * @property {object} options
 * @property {object} options.query query字段map
 * @return {string} fullUrl
 */
export function getFullUrl(baseUrl, options = {}) {
  if (!baseUrl) return '';

  const { query = {} } = options;
  let queryStr = ''

  const queryKeys = Object.keys(query);
  for (let i = 0; i < queryKeys.length; i++) {
    if (query[queryKeys[i]] === undefined) continue;
    const andStr = i === queryKeys.length - 1 ? '' : '&';
    queryStr += `${queryKeys[i]}=${query[queryKeys[i]]}${andStr}`
  }

  queryStr = queryStr ? '?' + queryStr : '';
  return `${baseUrl}${queryStr}`;
}

/**
 * @memberof utils
 * @function getOptionsByLabelMap
 * @property {object} labelMap
 * @return {object} { label, value }
 */
export const getOptionsByLabelMap = (labelMap) => {
  return Object.keys(labelMap).map((key) => ({
    label: labelMap[key],
    value: key
  }))
}

/**
 * @memberof utils
 * @function getMapByOptions
 * @property {array} options
 * @property {number} options.value
 * @property {string} options.label
 * @return {object} { [value]: label }
 */
export const getMapByOptions = (options) => {
  const map = {};
  options.forEach((item) => map[item.value] = item.label);
  return map;
}