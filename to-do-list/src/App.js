import { Todo } from './components/todolist/todo';
import { useEffect, useState } from 'react';
import { AddTask } from './components/add-task/add-task';
import { toDoList } from './data/data';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fullList = [];
    if (localStorage.length < 1) {
      setList(toDoList);
      return;
    }

    Object.entries(localStorage).forEach(([id, data]) => {
      setList([...list, JSON.parse(data)]);
      fullList.push(JSON.parse(data));
    });
    setList(fullList);
  }, []);

  return (
    <div>
      <AddTask list={list} setList={setList} />
      <Todo list={list} setList={setList} />
    </div>
  );
}

export default App;
