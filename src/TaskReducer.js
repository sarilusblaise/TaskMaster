import { type } from "@testing-library/user-event/dist/type";

export default function taskReducer(tasks, action) {
	if ((action.type = "added")) {
		return [...tasks, action.newTask];
	}
}
