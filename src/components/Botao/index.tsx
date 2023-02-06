import style from './Botao.module.scss'

interface Props {
    children: React.ReactNode | string
    type?: "button" | "submit" | "reset" | undefined, onClick?: () => void
}

const Botao = (props: Props) => {
    const { type = "button", onClick} = props;
    return (
        <button 
            onClick={onClick}
            type={type}
            className={style.botao}>
            {props.children}
        </button>
    )
}

export default Botao
