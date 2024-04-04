import React from "react";
import style from './Button.module.scss'

interface ButtonProps {
    text: string
    type?: "button" | "submit" | "reset"
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick }) => {
    return(
        <button onClick={onClick} type={type} className={style.button}>
            {text}
        </button>
    )
}

export default Button;
