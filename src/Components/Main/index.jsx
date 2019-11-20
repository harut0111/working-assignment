import React from 'react';
import Header from './_Header';
import AddingWork from './_AddingWork';
import DataFilter from './_DataFilter';
import DataTable from './_DataTable';
import EditWork from '../EditWork'
import Tasks from '../Tasks';

const index = () => {
    return (
        <div className='main'>
            <div className='main-content'>
                <Header />
                <AddingWork />
                <DataFilter />
                <DataTable />
                {/* <EditWork />
                <Tasks /> */}
            </div>
        </div>
    )
}

export default index;
