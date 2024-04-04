import React from "react";
import style from './Item.module.scss'
import { TasksProps } from "../../../types";


interface Props extends TasksProps{
    taskSelect: (selectedTask: TasksProps) => void

}

const Item: React.FC<Props> = ({time, task, isCompleted, isSelected, id, taskSelect}) => {
   
    return(
        <li 
          className={`${style.item} ${isSelected ? style.itemSelecionado : ''} ${isCompleted ? style.itemCompletado: ''}`} 
          onClick={() => !isCompleted && taskSelect({
            task,
            time,
            isCompleted,
            isSelected,
            id
        })}>
            <h2>{task}</h2>
            <span>{time}</span>
            {isCompleted && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}

export default Item