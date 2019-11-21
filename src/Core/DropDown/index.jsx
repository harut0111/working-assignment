import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useStateValue } from '../../Context/index';
import { TODO_TYPES } from '../../Configs/constants';
import {getButtonColorForTodo} from "../../Configs/helper";
import { UPDATE_WORK } from '../../Context/reducer';


export default function DropDownDropDown() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [index, setIndex] = React.useState(0);
  

  const [{ workList }, dispatchWorkList ] = useStateValue();
  // eslint-disable-next-line no-unused-vars
  const [{ activeRowIndex }, dispatchAtiveRowIndex] = useStateValue();


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (type) => {
    
    setAnchorEl(null);

    const changedWorkList = workList.map((item, index) => {
        if(index === activeRowIndex) {
          item.type = type
        }
        return item
    });

    dispatchWorkList({type: UPDATE_WORK, payload: changedWorkList})

  };

  const activeIndex = activeRowIndex || 0;

  return (
    <div style={{backgroundColor: getButtonColorForTodo(workList[activeIndex].type)}}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        { workList[activeIndex] && workList[activeIndex].type}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.keys(TODO_TYPES).map((key, index) => (
          <MenuItem key={index} onClick={() => handleClose(TODO_TYPES[key])}>{TODO_TYPES[key]}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
