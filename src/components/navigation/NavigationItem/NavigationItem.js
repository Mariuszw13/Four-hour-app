import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import * as React from 'react';
import './NavigationItem.css';

const navigationItem = (props) => {

    return (
        <div className="navigationItem">
            <MenuItem><a href={props.path}>{props.text}</a></MenuItem>
        </div>
    );
};

export default navigationItem;
