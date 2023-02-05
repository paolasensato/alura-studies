import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import ITask from '../types/tarefas';
import style from './App.module.scss';

function App() {
  const [ tasks, setTasks ] = useState<ITask[]>([]);
  const [selecionado, setSelecionado] = useState<ITask>();

  function selecionaTarefa(tarefaSelecionada: ITask) {
    setSelecionado(tarefaSelecionada);
    setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
        <Formulario 
          setTarefas={setTasks}
        />
        <Lista
          tarefas={tasks}
          selecionaTarefa={selecionaTarefa}
        />
        <Cronometro />
    </div>
  ); 
}

export default App;
