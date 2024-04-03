import React from "react";

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
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index}>
                        <h2>{item.task}</h2>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </aside>       
    )
}

export default List