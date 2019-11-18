import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import WorkDataTable from './Table';

const index = () => {
    return (
        <div className='main'>
            <div className='main-content'>

                {/* part 1 ---- main-header -----*/} 
                <div className='main-header'>
                    <div className='main-header-text'>
                        <h1>Рабочие задания</h1>
                    </div>
                    <div className='main-header-icons'>
                        <span><FaBell /></span>
                        <span><FaUserCircle /></span>
                    </div>
                </div>
                
                {/* part 2 ----- adding-work -----*/}
                <div className='main-addingWork'>
                    <div className='main-addingWork-content'>
                        <div>div 1</div>
                        <div>div 2</div>
                        <div>div 3</div>
                        <div>div 4</div>
                        <div>div 5</div>
                    </div>
                </div>

                {/* part 3 ---- data-filter */}
                <div className='main-filter'>
                    <div className='main-filter-content'>
                        <div>div 1</div>
                        <div>div 2</div>
                        <div>div 3</div>
                        <div>div 4</div>
                        <div>div 5</div>
                    </div>
                </div>

                {/* part 4 ---- table */}
                <div className='main-table'>
                    <div className='main-table-content'>
                        <WorkDataTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index;
