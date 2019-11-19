import React from 'react';
import { FaClipboardList, FaRegChartBar } from 'react-icons/fa';
import { AiTwotoneSetting } from "react-icons/ai";
import { GoChecklist, GoBug } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";




const LeftMenu = () => {
    return (
        <div className='leftMenu'>
            <div className='leftMenu-content'>
                <div className='leftMenu-header'>
                    <div style={{margin: "0 5px"}}><AiTwotoneSetting size="30px" color="orange"/></div>
                    <div>Цифровая платформа <span>i4.0</span> </div>
                </div>
                <div className='leftMenu-content-main'>
                    <nav>
                        <ul>
                            <li><span className='menuIcon'><GoChecklist size="30px"/></span><span>Рабочие задания</span></li>
                            <li><span className='menuIcon'><GoBug size="28px"/></span><span>Журнал дефектов</span></li>
                            <li><span className='menuIcon'><FiPhoneCall size="22px"/></span><span>Запросы на работы</span></li>
                            <li><span className='menuIcon'><FaRegChartBar size="25px"/></span><span>Отчеты и показатели</span></li>
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
