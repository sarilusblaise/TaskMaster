import { createContext, useContext, useReducer } from "react";
import taskReducer from "./TaskReducer";

const TaskContext = createContext(null);
const initialTasks = [];
export default function TaskProvider({ children }) {
	const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
	return <TaskContext.Provider value={{}}>{children}</TaskContext.Provider>;
}

export const useGlobalContext = () => useContext(TaskContext);
