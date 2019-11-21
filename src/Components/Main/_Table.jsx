import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AlarmIcon from '@material-ui/icons/Alarm';
import { useStateValue } from '../../Context/index'
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import Icon  from '../../Core/Icon';
import { TODO_TYPES } from '../../Configs/constants';
import {getButtonColorForTodo} from "../../Configs/helper";
import { DELETE_WORK, CHANGE_ACTIVE_ROW_INDEX, TOGGLE_DRAWER_DISPLAY } from '../../Context/reducer';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
    width: "95%",
    margin: "0 auto"
  },
});

export default function SimpleTable() {

  const classes = useStyles();

  const [{ workList }, dispatchWorkList ] = useStateValue();
  // eslint-disable-next-line no-unused-vars
  const [{ displayDrawer }, dispatchDisplayDrawer] = useStateValue();
  const [{ activeRowIndex }, dispatchAtiveRowIndex] = useStateValue();
  
  const handleOnClick = (event) => {
    dispatchAtiveRowIndex({type: CHANGE_ACTIVE_ROW_INDEX, payload: Number(event.currentTarget.id)})
  }

  const handleOnDelete = (e) => {
    e.stopPropagation();
    const filteredItem = workList.filter((item, index) => index !== activeRowIndex)
    // console.log(filteredItem)
    dispatchWorkList({type: DELETE_WORK,  payload: filteredItem})
  }
  
  const handleOnEdit = (e) => {
    e.stopPropagation();
    dispatchDisplayDrawer({type: TOGGLE_DRAWER_DISPLAY, payload: true})
  }

  const renderTodoIcon = (type) => {
    let configs = { color : getButtonColorForTodo(type)}
    switch(type){
      case TODO_TYPES.DONE : configs = {...configs, text: 'Выполнено',  size: "30px", iconMargin: "0 5px 0 -5px", children: () => <CheckBoxIcon/>}; break;
      case TODO_TYPES.IN_PROGRESS : configs = {...configs, text: 'В Работе',  size: "30px", iconMargin: "0 5px 0 -5px", children: () => <SettingsOutlinedIcon />}; break;
      case TODO_TYPES.NOT_FINISHED : configs = { ...configs, text: 'Не выполнено',  size: "30px", iconMargin: "0 5px 0 -5px", children: () => <AlarmIcon />}; break;
      default : configs = {}
    }
    return <Icon {...configs}/>
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Срок завершена</TableCell>
            <TableCell align="left">Номер задания</TableCell>
            <TableCell align="left">Статус задания</TableCell>
            <TableCell align="left">Наименование работ</TableCell>
            <TableCell align="left">Приоритет</TableCell>
            <TableCell align="left">Бригада / исполинтель</TableCell>
            <TableCell align="left">Объект</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {workList.map((row, index) => (
            <TableRow key={index} id={index} onClick={handleOnClick} style={{boxShadow: activeRowIndex === index ? '0 0 10px silver' : 'none'}}>
              <TableCell component="th" scope="row" className={classes.bodyCell}>{row.name}</TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{renderTodoIcon(row.type)}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
              <TableCell align="left">{row.teamNumber}</TableCell>
              <TableCell align="left">{row.taskNumber}</TableCell>
              {activeRowIndex === index && <TableCell align="left">
                          <FaRegEdit size="20px" color="rgb(67, 160, 71)" onClick={handleOnEdit}/>
                          <AiOutlineDelete size="22px" color="red" onClick={handleOnDelete}/>
                  </TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}