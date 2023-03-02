import { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
//import { v4 as uuidv4 } from 'uuid';
import initialTasks from './dummyData';
import taskReducer from './TaskReducer';

const TaskContext = createContext(null);
let nextId = 4;
export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

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
