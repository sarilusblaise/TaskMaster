import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export default function TaskItem() {
	return (
		<section className='bg-cyan-900 w-11/12 mx-auto mt-4 shadow shadow-cyan-50 px-2'>
			<article className='task'>
				<div className='taskName-container'>
					<label htmlFor='taskStatus' className='label'>
						<input
							id='taskStatus'
							name='taskStatus'
							type='checkbox'
							className='form-checkbox mr-3 rounded-sm '
						/>
						achat de lait
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

				<p className='italic'>
					Je dois acheter ce lait pour la preparation du gateau de l'aniversaire
					de mon fils.{" "}
				</p>
			</article>
		</section>
	);
}