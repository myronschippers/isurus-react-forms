import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import NewEmployeeForm from '../NewEmployeeForm/NewEmployeeForm';
import EmployeeList from '../EmployeeList/EmployeeList';

class App extends Component {
    state = {
        // employee: {
        //     name: '',
        //     occupation: '',    
        // },
        employeesList: [
            { name: 'Timmy', occupation: 'Manager', salary: 0 },
            { name: 'Doug', occupation: 'Nuisance', salary: 0 }
        ],
    };

    // updateEmployeeState = (employeeDataValue, employeeDataKey) => {
    //     this.setState({
    //         employee: {
    //             ...this.state.employee,
    //             [employeeDataKey]: employeeDataValue
    //         }
    //     })
    // }

    updateEmployeeList = (employeeData) => {
        console.log('list update: ', employeeData);
        this.setState({
            employeesList: [
                ...this.state.employeesList,
                employeeData,
            ]
        })
    }

    /**
     * React component's render method. Called every time
     * the state is changed.
     * @returns {JSX} - view markup
     */
    render() {

        return (
            <div>
                <Header title="React Forms" />

                <NewEmployeeForm
                    employee={this.state.employee}
                    employeeCallback={this.updateEmployeeState}
                    listCallback={this.updateEmployeeList}
                />

                <EmployeeList employeesList={this.state.employeesList} />
            </div>
        );
    }
}

export default App;
