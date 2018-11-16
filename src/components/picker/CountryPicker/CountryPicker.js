import * as React from 'react';
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import * as Countries from '../../../constants/Countries';


const countryPicker = (props) => {

    return (
        <div style={{marginTop: 20, height: 50, width: 300}}>
            <FormControl>
                <InputLabel style={{width: 300}}>Country of residence</InputLabel>
                <Select
                    style={{width: 300}}
                    value={props.value}
                    onChange={props.handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={Countries.FRANCE}>France</MenuItem>
                    <MenuItem value={Countries.GERMANY}>Germany</MenuItem>
                    <MenuItem value={Countries.POLAND}>Poland</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default countryPicker