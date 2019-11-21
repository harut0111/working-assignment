import React from 'react';
import Header from './_Header';
import AddingWork from './_AddingWork';
import DataFilter from './_DataFilter';
import DataTable from './_DataTable';
import Drawer from '@material-ui/core/Drawer';

import EditWork from '../EditWork'
import Tasks from '../Tasks';



const Main = () => {

    const [display, setDisplay] = React.useState(false);

    const handleOnClose = (event) => setDisplay(event);

    return (
        <div className='main'>
            <div className='main-content'>
                <Header />
                <AddingWork />
                <DataFilter />
                <DataTable />
                <Drawer open={display} onClose={() => handleOnClose(false)} anchor="right">
                    <EditWork />
                    <Tasks />
                </Drawer>
            </div>
        </div>
    )
}

export default Main;
