import React from "react";
import style from './List.module.scss'
import Item from "./Item";


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