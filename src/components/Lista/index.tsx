import React, { useState } from 'react';
import Item from './Item';
import style from './Lista.module.scss';

function Lista() {
    const [ tasks, setTasks ] = useState([{
            tarefa: 'React',
            tempo: '02:00:00'
        }, {
            tarefa: 'JavaScript',
            tempo: '02:30:00'
        }, {
            tarefa: 'TypeScript',
            tempo: '03:00:00'
        }]);

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTasks([...tasks, { tarefa: "Estudar estado", tempo: "05:00:00"}])
            }}>
                Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                   <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;