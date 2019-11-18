import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CustomCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function CheckboxLabels(props) {

  const [checked, setChecked] = React.useState(true)

  return (
    <FormGroup row>
        <FormControlLabel
            control={
            <CustomCheckbox
                checked={checked}
                onChange={event => setChecked(event.target.checked)}
                value="checkedG"
            />
            }
            label={props.label}
        />
    </FormGroup>
  );
}