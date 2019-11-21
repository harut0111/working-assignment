import React from 'react';
import './App.scss';
import LeftMenu from './Components/LeftMenu';
import Main from './Components/Main';
import { StateProvider } from './State/index';


import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AlarmIcon from '@material-ui/icons/Alarm';

import GreenCheckbox from './Core/GreenCheckbox'
import Icon from './Core/Icon';
import CustomButton from './Core/Button';

function App() {

  function createData(name, calories, fat, carbs, protein, teamNumber, taskNumber) {
    return { name, calories, fat, carbs, protein, teamNumber, taskNumber };
  }
  

  const rows = [
    createData('05.10.2019', "00007", <GreenCheckbox label='Выполнено' />, "Вибрация мотор", <CustomButton className='averageBtn' >Средний</CustomButton>, "Бригада Номер 1", "Задания Номер 1"),
    createData('06.10.2019', "00006", <Icon color="rgb(234, 170, 96)" text='в Работе' size='30px' iconMargin="0 5px 0 -5px">{SettingsOutlinedIcon}</Icon>, "Течь трубы в задании - устранить", <CustomButton className="higherBtn" >Высший</CustomButton>, 'Бригада Номер 2', "Задания Номер 2"),
    createData('07.10.2019', "00005", <Icon color="red" text='Просрочено' size="30px" iconMargin="0 5px 0 -5px">{AlarmIcon}</Icon>, "Течь трубы в задании - устранить", <CustomButton className="lowBtn" >Низкий</CustomButton>, "Бригада Номер 1", "Задания Номер 2"),
    createData('08.10.2019', "00007", <GreenCheckbox label='Выполнено' />, "Течь трубы в задании - устранить", <CustomButton className="averageBtn" >Средний</CustomButton>, "Бригада Номер 2", "Задания Номер 1"),
    createData('09.10.2019', "00012", <GreenCheckbox label='Выполнено' />, "Течь трубы в задании - устранить", <CustomButton className="lowBtn" >Низкий</CustomButton>, "Бригада Номер 1", "Задания Номер 1"),
  ];

  const initialState = {
    workList: rows,
  };

  const reducer = (state, action) => {
      
      switch (action.type) {
          case "addWork":
              return Object.assign({}, state, {
                workList: state.workList.concat(createData(...action.payload))
              })
          case "CLEAN":
              return Object.assign({}, state, {
                  removedCard: null,
              })
          case "CHANGE_VIS": 
              return Object.assign({}, state, {
                  isVisible: !state.isVisible,
              })
          case "CHANGE_SCREEN_MODE":
              return Object.assign({}, state, {
                  activeMode: action.payload,
              })
          case "DATA_UPDATE":
              return Object.assign({}, state, {
                  cardsData: {...initialState.cardsData, text: action.payload},
              })
          default:
              return state;
      }
  }
  
  return (
    <div className="App">
        <StateProvider initialState={initialState} reducer={reducer}>
            <LeftMenu />
            <Main />
        </StateProvider>
    </div>
  );
}

export default App;
