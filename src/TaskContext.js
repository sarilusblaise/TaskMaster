import { createContext, useContext, useReducer } from "react";
import initialTasks from "./dummyData";
import taskReducer from "./TaskReducer";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext(null);
export default function TaskProvider({ children }) {
	const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

	const addTask = (name, description) =>
		dispatch({
			type: "added",
			newTask: {
				id: uuidv4(),
				name,
				description,
				done: false,
			},
		});

	return (
		<TaskContext.Provider value={{ tasks, addTask }}>
			{children}
		</TaskContext.Provider>
	);
}

export const useGlobalContext = () => useContext(TaskContext);
