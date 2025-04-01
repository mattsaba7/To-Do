import { useState, useContext, useRef, useEffect } from "react";
import { TasksContext, TasksDispatchContext } from "../contexts/TasksContext";

export default function AddTask() {
  const [text, setText] = useState("");

  const [error, setError] = useState("");
  const tasks = useContext(TasksContext);
  const dispatch = useContext(TasksDispatchContext);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleAddTask() {
    if (!text.trim()) {
      setError("Task name cannot be empty!");
      return;
    }

    const isDuplicate = tasks.some(
      (task) => task.text.toLowerCase() === text.toLowerCase()
    );
    if (isDuplicate) {
      setError("Task already exists!"); 
      return;
    }

    dispatch({
      type: "added",
      task: {
        text,
        id: nextId++,
        done: false,
      },
    });

    setText("");
    setError("");
  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
      />
      <button onClick={handleAddTask}>Add</button>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
    </>
  );
}

let nextId = 4;
