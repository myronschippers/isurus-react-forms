import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
    state = {
        employee: {
            name: '',
            occupation: '',    
        },
        employeesList: [],
    };

    /**
     * Handles all input change events to track what the
     * user has been entering in the form fields.
     * @param {object} event
     * @param {string} dataKey
     */
    handlerChangeOfAll(event, dataKey) {
        const fieldValue = event.target.value;

        this.setState({
            employee: {
                ...this.state.employee,
                [dataKey]: fieldValue,
            }
        })
    }

    /**
     * Handles the click event of the Add Employee button.
     * When clicked we are adding the employee data entered
     * by the user to the employee list as a new employee
     * object.
     * @param {object} event
     */
    handleClickAddEmployee = (event) => {
        console.log(this.state.employee.name);
        this.setState({
            employee: {
                name: '',
                occupation: '',
            },
            employeesList: [
                1, 2, 3,
                this.state.employee
            ]
        });
    }

    /**
     * React component's render method. Called every time
     * the state is changed.
     * @returns {JSX} - view markup
     */
    render() {
        let message = null;
        let employeeTableClasses = 'show';
        
        if (this.state.employeesList.length === 0) {
            message = 'There are no employees';
            employeeTableClasses = 'hide';
        }
        
        const employeeListElements = this.state.employeesList.map((employee, index) => {
            return (<tr key={index}>
                         <td>{employee.name}</td>
                         <td>{employee.occupation}</td>
                    </tr>);
        });

        return (
            <div>
                <Header title="React Forms" />

                <div className="container">
                    <input
                        placeholder="Name"
                        onChange={(event) => this.handlerChangeOfAll(event, 'name')}
                        value={this.state.employee.name}
                    />
                    <input
                        placeholder="Occupation"
                        onChange={(event) => this.handlerChangeOfAll(event, 'occupation')}
                        value={this.state.employee.occupation}
                    />
                    <button onClick={this.handleClickAddEmployee}>Add Employee</button>
                    <p>{this.state.employee.name} is a {this.state.employee.occupation}</p>
                </div>

                <div className="container">
                    <h3>Employees</h3>
                    <table className={employeeTableClasses}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Occupation</th>
                            </tr>
                        </thead>
                        <tbody>
                        {employeeListElements}
                        </tbody>
                    </table>
                    {message}
                </div>
            </div>
        );
    }
}

export default App;
