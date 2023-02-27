import React, { useState } from "react";
import { useGlobalContext } from "../TaskContext";

const CreateTaskForm = () => {
	const [taskName, setTaskName] = useState();
	const [taskDescription, setTaskDescription] = useState();
	const { addTask } = useGlobalContext();
	return (
		<form
			action=''
			className='create-task-form'
			onSubmit={(e) => {
				e.preventDefault();
				setTaskName("");
				setTaskDescription("");
				addTask(taskName, taskDescription);
			}}
		>
			<input
				className='p-2 border-b-2 border-slate-400 focus:outline-none focus:border-b-2 focus:border-slate-50 bg-cyan-900 shadow-sm shadow-cyan-500'
				type='text'
				name='task'
				placeholder='enter your task name*'
				required
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
			/>

			<textarea
				className='p-2 border-b-2 border-slate-400 focus:outline-none focus:border-b-2 focus:border-slate-50 bg-cyan-900 shadow-sm shadow-cyan-500'
				name='taskDescription '
				placeholder='describe the task'
				value={taskDescription}
				onChange={(e) => setTaskDescription(e.target.value)}
			/>
			<button className='btn btn-submit' type='submit'>
				CREATE TASK
			</button>
		</form>
	);
};

export default CreateTaskForm;
