import React from "react";
import style from '../List.module.scss'
import { TasksProps } from "../../../types";

const Item: React.FC<TasksProps> = ({time, task, isCompleted, isSelected, id}) => {
    console.log("Item atual: ", {time, task, isCompleted, isSelected, id})
    return(
        <li className={style.item}>
            <h2>{task}</h2>
            <span>{time}</span>
        </li>
    )
}

export default Item