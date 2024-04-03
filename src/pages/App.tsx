import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss'
import Timer from '../components/Timer';
import { useState } from 'react';
import { TasksProps } from '../types';

function App() {

  const [tasks, setTasks] = useState<TasksProps[]>([])

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Timer/>
    </div>
  );
}

export default App;
