import CreateTaskForm from "./components/CreateTaskForm";
import TaskItem from "./components/TaskItem";
export default function App() {
	return (
		<main className='py-3 text-md font-sans'>
			<CreateTaskForm />
			<TaskItem />
		</main>
	);
}
