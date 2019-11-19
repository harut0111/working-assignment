import React from 'react';
import Icon from '../../Core/Icon';
import FilterListIcon from '@material-ui/icons/FilterList';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SortIcon from '@material-ui/icons/Sort';

const _DataFilter = () => {
    return (
        <div className='main-filter'>
            <div className='main-filter-content'>
                <div><Icon text='Дополнительные фильтры' fontSize='12px'>{FilterListIcon}</Icon></div>
                <div><Icon text='Ремонтные персонал' fontSize='12px'>{PersonIcon}</Icon></div>
                <div><Icon text='Объекты обслуживание' fontSize='12px'>{HomeIcon}</Icon></div>
                <div><Icon text='Дата и срок обслуживания' fontSize='12px'>{DateRangeIcon}</Icon></div>
                <div><Icon text='Приоритет выполнено' fontSize='12px'>{SortIcon}</Icon></div>
            </div>
        </div>
    )
}

export default _DataFilter;
