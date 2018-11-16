import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from "@material-ui/core/Button/Button";
import firebaseInstance from '../../firebase';
import TextField from "@material-ui/core/TextField/TextField";
import GenderPicker from '../../components/picker/GenderPicker/GenderPicker';
import IncomePicker from '../../components/picker/IncomePicker/IncomePicker';
import CountryPicker from '../../components/picker/CountryPicker/CountryPicker';
import {computeRanking} from "../../utils/RankingEngine";

class AddClientPage extends Component {

    constructor() {
        super();
        this.clientsReference = firebaseInstance.firestore().collection('clients');
    }

    state = {
        addButtonDisabled: true,
        firstName: '',
        lastName: '',
        age: null,
        country: '',
        salary: null,
        phone: null,
        email: '',
        sex: 'female',
        income: [],
        info: ''
    }


    render() {
        let incomePicker = <div/>;
        if (this.state.salary > 10000) {
            incomePicker =
                <IncomePicker value={this.state.income} handleChange={this.onIncomePickerValueChangeHandler}/>;
        }

        return (
            <div style={{margin: 10}}>
                <div>
                    <h2>Add client</h2>
                </div>
                <div>
                    <TextField label="First name" onChange={this.handleTextFieldChange('firstName')}/>
                </div>
                <div>
                    <TextField label="Last name" required onChange={this.handleTextFieldChange('lastName')}/>
                </div>
                <div>
                    <TextField label="Age" required onChange={this.handleTextFieldChange('age')}/>
                </div>
                <GenderPicker value={this.state.sex} handleChange={this.onGenderPickerValueChangeHandler}/>
                <CountryPicker value={this.state.country} handleChange={this.onCountryPickerValueChangeHandler}/>
                <div>
                    <TextField label="Monthly salary" required onChange={this.handleTextFieldChange('salary')}/>
                </div>
                {incomePicker}
                <div>
                    <TextField label="Phone number" onChange={this.handleTextFieldChange('phone')}/>
                </div>
                <div>
                    <TextField label="E-mail" required onChange={this.handleTextFieldChange('email')}/>
                </div>
                <div>
                    <Button onClick={this.onAddClientClickHandler}
                            style={{marginTop: 20}}
                            color="primary"
                            disabled={this.state.addButtonDisabled}
                            variant="contained">
                        Add client
                    </Button>
                </div>
                <p>{this.state.info}</p>
            </div>
        );
    }

    handleTextFieldChange = name => event => {
        this.setState({
            [name]: event.target.value,
            info: ''
        });
        this.checkAllRequiredFields();
    };

    checkAllRequiredFields = () => {
        if (!this.isFieldEmpty(this.state.lastName) && !this.isFieldEmpty(this.state.email)
            && !this.isFieldEmpty(this.state.country) && this.state.age && this.state.salary) {
            this.setState({addButtonDisabled: false});
        }
    }

    isFieldEmpty = (field) => {
        return field === null || field === '';
    }

    onAddClientClickHandler = () => {
        const client = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            sex: this.state.sex,
            age: parseInt(this.state.age),
            country: this.state.country,
            monthlySalary: parseFloat(this.state.salary),
            phone: this.state.phone,
            email: this.state.email,
            sourcesOfIncome: this.state.income,
            ranking: 0,
            blacklisted: false
        };

        client.ranking = computeRanking(client);

        this.clientsReference.add(client)
            .then(docRef => {
                this.setState({info: 'Client successfully added'});
            })
            .catch(error => {
                this.setState({info: 'Failed to add client'});
            })
    }

    onGenderPickerValueChangeHandler = (event) => {
        this.setState({ sex: event.target.value });
    }

    onIncomePickerValueChangeHandler = (event) => {
            this.setState({ income: event.target.value });
    }

    onCountryPickerValueChangeHandler = (event) => {
        this.setState({ country: event.target.value });
    }

}

export default AddClientPage;