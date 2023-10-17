import React from "react";
import style from './Botao.module.scss';


function Botao({texto,type = "button"}:{texto:string, type?:"button" | "submit"}){
        return(
            <button type={type} className={style.botao}>
                {texto}
            </button>
        )
}

export default Botao;