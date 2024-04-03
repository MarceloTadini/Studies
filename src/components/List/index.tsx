import React from "react";
import style from './List.module.scss'
import Item from "./Item";
import { TasksProps } from "../../types";

interface Props{
    tasks: TasksProps[],
    taskSelect: (selectedTask: TasksProps) => void
}

const List: React.FC<Props> = ({tasks, taskSelect}) => {
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        taskSelect={taskSelect}
                        {...item} 
                        key={item.id}
                    />
                ))}
            </ul>
        </aside>       
    )
}

export default List