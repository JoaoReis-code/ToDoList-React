import Botao from "../Botao"
import Relogio from "./Relogio"
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from "../../common/utils/time"
import { tarefa } from "../../types/tarefas"
import { useEffect, useState } from "react"

interface props{
    selecionado: tarefa | undefined,
    finalizarTarefa: () => void
}

function Cronometro({selecionado, finalizarTarefa}:props){
    const [tempo, setTempo] = useState<number>();
    
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }       
    },[selecionado])
    
    function regressiva(contador:number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }

    return(
        <div className={style.cronometro}>
            <div>
                <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
                Tempo:{tempo}
            </div>

            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
                
            <div>
                <Botao onClick={() => regressiva(tempo)}
                    texto="Comecar"
                />
            </div>
        </div>
        
    )
}

export default Cronometro