import style from './Lista.module.scss';
import Item from './item';
import { TarefaProps } from '../types/tarefa';

const Lista = ({ tarefas }: {tarefas: TarefaProps[]}) => {
  
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            key={index}
            {...item}
          />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;