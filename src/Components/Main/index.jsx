import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const index = () => {
    return (
        <div className='main'>
            <div className='main-content'>
                {/* part 1 */} 
                <div className='main-header'>
                    <div className='main-header-text'>
                        <h1>Рабочие задания</h1>
                    </div>
                    <div className='main-header-icons'>
                        <span><FaBell /></span>
                        <span><FaUserCircle /></span>
                    </div>
                </div>
                {/* part 2 */}

                <div className='adding '>

                </div>
                
            </div>
        </div>
    )
}

export default index;
