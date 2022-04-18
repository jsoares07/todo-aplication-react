import React, { useState } from "react";
import reactDom from "react-dom";

//create your first component
const Home = () => {
	const [newTask, setNewTask] = useState(""); // ("") becuase we are expecting strings
	const [taskList, setTaskList] = useState([]); // ([]) because we are expecting arrays when we add the tasks

	function add(e) {
		if (e.key === "Enter") {
			if (newTask === "") {
				//This will show an alert if the input is empty  and we press the Enter key
				alert("You have to add a new task");
			} else {
				//This will link the tasklist with the use satate with the list.
				setTaskList((arr) => [...arr, newTask]);
				setNewTask(""); // Will return to  blank after pressing the enter key
				return;
			}
		}
		return;
	}

	function erase() {
		// This function will erase the tasks added to the list
	}

	return (
		<div className="container d-flex flex-column align-items-center">
			<h1 className="style-1 my-4">To-Do List</h1>
			<ul className="list-group shadow">
				<input
					className="list-group-item full-box"
					id="input-task"
					placeholder="Type a new task"
					onChange={(e) => setNewTask(e.target.value)}
					value={newTask}
					//Calling the add function in order the add whatever we typy in the input
					onKeyPress={(e) => add(e)}></input>

				{taskList.length === 0 ? (
					//We create a conditional in case there is nothing (0) in the list(array)
					<li className="list-group-item full-box">
						<p className="my-2">No tasks, add a task</p>
					</li>
				) : (
					//else we map the list/array to get whattever we type and keep adding items
					taskList.map(function (task, item) {
						return (
							<li
								key={item}
								className="list-group-item full-box d-flex justify-content-between align-items-center selected">
								<p className="my-2">{task}</p>
								{/* We add the button to delete */}
								<button
									type="button"
									className="btn btn-link hide">
									<i className="fas fa-times"></i>
								</button>
							</li>
						);
					})
				)}

				{/*We create another conditional in wich we take the previous taskList.length === 0 to show the same string empty */}
				{taskList.length === 0 ? (
					""
				) : (
					//else, will create a <li> showing 2 different strings depending in how many items the list has.
					<li className="list-group-item full-box number-items py-0">
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
