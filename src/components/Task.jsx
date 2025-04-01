import { useState, useContext, useRef } from "react";
import { TasksDispatchContext } from "../contexts/TasksContext";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const dispatch = useContext(TasksDispatchContext);
  let inputRef = useRef(null);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          ref={inputRef}
          type="text"
          value={editedText}
          onChange={(e) => {
            setEditedText(e.target.value);
          }}
          onBlur={() => setIsEditing(false)}
        />
        <button
          onClick={() => {
            dispatch({
              type: "changed",
              task: {
                text: editedText,
                id: task.id,
                done: task.done,
              },
            });
            setIsEditing(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          onClick={() => {
            setIsEditing(true);
            setTimeout(() => inputRef.current?.focus(), 0);
          }}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => {
          dispatch({
            type: "changed",
            task: {
              text: task.text,
              id: task.id,
              done: !task.done,
            },
          });
        }}
      />
      {taskContent}
      <button
        onClick={() => {
          dispatch({
            type: "deleted",
            id: task.id,
          });
        }}
      >
        Delete
      </button>
    </>
  );
}
