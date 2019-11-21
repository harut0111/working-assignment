import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Icon from '../../Core/Icon';
import CustomBtn from '../../Core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { FaSitemap } from 'react-icons/fa';
import { useStateValue } from '../../State/index';
import CustomButton from '../../Core/Button';

import { TODO_TYPES } from '../../configs/constants';


const _AddingWork = () => {

    // eslint-disable-next-line no-unused-vars
    const [{ workList }, dispatchWorkList] = useStateValue();

    const initialWorkState = ['06.10.2019', "00006",  TODO_TYPES.NOT_FINISHED, "Течь трубы в задании - устранить", <CustomButton className="higherBtn" >Высший</CustomButton>, 'Бригада Номер 2', "Задания Номер 2"];
    const handleOnClick = () =>  dispatchWorkList({type: 'addWork', payload: initialWorkState});

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
