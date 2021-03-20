import React from "react";
import Header from "./_Header";
import AddingWork from "./_AddingWork";
import DataFilter from "./_DataFilter";
import DataTable from "./_DataTable";
import Drawer from "@material-ui/core/Drawer";
import EditWork from "../EditWork";
import Tasks from "../Tasks";
import { useStateValue } from "../../Context";
import { TOGGLE_DRAWER_DISPLAY } from "../../Context/reducer";

const Main = () => {
  const [{ displayDrawer }, dispatchDisplayDrawer] = useStateValue();
  const handleOnClose = () =>
    dispatchDisplayDrawer({ type: TOGGLE_DRAWER_DISPLAY, payload: false });

  return (
    <div className="main">
      <div className="main-content">
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
  );
};

export default Main;
