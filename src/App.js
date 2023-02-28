import CreateTaskForm from "./components/CreateTaskForm";
import TaskList from "./components/TaskList";
export default function App() {
	return (
		<main className='py-3 text-md font-sans'>
			<CreateTaskForm />
			<TaskList />
		</main>
	);
}
