import React, { useState } from "react";

const CreateTaskForm = () => {
	return (
		<form className='create-task-form'>
			<input
				className='p-2 border-b-2 border-slate-400 focus:outline-none focus:border-b-2 focus:border-slate-50 bg-cyan-900 shadow-sm shadow-cyan-500'
				type='text'
				name='task'
				placeholder='enter your task name*'
				required
			/>

			<textarea
				className='p-2 border-b-2 border-slate-400 focus:outline-none focus:border-b-2 focus:border-slate-50 bg-cyan-900 shadow-sm shadow-cyan-500'
				name='taskDescription '
				placeholder='describe the task'
			/>
			<button className='btn btn-submit' type='submit'>
				CREATE TASK
			</button>
		</form>
	);
};

export default CreateTaskForm;
