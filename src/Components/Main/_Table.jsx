import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import GreenCheckbox from '../../Core/GreenCheckbox'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AlarmIcon from '@material-ui/icons/Alarm';
// import Button from '@material-ui/core/Button';

import Icon from '../../Core/Icon';
import CustomButton from '../../Core/Button';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein, teamNumber, taskNumber) {
  return { name, calories, fat, carbs, protein, teamNumber, taskNumber };
}
//<span style={{color: 'rgb(234, 170, 96)', marginRight: '10px'}} SettingsOutlinedIcon
const rows = [
  createData('Frozen yoghurt', 159, <GreenCheckbox label='Выполнено' />, 24, <CustomButton className='averageBtn' >Средний</CustomButton>, "Бригада Номер 1", "Задания Номер 1"),
  createData('Ice cream sandwich', 237, <Icon color="rgb(234, 170, 96)" text='в Работе' size='30px' iconMargin="0 5px 0 -5px">{SettingsOutlinedIcon}</Icon>, 37, <CustomButton className="higherBtn" >Высший</CustomButton>, 'Бригада Номер 2', "Задания Номер 2"),
  createData('Eclair', 262, <Icon color="red" text='в Работе' size="30px" iconMargin="0 5px 0 -5px">{AlarmIcon}</Icon>, 24, <CustomButton className="lowBtn" >Низкий</CustomButton>, "Бригада Номер 1", "Задания Номер 2"),
  createData('Cupcake', 305, <GreenCheckbox label='Выполнено' />, 67, <CustomButton className="averageBtn" >Средний</CustomButton>, "Бригада Номер 2", "Задания Номер 1"),
  createData('Gingerbread', 356, <GreenCheckbox label='Выполнено' />, 49, <CustomButton className="lowBtn" >Низкий</CustomButton>, "Бригада Номер 1", "Задания Номер 1"),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Срок жавершена</TableCell>
            <TableCell align="left">Номер задания</TableCell>
            <TableCell align="left">Статус задания</TableCell>
            <TableCell align="left">Наименование работ</TableCell>
            <TableCell align="left">Приоритет</TableCell>
            <TableCell align="left">Бригада / исполинтель</TableCell>
            <TableCell align="left">Объект</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
              <TableCell align="left">{row.teamNumber}</TableCell>
              <TableCell align="left">{row.taskNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}