import React from "react";
import style from '../List.module.scss'
import { TasksProps } from "../../../types";

interface Props extends TasksProps{
    taskSelect: (selectedTask: TasksProps) => void

}

const Item: React.FC<Props> = ({time, task, isCompleted, isSelected, id, taskSelect}) => {
   // console.log("Item atual: ", {time, task, isCompleted, isSelected, id})
    return(
        <li 
          className={`${style.item} ${isSelected ? style.itemSelecionado : ''}`} 
          onClick={() => taskSelect({
            task,
            time,
            isCompleted,
            isSelected,
            id
        })}>
            <h2>{task}</h2>
            <span>{time}</span>
        </li>
    )
}

export default Item