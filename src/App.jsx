import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleinput(event) {
    setNewTask(event.target.value);
  }

  function addtask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deletetask(index) {}

  function movetaskup(index) {}

  function movetaskdown(index) {}

  return (
    <div className="text-xl items-center justify-center flex-col min-h-screen">
      <h1 className="text-3xl font-bold  underline text-green-400">
        Todo List in react(i hate web dev)
      </h1>
      <div>
        <input
          className="text-2xl w-80 p-2 "
          type="text"
          value={newTask}
          placeholder="Enter something.."
          onChange={handleinput}
        />
        <button
          className="text-2xl p-2 bg-green-500 text-green-300"
          onClick={addtask}
        >
          Add
        </button>
        {tasks.length === 0 ? (
          <p>You haven't added any tasks yet</p>
        ) : (
          <ol className="list-decimal pl-8">
            {tasks.map((task, index) => (
              <li key={index}>
                <span className="text-2xl">{task}</span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default App;
