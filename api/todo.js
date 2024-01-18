import { db } from '../utils';

const TodoStoreName = 'todo';

async function addTodo(todoInfo) {
  const todo = JSON.parse(JSON.stringify(todoInfo));
  const todoId = await db.add(TodoStoreName, todo);
  return Promise.resolve(todoId);
}

async function getChildTodoList() {
  let list = await db.getAll(TodoStoreName);
  list = list.filter((item) => item.parentKey || !item.isRoot);
  return Promise.resolve(list);
}

async function deleteTodo(key) {
  await db.delete(TodoStoreName, key);
}

async function updateTodo(id, info) {
  const todo = await db.get(TodoStoreName, id);
  Object.keys(info).forEach((key) => {
    if (key === 'type') {
      info[key].forEach((item) => {
        if (!todo[key].includes(item)) {
          todo[key].push(item)
        }
      })
      for (let i = 0; i < todo[key].length; i++) {
        if (!info[key].includes(todo[key][i])) {
          todo[key].splice(i, 1);
          i--;
        }
      }
    } else {
      todo[key] = info[key];
    }
  })
  await db.put(TodoStoreName, todo);
}

export {
  addTodo,
  deleteTodo,
  getChildTodoList,
  updateTodo
}