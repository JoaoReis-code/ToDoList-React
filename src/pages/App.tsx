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

  function finalizarTarefa(){
    if(selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id){
          return {
            ...tarefa,
            selecionado:false,
            completado:true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
      selecionado={selecionado}
      finalizarTarefa = {finalizarTarefa}
      />
    </div>
  );
}

export default App;
