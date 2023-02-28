import { useGlobalContext } from "../TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
	const { tasks, removeTask } = useGlobalContext();
	return (
		<section className='task-item'>
			{tasks.map((task) => {
				console.log(task);
				return <TaskItem key={task.id} task={task} />;
			})}

			<button type='button' className='btn btn-clear'>
				CLEAR COMPLETED TASKS
			</button>
		</section>
	);
}
