import React from 'react';
import { MdDeleteForever, MdOutlineDone } from 'react-icons/md';

export const SingleItem = ({
  id,
  task,
  done,
  changeTaskState,
  deleteTask,
  i,
}) => {
  return (
    <div className='tasks__wrapper'>
      <div
        onClick={() => {
          changeTaskState({ id, task, done }, i);
        }}
        key={id}
        className='tasks__element'>
        {!done ? (
          <div className='tasks__element unfinished'>{task}</div>
        ) : (
          <div className='tasks__element finished'>
            {task} <MdOutlineDone />
          </div>
        )}
      </div>
      <button
        onClick={e => {
          e.stopPropagation();
          deleteTask(id);
        }}
        className='tasks__button'>
        <MdDeleteForever className='tasks__button--delete' title='Delete' />
      </button>
    </div>
  );
};
