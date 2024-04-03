import React from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss'
import { timeToSeconds } from "../../common/utils/date";

const Timer: React.FC = () => {
    console.log("Conversão: ", timeToSeconds('01:01:01'))
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock/>
            </div>
            <Button type="submit" text="Começar" />
        </div>
    )
}

export default Timer