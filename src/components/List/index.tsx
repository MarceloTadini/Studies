import React from "react";
import style from './List.module.scss'
import Item from "./Item";
import { TasksProps } from "../../types";


const List: React.FC<({tasks: TasksProps[]})> = ({tasks}) => {
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        {...item} 
                        key={index}
                    />
                ))}
            </ul>
        </aside>       
    )
}

export default List