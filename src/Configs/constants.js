import React from "react";
import {createTodoData} from './helper';
import Button from "../Core/Button"

export const TODO_TYPES = {
    DONE: "Выполнено",
    IN_PROGRESS: "В Работе",
    NOT_FINISHED: "Не выполнено"
};


export const INITIAL_TODOS =  [
    createTodoData('06.10.2019', "00006",  TODO_TYPES.DONE, "Течь трубы в задании - устранить", <Button className="higherBtn" >Высший</Button>,'Бригада Номер 2', "Задания Номер 2"),
    createTodoData('06.10.2019', "00006",  TODO_TYPES.IN_PROGRESS, "Течь трубы в задании - устранить", <Button className="averageBtn" >Средний</Button>,'Бригада Номер 2', "Задания Номер 2"),
    createTodoData('06.10.2019', "00006",  TODO_TYPES.NOT_FINISHED, "Течь трубы в задании - устранить", <Button className="lowBtn" >Низкий</Button>,'Бригада Номер 2', "Задания Номер 2"),
 ];