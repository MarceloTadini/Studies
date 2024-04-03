import React from "react";
import style from '../List.module.scss'

const Item: React.FC<({time: string, task: string})> = ({time, task}) => {
    return(
        <li className={style.item}>
            <h2>{task}</h2>
            <span>{time}</span>
        </li>
    )
}

export default Item