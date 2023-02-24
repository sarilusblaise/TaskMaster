import React, { useState } from "react";

const CreateTaskForm = ({ onSubmit }) => {
	return (
		<form className='create-task-form'>
			<h2 className='create-task-form__title'>Create a New Task</h2>

			<input className='create-task-form__input' required />

			<textarea className='create-task-form__textarea' />
			<button type='submit' className='create-task-form__button'>
				Create Task
			</button>
		</form>
	);
};

export default CreateTaskForm;
