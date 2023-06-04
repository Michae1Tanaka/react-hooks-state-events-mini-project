import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [stateTasksArray, setStateTasksArray] = useState(TASKS);
  useEffect(() => {
    const filteredTasks =
      selectedCategory === "All"
        ? TASKS
        : TASKS.filter((task) => {
            return task.category === selectedCategory;
          });

    setStateTasksArray(filteredTasks);
  }, [selectedCategory]);

  function onTaskFormSubmit(newTask) {
    setStateTasksArray((stateTasksArray) => [...stateTasksArray, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={CATEGORIES}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={stateTasksArray} setStateTasksArray={setStateTasksArray} />
    </div>
  );
}

export default App;
