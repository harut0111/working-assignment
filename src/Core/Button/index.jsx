import React from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';





import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 30,
    padding: '0 20px',
    minWidth: 112,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || 'class names'}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);


// const useStyles = makeStyles(theme => ({
//     button: {
//       margin: theme.spacing(1),
//       background: blue,
//     },
//     input: {
//       display: 'none',
//     },
//   }));

// const ButtonWrapper = props => {

    
//     const classes = useStyles();

//     const { color, children } = props;




//     return (
//         <div>
//             <Button variant="contained" color={color} className={classes.button} >
//                 {children}
//             </Button>
//         </div>
//     )
// }

// ButtonWrapper.propTypes = {
//     optionalObjectWithStrictShape: PropTypes.exact ({
//         children: PropTypes.object,
//         color: PropTypes.string,
//         value: PropTypes.value,

//     })
// };


// export default ButtonWrapper;
