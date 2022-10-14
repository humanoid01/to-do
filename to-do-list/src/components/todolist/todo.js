import '../../scss/styles.css';
import { SingleItem } from '../SingleItem/SingleItem';

export const Todo = ({ list, setList }) => {
  const changeTaskState = ({ id, task, done }, i) => {
    const newList = [...list];
    const newListItem = { id, task, done: !done };
    newList[i] = newListItem;

    localStorage.setItem(id, JSON.stringify(newListItem));
    setList(newList);
  };

  const deleteTask = targetId => {
    const newList = [...list].filter(({ id }) => {
      if (targetId === id) {
        localStorage.removeItem(id);
      }
      return id !== targetId;
    });

    setList(newList);
  };

  return (
    <div className='tasks'>
      {list.map(({ id, task, done }, i) => {
        return (
          <SingleItem
            key={id}
            id={id}
            task={task}
            done={done}
            i={i}
            changeTaskState={changeTaskState}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
};
