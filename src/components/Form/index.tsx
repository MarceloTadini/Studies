import React, { useState } from "react";
import Button from "../Button";
import style from './Form.module.scss'
import { TasksProps } from "../../types";
import {v4} from "uuid"


const Form: React.FC<({setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>})> = ({setTasks}) => {
    const [time, setTime] = useState('00:00')
    const [task, setTask] = useState('')

    function handleOnSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        const newTask: TasksProps = {
            time: time,
            task: task,
            isCompleted: false,
            isSelected: false,
            id: v4()
        }

        setTasks(oldTasks => [...oldTasks, newTask])
        setTime('00:00');
        setTask('');
    }

    return(
        <form className={style.novaTarefa} onSubmit={handleOnSubmit}>
            <div className={style.inputContainer}>
                <label htmlFor="task">Adicione um novo estudo</label>
                <input 
                  type="text" 
                  name="task"
                  id="task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="O que você quer estudar?"
                  required
                />
            </div>

            <div className={style.inputContainer}>
                <label htmlFor="time">Tempo</label>
                <input 
                  type="time" 
                  step="1"
                  name="time"
                  id="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  min="00:00:00"
                  max="01:30:00"
                  required                
                />
            </div>
            <Button type="submit" text="Adicionar"/>
             
        </form>
    )
}

export default Form