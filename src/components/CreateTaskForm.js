import { useState } from 'react';
import { useGlobalContext } from '../TaskContext';

const CreateTaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const { addTask } = useGlobalContext();
  return (
    <form
      action=""
      className="create-task-form"
      onSubmit={(e) => {
        e.preventDefault();
        setTaskName('');
        setTaskDescription('');
        addTask(taskName, taskDescription);
      }}
    >
      <input
        className="create-task-form__input"
        type="text"
        name="task"
        placeholder="enter your task name*"
        required
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <textarea
        className={'create-task-form__textarea'}
        name="taskDescription "
        placeholder="describe the task"
        value={taskDescription}
        onChange={(e) => {
          e.target.style.height = 'auto';
          // Set the height to the scrollHeight (content height)
          e.target.style.height = e.target.scrollHeight + 'px';
          setTaskDescription(e.target.value);
        }}
      />
      <button className="btn btn-submit" type="submit">
        CREATE TASK
      </button>
    </form>
  );
};

export default CreateTaskForm;
