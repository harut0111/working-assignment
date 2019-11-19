import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import Icon from '../../Core/Icon';
import CustomBtn from '../../Core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const _AddingWork = () => {
    return (
        <div className='main-addingWork'>
            <div className='main-addingWork-content'>
                <div>
                    <Icon backgroundColor='blue' color='#fff'>{FormatListBulletedIcon}</Icon>
                    <Icon color='#fff'>{AccountTreeIcon}</Icon>
                    <Icon color='#fff'>{DateRangeIcon}</Icon>
                </div>
                <div className='searchBar'><Icon>{SearchIcon}</Icon><input placeholder='Поиск...' type='text'/></div>
                <div>найдены 5 рабочий задание</div>
                <div><CustomBtn className='addingWorkBtn'><AddCircleIcon />Новое рабочее задание</CustomBtn></div>
            </div>
        </div>
    )
}

export default _AddingWork;
