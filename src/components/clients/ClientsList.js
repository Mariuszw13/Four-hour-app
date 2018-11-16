import * as React from 'react';
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider/Divider";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";
import './ClientsList.css'


const incomePicker = (props) => {

    const clientsListItems = props.clients.map(client => {
        return (
            <div key={client.email}>
                <ListItem button={true}>
                    <ListItemText primary={client.firstName + ' ' + client.lastName} secondary={client.email}/>
                    <ListItemSecondaryAction>
                        <p style={{padding: 5, margin: 5}}>{client.ranking.toFixed(2)}</p>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
            </div>);
    });

    return (
        <div className="clientsList">
            <List component="nav">
                {clientsListItems}
            </List>
        </div>
    )
}

export default incomePicker