import React from 'react';
import Header from './_Header';
import AddingWork from './_AddingWork';
import DataFilter from './_DataFilter';
import DataTable from './_DataTable';
import Drawer from '@material-ui/core/Drawer';

import EditWork from '../EditWork'
import Tasks from '../Tasks';

import { useStateValue } from '../../State/index';




const Main = () => {

    // const [display, setDisplay] = React.useState(false);

    const [{ displayDrawer }, dispatchDisplayDrawer] = useStateValue();



    const handleOnClose = () => dispatchDisplayDrawer({type: 'toggleDrawerDisplay', payload: false});

    return (
        <div className='main'>
            <div className='main-content'>
                <Header />
                <AddingWork />
                <DataFilter />
                <DataTable />
                <Drawer open={displayDrawer} onClose={handleOnClose} anchor="right">
                    <EditWork />
                    <Tasks />
                </Drawer>
            </div>
        </div>
    )
}

export default Main;
