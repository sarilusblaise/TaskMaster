import { useGlobalContext } from '../TaskContext';
import TaskItem from './TaskItem';
import kidTaskMaster from '../assets/kidTaskMaster.png';

export default function TaskList() {
  const { tasks, clearCompletedTasks } = useGlobalContext();
  if (tasks.length !== 0) {
    return (
      <section className="task-item">
        {tasks.map((task) => {
          console.log(task);
          return <TaskItem key={task.id} task={task} />;
        })}

        <button
          type="button"
          className="btn btn-clear"
          onClick={() => clearCompletedTasks()}
        >
          CLEAR COMPLETED TASKS
        </button>
      </section>
    );
  }

  return (
    <section className="task-welcome">
      <p>
        Welcome to taskMaster, please fill out the form below and press the
        CREATE TASK button to create your tasks.
      </p>
      <div className="task-img-container">
        <img src={kidTaskMaster} alt="kid character" />
      </div>
    </section>
  );
}
