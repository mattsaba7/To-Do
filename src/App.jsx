import TasksProvider from "./contexts/TasksContext";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./App.css";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Nashville</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

