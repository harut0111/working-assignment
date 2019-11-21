import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import GreenCheckbox from '../../Core/GreenCheckbox'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AlarmIcon from '@material-ui/icons/Alarm';

// import Icon from '../../Core/Icon';
// import CustomButton from '../../Core/Button';

// import Button from '@material-ui/core/Button';
import { useStateValue } from '../../State/index'
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import Icon  from '../../Core/Icon';
import { TODO_TYPES } from '../../configs/constants';

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

// function createData(name, calories, fat, carbs, protein, teamNumber, taskNumber) {
//   return { name, calories, fat, carbs, protein, teamNumber, taskNumber };
// }

// const rows = [
//   createData('05.10.2019', "00007", <GreenCheckbox label='Выполнено' />, "Вибрация мотор", <CustomButton className='averageBtn' >Средний</CustomButton>, "Бригада Номер 1", "Задания Номер 1"),
//   createData('06.10.2019', "00006", <Icon color="rgb(234, 170, 96)" text='в Работе' size='30px' iconMargin="0 5px 0 -5px">{SettingsOutlinedIcon}</Icon>, "Течь трубы в задании - устранить", <CustomButton className="higherBtn" >Высший</CustomButton>, 'Бригада Номер 2', "Задания Номер 2"),
//   createData('07.10.2019', "00005", <Icon color="red" text='Просрочено' size="30px" iconMargin="0 5px 0 -5px">{AlarmIcon}</Icon>, "Течь трубы в задании - устранить", <CustomButton className="lowBtn" >Низкий</CustomButton>, "Бригада Номер 1", "Задания Номер 2"),
//   createData('08.10.2019', "00007", <GreenCheckbox label='Выполнено' />, "Течь трубы в задании - устранить", <CustomButton className="averageBtn" >Средний</CustomButton>, "Бригада Номер 2", "Задания Номер 1"),
//   createData('09.10.2019', "00012", <GreenCheckbox label='Выполнено' />, "Течь трубы в задании - устранить", <CustomButton className="lowBtn" >Низкий</CustomButton>, "Бригада Номер 1", "Задания Номер 1"),
// ];

export default function SimpleTable() {

  const classes = useStyles();

  const [{ workList }, dispatchWorkList ] = useStateValue();
  // eslint-disable-next-line no-unused-vars
  const [{ displayDrawer }, dispatchDisplayDrawer] = useStateValue();
  const [{ activeRowIndex }, dispatchAtiveRowIndex] = useStateValue();
  
  // console.log('workList', workList);
  

  const handleOnClick = (event) => {
    dispatchAtiveRowIndex({type: 'changeActiveRowIndex', payload: Number(event.currentTarget.id)})
  }

  const handleOnDelete = (e) => {
    e.stopPropagation();
    const filteredItem = workList.filter((item, index) => index !== activeRowIndex)
    // console.log(filteredItem)
    dispatchWorkList({type: 'deleteWork',  payload: filteredItem})
  }
  
  const handleOnEdit = (e) => {
    e.stopPropagation();
    dispatchDisplayDrawer({type: 'toggleDrawerDisplay', payload: true})
  }

  const renderTodoIcon = (type) => {
    let configs = {}
    switch(type){
      case TODO_TYPES.DONE : configs = { color: "#43a047", text: 'Выполнено',  size: "30px", iconMargin: "0 5px 0 -5px", children: () => <CheckBoxIcon/>}; break;
      case TODO_TYPES.IN_PROGRESS : configs = { color: "rgb(234, 170, 96)", text: 'В Работе',  size: "30px", iconMargin: "0 5px 0 -5px", children: () => <SettingsOutlinedIcon />}; break;
      case TODO_TYPES.NOT_FINISHED : configs = { color: "red", text: 'Не выполнено',  size: "30px", iconMargin: "0 5px 0 -5px", children: () => <AlarmIcon />}; break;
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
                          {/* <IoMdOpen/> */}
                  </TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}