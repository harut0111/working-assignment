import React from 'react';
import Header from './_Header';
import AddingWork from './_AddingWork';
import DataFilter from './_DataFilter';
import DataTable from './_DataTable';
import Drawer from '@material-ui/core/Drawer';

import EditWork from '../EditWork'
import Tasks from '../Tasks';



const index = () => {

    // const [display, setDisplay] = useState(false);

    return (
        <div className='main'>
            <div className='main-content'>
                <Header />
                <AddingWork />
                <DataFilter />
                <DataTable />
                <Drawer open={false} onClose={() => console.log('close')} anchor="right">
                    <EditWork />
                    <Tasks />
                </Drawer>
            </div>
        </div>
    )
}

export default index;
