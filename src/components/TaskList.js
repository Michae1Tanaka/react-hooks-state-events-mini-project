import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, setStateTasksArray }) {
  function handleDeleteButton(taskToDelete) {
    setStateTasksArray(tasks.filter((task) => task !== taskToDelete));
  }

  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={uuid()}
          text={task.text}
          category={task.category}
          task={task}
          handleDeleteButton={handleDeleteButton}
        />
      ))}
    </div>
  );
}

export default TaskList;
