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