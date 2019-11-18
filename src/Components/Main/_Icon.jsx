
import React from 'react'
import PropTypes from 'prop-types'

const _Icon = props => {
    
    const {color, text, className, size} = props;

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        color: color,
    }

    const iconStyle = {
        color: color,
        fontSize: size,
    }

    const spanStyle = {
        marginLeft: '10px',
        color: '#000'
    }


    return (
        <div className={className} style={containerStyle}>
            <div ><props.children style={iconStyle}/></div>
            <span style={spanStyle}>{text}</span> 
        </div>
    )
}

_Icon.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.func
}

export default _Icon;

