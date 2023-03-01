import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from "../TaskContext";
import { useState } from "react";
export default function TaskItem({ task }) {
	const { removeTask, dispatch } = useGlobalContext();
	return (
		<article className='task'>
			<div className='taskName-container'>
				<div className='task__input-container'>
					<input
						className='task__input-checkbox '
						name='taskStatus'
						type='checkbox'
						checked={task.done}
						onChange={(e) => {
							console.log(task);
							dispatch({
								type: "modified",
								task: {
									...task,
									done: e.target.checked,
								},
							});
						}}
					/>
					<input
						className='task__input-text'
						type='text'
						value={task.name}
						onChange={(e) => {
							dispatch({
								type: "modified",
								task: {
									...task,
									name: e.target.value,
								},
							});
							console.log(task);
						}}
					/>
				</div>

				<button type='button' onClick={() => removeTask(task.id)}>
					<AiFillDelete className='icon' />
				</button>
			</div>
			<textarea
				className={"task__textarea"}
				name=''
				id=''
				value={task.description}
				onChange={(e) => {
					e.target.style.height = "auto";
					// Set the height to the scrollHeight (content height)
					e.target.style.height = e.target.scrollHeight - 20 + "px";
					dispatch({
						type: "modified",
						task: {
							...task,
							description: e.target.value,
						},
					});
					console.log(task);
				}}
			></textarea>
		</article>
	);
}
