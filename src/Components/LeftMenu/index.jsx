import React from 'react';
import { FaClipboardList } from 'react-icons/fa'

const LeftMenu = () => {
    return (
        <div className='leftMenu'>
            <div className='leftMenu-content'>
                <div className='leftMenu-header'>
                    Цифровая платформа <span>i4.0</span>
                </div>
                <div className='leftMenu-content-main'>
                    <nav>
                        <ul>
                            <li><FaClipboardList />Рабочие задания</li>
                            <li><FaClipboardList />Рабочие задания</li>
                            <li><FaClipboardList />Рабочие задания</li>
                            <li><FaClipboardList />Рабочие задания</li>
                        </ul>
                        <ul>
                            <li><FaClipboardList />Рабочие задания</li>
                            <li><FaClipboardList />Рабочие задания</li>
                            <li><FaClipboardList />Рабочие задания</li>
                            <li><FaClipboardList />Рабочие задания</li>
                            <li><FaClipboardList />Рабочие задания</li>
                        </ul>
                        <ul>
                            <li><FaClipboardList />Рабочие задания</li>
                            <li><FaClipboardList />Рабочие задания</li>
                        </ul>
                        <ul>
                            <li><FaClipboardList />Рабочие задания</li>
                            <li><FaClipboardList />Рабочие задания</li>
                        </ul>

                    </nav>

                </div>
            </div>
        </div>
    )
}

export default LeftMenu;
