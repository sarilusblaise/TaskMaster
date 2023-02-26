import React from "react";
import ReactDOM from "react-dom/client";
import TaskProvider from "./TaskContext";
import App from "./App";
import "./styles/styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<TaskProvider>
			<App />
		</TaskProvider>
	</React.StrictMode>
);
