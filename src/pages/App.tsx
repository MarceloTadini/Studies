import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss'
import Timer from '../components/Timer';
import { useState } from 'react';
import { TasksProps } from '../types';

function App() {

  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [selected, setSelected] = useState<TasksProps>()

  function taskSelect(selectedTask: TasksProps){
    setSelected(selectedTask)
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      isSelected: task.id === selectedTask.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        taskSelect={taskSelect}
      />
      <Timer/>
    </div>
  );
}

export default App;
