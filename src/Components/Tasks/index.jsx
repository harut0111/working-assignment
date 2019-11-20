import React from 'react'
import { TiThListOutline } from 'react-icons/ti';
import TasksBody from './_TasksBody'


const index = () => {
    return (
        <div className='tasks'>

            <div className='tasks-header'>
                <span><TiThListOutline /></span>
                <span>Задачи</span>
            </div>

            <TasksBody title="Отключить оборудование"/>
            <TasksBody title="Устранить неисправность"/>
            <TasksBody title="Устранить неисправность"/>
            <TasksBody title="Устранить неисправность"/>


        </div>
    )
}

export default index
