export default function taskReducer(tasks, action) {
  if (action.type === 'added') {
    return [...tasks, action.newTask];
  }

  if (action.type === 'removed') {
    return tasks.filter((task) => task.id !== action.id);
  }

  if (action.type === 'modified') {
    return tasks.map((task) => {
      if (task.id === action.task.id) {
        return action.task;
      } else {
        return task;
      }
    });
  }

  if (action.type === 'cleared') {
    return tasks.filter((task) => task.done !== true);
  }
  if (action.type === 'storage') {
    return action.payload;
  }
}
