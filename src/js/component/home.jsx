import React, { useState } from "react";
import reactDom from "react-dom";

//create your first component
const Home = () => {
	const [newTask, setNewTask] = useState("");
	const [taskList, setTaskList] = useState([]);

	function add(e) {
		if (e.key === "Enter") {
			if (newTask === "") {
				alert("You have to add a new task");
			} else {
				setTaskList((arr) => [...arr, newTask]);
				setNewTask("");
				return;
			}
		}
		return;
	}

	function erase(i) {
		if (i > -1) {
			//validate that the array is not empty
			let aux = taskList.filter((value, index) => index !== i);
			setTaskList(aux);
		}
	}

	return (
		<div className="container d-flex flex-column align-items-center">
			<h1 className="style-1 my-4">To-Do List</h1>
			<ul className="list-group shadow">
				<input
					className="list-group-item full-box"
					id="inputTarea"
					placeholder="Type a new task"
					onChange={(e) => setNewTask(e.target.value)}
					value={newTask}
					onKeyPress={(e) => add(e)}></input>
				{taskList.length === 0 ? (
					<li className="list-group-item full-box">
						<p className="my-2">No tasks, add a task</p>
					</li>
				) : (
					taskList.map(function (name, index) {
						return (
							<li
								key={index}
								className="list-group-item full-box d-flex justify-content-between align-items-center selected">
								<p className="my-2">{name}</p>
								<button
									type="button"
									className="btn btn-link hide"
									onClick={() => {
										erase(index);
									}}>
									<i className="fas fa-times"></i>
								</button>
							</li>
						);
					})
				)}
				{taskList.length === 0 ? (
					""
				) : (
					<li className="list-group-item full-box numero-items py-0">
						<p className="my-2">
							{taskList.length === 1
								? taskList.length + " task to do"
								: taskList.length + " tasks to do"}
						</p>
					</li>
				)}
			</ul>
		</div>
	);
};

export default Home;
