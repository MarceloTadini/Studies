import React from "react";
import style from './List.module.scss'


const List: React.FC = () => {
    const tasks = [
    {
        task: 'React',
        time: '02:00:00'
    },
    {
        task: 'Javascript',
        time: '01:00:00'
    }
]

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li className={style.item} key={index}>
                        <h2>{item.task}</h2>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </aside>       
    )
}

export default List