import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Icon from '../../Core/Icon';
import CustomBtn from '../../Core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { FaSitemap } from 'react-icons/fa';

const _AddingWork = () => {
    return (
        <div className='main-addingWork'>
            <div className='main-addingWork-content'>
                <div>
                    <Icon backgroundColor='blue' color='#fff' size='37px' >{FormatListBulletedIcon}</Icon>
                    <Icon color='#fff'  size='37px' >{FaSitemap}</Icon>
                    <Icon color='#fff'  size='37px' >{DateRangeIcon}</Icon>
                </div>
                <div className='searchBar'><Icon>{SearchIcon}</Icon><input placeholder='Поиск...' type='text'/></div>
                <div>найдены 5 рабочий задание</div>
                <div><CustomBtn className='addingWorkBtn'><AddCircleIcon />Новое рабочее задание</CustomBtn></div>
            </div>
        </div>
    )
}

export default _AddingWork;
