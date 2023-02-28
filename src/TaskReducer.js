export default function taskReducer(tasks, action) {
	if (action.type === "added") {
		return [...tasks, action.newTask];
	}

	if (action.type === "removed") {
		return tasks.filter((task) => task.id !== action.id);
	}

	if (action.type === "changed") {
		return tasks.map((task) => {
			if (task.id === action.task.id) {
				return action.task;
			} else {
				return task;
			}
		});
	}
}
