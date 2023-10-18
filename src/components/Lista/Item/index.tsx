import { tarefa } from '../../../types/tarefas'
import style from './Item.module.scss'

interface props extends tarefa{
    selecionaTarefa:(tarefaSelecionada: tarefa) => void
}

function Item({tarefa,tempo,selecionado,completado,id,selecionaTarefa}:props){
    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado: ''} ${completado? style.completado: ''}`}
        onClick={() => !completado && selecionaTarefa({tarefa,tempo,selecionado,completado,id})}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label='Tarefa completada'></span>}
        </li>
    )
}

export default Item