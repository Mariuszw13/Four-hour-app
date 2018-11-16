import IconButton from "@material-ui/core/IconButton/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import * as React from 'react';

const menuButton = (props) => {

    return (
        <div>
            <IconButton color="inherit" aria-label="Menu" onClick={props.onClick}>
                <MenuIcon />
            </IconButton>
        </div>
    );
}

export default menuButton;