import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { useGlobalContext } from "../TaskContext";

export default function TaskItem() {
	const { tasks } = useGlobalContext();
	return (
		<section className='task-item'>
			{tasks.map((task) => {
				const { id, name, description, done } = task;
				return (
					<article key={id} className='task'>
						<div className='taskName-container'>
							<label htmlFor='taskStatus' className='label'>
								<input
									id='taskStatus'
									name='taskStatus'
									type='checkbox'
									className='form-checkbox mr-3 rounded-sm '
								/>
								{name}
							</label>
							<div className='icon-container'>
								<button>
									<FaEdit className='icon' />
								</button>
								<button>
									<AiFillDelete className='icon' />
								</button>
							</div>
						</div>

						<p className='italic'>{description}</p>
					</article>
				);
			})}

			<button type='button' className='btn btn-clear'>
				CLEAR COMPLETED TASKS
			</button>
		</section>
	);
}
