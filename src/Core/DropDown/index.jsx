import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useStateValue } from '../../State/index';


export default function SimpleMenu(props) {

  
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [index, setIndex] = React.useState(0);
  

  console.log('anchorEl', props.list[index]);

  const [{ workList }, dispatchWorkList ] = useStateValue();
  // eslint-disable-next-line no-unused-vars
  const [{ activeRowIndex }, dispatchAtiveRowIndex] = useStateValue();


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  

  const handleClose = (index) => {
    setAnchorEl(null);
    if(typeof(index) === 'number') setIndex(index);
    // dispatchWorkList({type: 'updateWorkData', payload: Object.assign({}, workList {
      
    // })})
  };

  const list = props.list ? props.list: [];

  const activeIndex = activeRowIndex || 0;

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {workList[activeIndex].fat.props.text || null}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {list.map((item, index) => (
          <MenuItem key={index} onClick={() => handleClose(index)}>{item}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
