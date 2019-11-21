
import React from 'react'
import PropTypes from 'prop-types'

const Icon = props => {

    // console.log(props)
    
    const {color, text, className, size, backgroundColor, fontSize, iconMargin} = props;

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        color: color,
        backgroundColor: backgroundColor
    }

    const iconStyle = {
        color: color,
        fontSize: size,
        margin: iconMargin,
    }

    const spanStyle = {
        color: 'inherit',
        fontSize: fontSize
    }


    return (
        <div className={className} style={containerStyle}>
            <div ><props.children style={iconStyle}/></div>
            <span style={spanStyle}>{text}</span> 
        </div>
    )
}

Icon.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    size: PropTypes.string,
    // children: PropTypes.object,
    fontSize: PropTypes.string,
    iconMargin: PropTypes.string,
}

export default Icon;

