import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";
import Task from "./Task";

export default function TaskList() {
  const tasks = useContext(TasksContext);

  const unfinishedTasks = tasks.filter((task) => !task.done);
  const finishedTasks = tasks.filter((task) => task.done);

  return (
    <>
      <>
        <h2>Unfinished Tasks</h2>
        {unfinishedTasks.length === 0 ? (
          <p>No unfinished tasks.</p>
        ) : (
          <ul>
            {unfinishedTasks.map((task) => (
              <li key={task.id}>
                <Task task={task} />
              </li>
            ))}
          </ul>
        )}
      </>

      {finishedTasks.length > 0 && (
        <>
          <h2>Finished Tasks</h2>
          <ul>
            {finishedTasks.map((task) => (
              <li key={task.id}>
                <Task task={task} />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
