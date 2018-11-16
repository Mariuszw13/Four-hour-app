import React, { Component } from 'react';
import { connect } from "react-redux";
import firebaseInstance from "../../firebase";
import ClientsList from '../../components/clients/ClientsList';
import {fetchClients} from "../../store/action";

class SummaryPage extends Component {

    constructor() {
        super();
        this.clientsReference = firebaseInstance.firestore().collection('clients');
    }

    componentDidMount() {
        this.unsubscribe = this.clientsReference.onSnapshot(this.props.fetchClients);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <h2>Summary</h2>
                <ClientsList clients={this.props.clients}/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        clients: state.client.clients
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchClients: (querySnapshot) => dispatch(fetchClients(querySnapshot))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SummaryPage);