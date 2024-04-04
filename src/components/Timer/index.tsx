import React, { useEffect, useState } from "react";
import Button from "../Button";
import Clock from "./Clock";
import style from './Timer.module.scss'
import { timeToSeconds } from "../../common/utils/date";
import { TasksProps } from "../../types";

interface Props{
    selected?: TasksProps 
    killTask: () => void
}

const Timer: React.FC<Props> = ({selected, killTask}) => {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if(selected?.time){
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    function countdown(counter: number = 0){
        setTimeout(() => {
            if(counter > 0){
                setTime(counter -1)
                return countdown(counter -1)
            }
            killTask()
        }, 1000)
    }
    
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => countdown(time)} type="button" text="Começar" />
        </div>
    )
}

export default Timer