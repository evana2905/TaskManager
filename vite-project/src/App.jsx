import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import FilterSortControls from "./FilterSortControls";
import "./style.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newest");

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task, completed: false }]);
  };

  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sort === "newest") return b.id - a.id;
    if (sort === "oldest") return a.id - b.id;
    if (sort === "dueSoon") return new Date(a.dueDate) - new Date(b.dueDate);
    return 0;
  });

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <FilterSortControls setFilter={setFilter} setSort={setSort} />
      <TaskList
        tasks={sortedTasks}
        editTask={editTask}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
    </div>
  );
}
