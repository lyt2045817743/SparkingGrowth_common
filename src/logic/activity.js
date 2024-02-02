import { getActivityList, getBookList, getCourseList } from '../api';
import { TypeCascadeOptions as baseOptions, getMapByOptions, TodoTypeLabel } from '../constants';

/**
 * @memberof logic
 * @function formatActivityOptions
 * @description 获取活动级联选项、map映射
 * @returns {object} { options, labelMap }
*/
async function formatActivityOptions() {
  const activityData = await getActivityList();
  const bookData = await getBookList();
  const courseData = await getCourseList();
  const parentData = activityData.filter((item) => item.level === 1);
  bookData.forEach((item) => item.id = `B${item.id}`);
  courseData.forEach((item) => item.id = `C${item.id}`);
  const data = activityData.concat(bookData, courseData);
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    if (data[i].level === 1) continue;
    const parentItem = data.find((item) => item.id === data[i].parentId || item.id === data[i].type) ?? {};
    if (parentItem.children) {
      parentItem.children.push(data[i]);
    } else {
      parentItem.children = [data[i]];
    }
  }
  typeCascadeOptions = baseOptions.concat(parentData);

  const option = { labelKey: 'name', valueKey: 'id' };
  const cateTitleMap = getMapByOptions(activityData, option);
  const bookTittleMap = getMapByOptions(bookData, option);
  const courseTittleMap = getMapByOptions(courseData, option);
  labelMap = Object.assign(cateTitleMap, TodoTypeLabel, bookTittleMap, courseTittleMap);

  return { options: typeCascadeOptions, labelMap };
}

export {
  formatActivityOptions
}