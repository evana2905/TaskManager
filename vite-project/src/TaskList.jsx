import Task from "./Task";

export default function TaskList({
  tasks,
  editTask,
  deleteTask,
  toggleTaskCompletion,
}) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
}
