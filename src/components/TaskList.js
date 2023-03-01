import { useGlobalContext } from "../TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
	const { tasks, removeTask } = useGlobalContext();
	if (tasks.length !== 0) {
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

	return (
		<p>
			Welcome to taskMaster, please fill out the form below and press the CREATE
			TASK button to create your first task.
		</p>
	);
}
