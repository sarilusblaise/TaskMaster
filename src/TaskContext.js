import { createContext, useContext, useReducer } from "react";
import initialTasks from "./dummyData";
import taskReducer from "./TaskReducer";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext(null);
let nextId = 4;
export default function TaskProvider({ children }) {
	const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

	const addTask = (name, description) =>
		dispatch({
			type: "added",
			newTask: {
				id: nextId++,
				name,
				description,
				done: false,
			},
		});

	const removeTask = (id) => dispatch({ type: "removed", id });

	return (
		<TaskContext.Provider value={{ tasks, addTask, removeTask, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
}

export const useGlobalContext = () => useContext(TaskContext);
