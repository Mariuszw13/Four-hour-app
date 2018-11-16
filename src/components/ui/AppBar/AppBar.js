import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import * as React from 'react';
import DrawerButton from '../../navigation/MenuButton/MenuButton';
import Drawer from "../../navigation/Drawer/Drawer";

const appBar = (props) => {

    return (
        <div>
            <AppBar position="static" style={{flex: 1}}>
                <Toolbar>
                    <DrawerButton onClick={props.toggleDrawer}/>
                    <Drawer open={props.drawerOpen} toggleDrawer={props.toggleDrawer} />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default appBar;