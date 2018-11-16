import * as React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem'

const drawerItems = () => {

    return (
        <div>
            <NavigationItem path="/" text="Summary"/>
            <NavigationItem path="/client/add" text="Add client"/>
        </div>
    );
};

export default drawerItems;
