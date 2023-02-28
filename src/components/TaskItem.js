import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from "../TaskContext";
export default function TaskItem({ task }) {
	const { removeTask, dispatch } = useGlobalContext();
	return (
		<article className='task'>
			<div className='taskName-container'>
				<div className='task__input-container'>
					<input
						name='taskStatus'
						type='checkbox'
						checked={task.done}
						onChange={(e) => {
							dispatch({
								type: "changed",
								task: {
									...task,
									done: e.target.checked,
								},
							});
						}}
						className='task__input-checkbox '
					/>
					<input className='task__input-text' type='text' value={task.name} />
				</div>

				<button type='button' onClick={() => removeTask(task.id)}>
					<AiFillDelete className='icon' />
				</button>
			</div>
			<textarea
				className='task__textarea'
				name=''
				id=''
				value={task.description}
			></textarea>
		</article>
	);
}
