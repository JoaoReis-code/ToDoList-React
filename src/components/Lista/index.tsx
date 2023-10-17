import { tarefa } from '../../types/tarefas';
import Item from './Item';
import style from './Lista.module.scss';

interface props{
    tarefas: tarefa[],
    selecionaTarefa:(tarefaSelecionada: tarefa) => void
}

function Lista({tarefas,selecionaTarefa}:props) {

    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefa={selecionaTarefa}
                        key={item.id}
                        {...item}
                    />               
                ))}
            </ul>
        </aside>
    )
}

export default Lista;