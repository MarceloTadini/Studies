import React from "react";
import style from './Button.module.scss'


const Button: React.FC<({text: string})> = ({text}) => {
    return(
        <button className={style.button}>
            {text}
        </button>
    )
}

export default Button
