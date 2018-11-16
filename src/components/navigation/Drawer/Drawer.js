import Drawer from "@material-ui/core/Drawer/Drawer";
import * as React from 'react';
import DrawerItems from '../DrawerItems/DrawerItems'

const drawer = (props) => {

    return (
        <div className="Drawer">
            <Drawer open={props.open} onClose={props.toggleDrawer}>
                <DrawerItems/>
            </Drawer>
        </div>
    );
};

export default drawer;
