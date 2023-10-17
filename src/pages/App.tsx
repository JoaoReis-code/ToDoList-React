import React, { useState } from 'react';
import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import style from './App.module.scss';
import Lista from '../components/Lista';
import Cronometro from '../components/Cronometro';
import { tarefa } from '../types/tarefas';

function App() {

  const [tarefas, setTarefas] = useState<tarefa[] | [] >([]);
  const [selecionado, setSelecionado] = useState<tarefa>();

  function selecionaTarefa(tarefaSelecionada: tarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id? true : false
    })));
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro/>
    </div>
  );
}

export default App;
