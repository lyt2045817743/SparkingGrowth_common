/**
 * @namespace utils 
 * @example <caption>utils使用方式</caption>
 * import { db, getApiSourceType } from '@sparking/common';
 */
export * from './config';
export * from './common';

/**
 * @memberof utils
 * @name db
 * @description 主应用抛出的indexDB对象
 */
export const db = window.db || {};