import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import GreenCheckbox from '../../Core/GreenCheckbox'
// import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
// import AlarmIcon from '@material-ui/icons/Alarm';

// import Icon from '../../Core/Icon';
// import CustomButton from '../../Core/Button';

// import Button from '@material-ui/core/Button';
import { useStateValue } from '../../State/index'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

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

  const [{ workList }, dispatchWorkList ] = useStateValue();
  // eslint-disable-next-line no-unused-vars
  const [{ displayDrawer }, dispatchDisplayDrawer] = useStateValue();
  const [{ activeRowIndex }, dispatchaAtiveRowIndex] = useStateValue();

  const classes = useStyles();
  
  const handleOnClick = (event) => {
    dispatchaAtiveRowIndex({type: 'changeActiveRowIndex', payload: Number(event.currentTarget.id)})
  }

  const handleOnDelete = () => {
    const filteredItem = workList.filter((item, index) => index !== activeRowIndex)
    dispatchWorkList({type: 'deleteWork',  payload: filteredItem})
  }
  
  const handleOnEdit = () => {
    dispatchDisplayDrawer({type: 'toggleDrawerDisplay', payload: true})
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
            <TableRow key={index} id={index} onClick={handleOnClick} style={{backgroundColor: activeRowIndex === index ? 'gray' : '#fff'}}>
              <TableCell component="th" scope="row" className={classes.bodyCell}>{row.name}</TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
              <TableCell align="left">{row.teamNumber}</TableCell>
              <TableCell align="left">{row.taskNumber}</TableCell>
              {activeRowIndex === index && <TableCell align="left">
                          <FaEdit onClick={handleOnEdit}/>
                          <MdDelete onClick={handleOnDelete}/>
                          {/* <IoMdOpen/> */}
                  </TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}