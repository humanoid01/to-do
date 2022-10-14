import { useState } from 'react';
import '../../scss/styles.css';

export const AddTask = ({ list, setList }) => {
  const [task, setTask] = useState('');

  const getBiggestId = newList => {
    let maxId = 0;
    newList.forEach(({ id }) => (maxId < id ? (maxId = id) : id));
    return maxId + 1;
  };

  const addNewTask = task => {
    const newList = [...list];
    const newTask = {
      id: getBiggestId(newList),
      task,
      done: false,
    };
    newList.push(newTask);
    setList(newList);
    localStorage.setItem(newTask.id, JSON.stringify(newTask));
  };

  return (
    <div className='add__task'>
      <form
        action=''
        onSubmit={e => {
          addNewTask(task);
          e.preventDefault();
        }}>
        <h2 className='add__task--title'> Add your next task: </h2>
        <div className='add__task--group'>
          <input
            className='add__task--input'
            type='input'
            value={task}
            onChange={e => setTask(e.target.value)}
            placeholder='Task'
            id='task'
            name='task'
          />
          <label className='add__task--label' htmlFor='task'>
            Task
          </label>
        </div>
      </form>
    </div>
  );
};
