import React from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonWrapper = props => {
    

    const { color, children } = props

    return (
        <div>
            <Button variant="contained" color={color}>
                {children}
            </Button>
        </div>
    )
}

ButtonWrapper.propTypes = {
    optionalObjectWithStrictShape: PropTypes.exact ({
        children: PropTypes.object,
        color: PropTypes.string,
        value: PropTypes.value,

    })
};


export default ButtonWrapper;
