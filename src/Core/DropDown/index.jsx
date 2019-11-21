import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu(props) {
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [index, setIndex] = React.useState(0);



  const handleClick = event => {
    setAnchorEl(event.currentTarget);
   
  };

  const handleClose = (index) => {
    setAnchorEl(null);
    if(typeof(index) === 'number') setIndex(index);
  };

  const list = props.list ? props.list: [];

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {list[index]}
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
