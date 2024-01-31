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
 * @property {object} config
 * @property {string} config.labelKey
 * @property {string} config.valueKey
 * @return {object} { [labelKey]: label, [valueKey]: value }
 */
export const getOptionsByLabelMap = (labelMap, config) => {
  const { labelKey = 'label', valueKey = 'value' } = config ?? {};
  return Object.keys(labelMap).map((key) => ({
    [labelKey]: labelMap[key],
    [valueKey]: key
  }))
}

/**
 * @memberof utils
 * @function getMapByOptions
 * @property {array} options
 * @property {number} options.value
 * @property {string} options.label
 * @property {object} config
 * @property {string} config.labelKey
 * @property {string} config.valueKey
 * @return {object} { [value]: [label] }
 */
export const getMapByOptions = (options, config) => {
  const { labelKey = 'label', valueKey = 'value' } = config ?? {};
  const map = {};
  options.forEach((item) => map[item[valueKey]] = item[labelKey]);
  return map;
}