import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryFilterChange = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
    const filteredTasks =
      selectedCategory === "All"
        ? TASKS
        : TASKS.filter((task) => task.category === selectedCategory);
    setTasks(filteredTasks);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const handleTaskDelete = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task !== taskToDelete);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        onSelectCategory={handleCategoryFilterChange}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm
        categories={categories}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={tasks} onDelete={handleTaskDelete}/>
    </div>
  );
}

export default App;