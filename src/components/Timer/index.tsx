import React from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss'

const Timer: React.FC = () => {
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock/>
            </div>
            <Button text="Começar" />
        </div>
    )
}

export default Timer