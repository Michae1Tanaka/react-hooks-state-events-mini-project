import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formText, setFormText] = useState("");
  const [formCategory, setFormCategory] = useState("Code");

  function handleNameChange(event) {
    setFormText(event.target.value);
  }

  function handleCategoryChange(event) {
    setFormCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newTask = {
      text: formText,
      category: formCategory,
    };

    onTaskFormSubmit(newTask);

    setFormText("");
    setFormCategory("Code");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNameChange} value={formText} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={formCategory}>
          {categories.map((category) => {
            if (category !== "All") {
              return <option key={category}>{category}</option>;
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
