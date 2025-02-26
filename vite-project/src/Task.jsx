import { useState } from "react";

export default function Task({
  task,
  editTask,
  deleteTask,
  toggleTaskCompletion,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);
  const [newDueDate, setNewDueDate] = useState(task.dueDate);

  const handleEdit = () => {
    editTask(task.id, {
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate,
    });
    setIsEditing(false);
  };

  return (
    <div className={'task ${task.completed ? "completed" : ""}'}>
      {isEditing ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <button onClick={() => toggleTaskCompletion(task.id)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}
