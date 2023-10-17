import Botao from "../Botao"
import Relogio from "./Relogio"
import style from './Cronometro.module.scss'

function Cronometro(){
    return(
        <div className={style.cronometro}>
            <div>
                <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
            </div>

            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
                
            <div>
                <Botao 
                    texto="Comecar"
                />
            </div>
        </div>
        
    )
}

export default Cronometro