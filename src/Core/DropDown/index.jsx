import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const [index, setIndex] = React.useState(0);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (index) => {
    setAnchorEl(null);
    setIndex(index);
  };

  const list = ["Выполнено", "В работе", "Не выполнено"];
  

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
        <MenuItem onClick={() => handleClose(0)}>Выполнено</MenuItem>
        <MenuItem onClick={() => handleClose(1)}>В работе</MenuItem>
        <MenuItem onClick={() => handleClose(2)}>Не выполнено</MenuItem>
      </Menu>
    </div>
  );
}
