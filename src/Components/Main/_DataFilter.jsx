import React from 'react';
import Icon from '../../Core/Icon';
import FilterListIcon from '@material-ui/icons/FilterList';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SortIcon from '@material-ui/icons/Sort';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const _DataFilter = () => {
    return (
        <div className='main-filter'>
            <div className='main-filter-content'>            
                <div><Icon text='Дополнительные фильтры' fontSize='12px' iconMargin="0 5px">{FilterListIcon}</Icon></div>
                <div><Icon text='Ремонтные персонал' fontSize='12px' iconMargin="0 5px">{PersonIcon}</Icon></div>
                <div><Icon text='Объекты обслуживание' fontSize='12px' iconMargin="0 5px">{HomeIcon}</Icon></div>
                <div><Icon text='Дата и срок обслуживания' fontSize='12px' iconMargin="0 5px">{DateRangeIcon}</Icon></div>
                <div><Icon text='Статус рабочего задания' fontSize='12px' iconMargin="0 5px" color='rgb(55, 132, 242)'>{CheckCircleOutlineIcon}</Icon></div>
                <div><Icon text='Приоритет выполнено' fontSize='12px' iconMargin="0 5px">{SortIcon}</Icon></div>
            </div>
        </div>
    )
}

export default _DataFilter;
