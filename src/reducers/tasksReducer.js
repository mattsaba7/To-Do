export default function tasksReducer(state, action) {
  switch (action.type) {
    case "added": {
      console.log("Adding task:", action.task);
      return [...state, action.task];
    }
    case "changed": {
      console.log("Changing task:", action.task);
      return state.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case "deleted": {
      return state.filter((task) => task.id !== action.id);
    }
    default: {
      throw new Error("Unknown action type " + action.type);
    }
  }
}