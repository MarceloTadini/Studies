import React from "react";
import style from './Button.module.scss'

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ text, type }) => {
    return(
        <button type={type} className={style.button}>
            {text}
        </button>
    )
}

export default Button;
