import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
//import { v4 as uuidv4 } from 'uuid';
//import initialTasks from './dummyData';
import taskReducer from './TaskReducer';

const TaskContext = createContext(null);
let nextId = 4;
let tasksFromlocalStorage = [];
if (typeof window !== 'undefined') {
  // Check if we're running in the browser.
  // ✅ Only runs once per app load and before react render the component
  if (localStorage.getItem('tasksToLocalStorage'))
    tasksFromlocalStorage = JSON.parse(
      localStorage.getItem('tasksToLocalStorage')
    );
}

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, tasksFromlocalStorage);

  localStorage.setItem('tasksToLocalStorage', JSON.stringify(tasks));
  const addTask = (name, description) =>
    dispatch({
      type: 'added',
      newTask: {
        id: nextId++,
        name,
        description,
        done: false,
      },
    });

  const removeTask = (id) => dispatch({ type: 'removed', id });
  const clearCompletedTasks = () => dispatch({ type: 'cleared' });

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        dispatch,
        clearCompletedTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useGlobalContext = () => useContext(TaskContext);
