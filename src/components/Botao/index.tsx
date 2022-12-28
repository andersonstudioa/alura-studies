import { ReactElement } from 'react'
import style from './Botao.module.scss'

interface BotaoProps {
    children: ReactElement | string
    type?: "button" | "submit" | "reset"
}

const Botao = (props: BotaoProps) => {
    return (
        <button type={props.type} className={style.botao}>
            {props.children}
        </button>
    )
}

export default Botao
