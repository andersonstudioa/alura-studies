import style from './Lista.module.scss';
import Item from './item';
import { TarefaProps } from '../types/tarefa';

interface Props {
  tarefas: TarefaProps[],
  selecionaTarefa: (tarefaSelecionada: TarefaProps) => void
}

const Lista = ({ tarefas, selecionaTarefa }: Props) => {
  
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
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