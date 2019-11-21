import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Icon from '../../Core/Icon';
import CustomBtn from '../../Core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { FaSitemap } from 'react-icons/fa';
import { useStateValue } from '../../State/index';

import GreenCheckbox from '../../Core/GreenCheckbox'
import CustomButton from '../../Core/Button';


const _AddingWork = () => {


    // eslint-disable-next-line no-unused-vars
    const [{ workList }, dispatchWorkList] = useStateValue();
    // console.log('workList', workList);

    const initialWorkState = ['05.10.2019', "00007", <GreenCheckbox label='Выполнено' />, "Вибрация мотор", <CustomButton className='averageBtn' >Средний</CustomButton>, "Бригада Номер 1", "Задания Номер 1"];

    
    const handleOnClick = () => {
        dispatchWorkList({type: 'addWork', payload: initialWorkState})
    }
    return (
        <div className='main-addingWork'>
            <div className='main-addingWork-content'>
                <div>
                    <Icon backgroundColor='rgb(49, 139, 254)' color='#fff' size='30px' >{FormatListBulletedIcon}</Icon>
                    <Icon color='#fff'  size='30px' >{FaSitemap}</Icon>
                    <Icon color='#fff'  size='30px' >{DateRangeIcon}</Icon>
                </div>
                <div className='searchBar'><Icon>{SearchIcon}</Icon><input placeholder='Поиск...' type='text'/></div>
                <div>найдены 5 рабочий задание</div>
                <div onClick={handleOnClick}><CustomBtn className='addingWorkBtn'><AddCircleIcon />Новое рабочее задание</CustomBtn></div>
            </div>
        </div>
    )
}

export default _AddingWork;
