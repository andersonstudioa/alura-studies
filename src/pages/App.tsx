import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { useState } from 'react';
import { TarefaProps } from '../components/types/tarefa';


function App() {
  const [tarefas, setTarefas] = useState<TarefaProps[] | []>([
    {
      tarefa: 'React',
      tempo: '01:00:00'
    },
    {
      tarefa: 'JavaScript',
      tempo: '02:00:00'
    },
    {
      tarefa: 'TypeScript',
      tempo: '03:00:00'
    }
  ]);
  
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
