import * as React from 'react';
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import * as IncomeSource from '../../../constants/IncomeSource';


const incomePicker = (props) => {

    return (
        <div style={{marginTop: 20, height: 50, width: 300}}>
            <FormControl>
                <InputLabel style={{width: 300}}>Source of income</InputLabel>
                <Select
                    style={{width: 300}}
                    value={props.value}
                    onChange={props.handleChange}
                    multiple
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={IncomeSource.WORK}>Work</MenuItem>
                    <MenuItem value={IncomeSource.INVESTMENTS}>Investments</MenuItem>
                    <MenuItem value={IncomeSource.OWN_COMPANY}>Own company</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default incomePicker