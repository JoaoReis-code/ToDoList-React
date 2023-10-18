import style from './Botao.module.scss';


function Botao({texto,type = "button",onClick}:{texto:string, type?:"button" | "submit", onClick?: () => void}){
        return(
            <button onClick={onClick} type={type} className={style.botao}>
                {texto}
            </button>
        )
}

export default Botao;