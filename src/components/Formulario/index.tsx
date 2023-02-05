import React from "react";
import ITask from "../../types/tarefas";
import Botao from "../Botao";
import style from './Formulario.module.scss';
import { v4 as uuidv4 } from 'uuid';

class Formulario extends React.Component <{
    setTarefas: React.Dispatch<React.SetStateAction<ITask[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00:00"
    }

    adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ])        
        event.preventDefault();
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }

    render() {
        return (
            <form 
                className={style.novaTarefa}
                onSubmit={this.adicionarTarefa.bind(this)}
                >
                    <div className={style.inputContainer}>
                        <label htmlFor="tarefa">
                            Adicione um novo estudo
                        </label>
                        <input
                            type="text"
                            name="tarefa"
                            id="tarefa"
                            value={this.state.tarefa}
                            onChange={event => this.setState({...this.state, tarefa: event.target.value})}
                            placeholder="O que você quer estudar"
                            required
                        />
                    </div>
                    <div className={style.inputContainer}>
                        <label htmlFor="tempo">
                            Tempo
                        </label>
                        <input
                            type="time"
                            step="1"
                            name="tempo"
                            value={this.state.tempo}
                            onChange={event => this.setState({ ...this.state, tempo: event.target.value})}
                            id="tempo"
                            min="00:00:00"
                            max="01:30:00"
                            required
                        />
                    </div>
                    <Botao
                        type="submit">
                        Adicionar
                    </Botao>
            </form>
        )
    }
}

export default Formulario;
