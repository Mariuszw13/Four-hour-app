import React from 'react';
import './Layout.css';
import AppBar from '../AppBar/AppBar'

const layout = (props) => {
    return (
        <div>
            <AppBar toggleDrawer={props.toggleDrawer} drawerOpen={props.drawerOpen}/>
            <div className="layout">
                {props.children}
            </div>
        </div>
    )
};

export default layout;