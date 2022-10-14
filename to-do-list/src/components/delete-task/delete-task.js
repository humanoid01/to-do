export const DeleteTask = ({ deleteTask, id }) => {
  return <button onClick={() => deleteTask(id)}> x </button>;
};
