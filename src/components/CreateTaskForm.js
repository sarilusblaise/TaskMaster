import React, { useState } from "react";

const CreateTaskForm = () => {
	return (
		<form className='flex flex-col gap-y-3 border-white border-solid w-11/12 mx-auto'>
			<input
				className='p-2 border-b-2 border-slate-400 focus:outline-none focus:border-b-2 focus:border-slate-50 bg-cyan-900'
				type='text'
				name='task'
				placeholder='task name'
				required
			/>

			<textarea
				className='p-2 border-b-2 border-slate-400 focus:outline-none focus:border-b-2 focus:border-slate-50 bg-cyan-900'
				name='taskDescription'
				placeholder='describe the task'
			/>
			<button
				className='bg-cyan-700 hover:bg-cyan-600 p-1 rounded-sm'
				type='submit'
			>
				CREATE TASK
			</button>
		</form>
	);
};

export default CreateTaskForm;
