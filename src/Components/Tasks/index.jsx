import React from 'react'
import { TiThListOutline } from 'react-icons/ti';
import TaskBody from './_TaskBody'


const Tasks = () => {
    return (
        <div className='tasks'>
            <div className='tasks-header'>
                <span><TiThListOutline /></span>
                <span>Задачи</span>
            </div>
            <TaskBody title="Отключить оборудование"/>
            <TaskBody title="Устранить неисправность"/>
            <TaskBody title="Устранить неисправность"/>
            <TaskBody title="Устранить неисправность"/>
        </div>
    )
}

export default Tasks
