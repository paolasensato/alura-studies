import React, { useState } from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITask } from '../types/tarefas';
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

  function finalizarTarefa() {
    if(selecionado) {
      setSelecionado(undefined)
      setTasks(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
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
        <Cronometro 
          selecionado={selecionado}
          finalizarTarefa={finalizarTarefa}  
        />
    </div>
  ); 
}

export default App;
