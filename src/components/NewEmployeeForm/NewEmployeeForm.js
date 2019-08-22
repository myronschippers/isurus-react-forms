import React, { Component } from 'react';
import LiveEmployee from '../LiveEmployee/LiveEmployee';

class NewEmployeeForm extends Component {
    state = {
        employee: {
            name: '',
            occupation: '',    
        },
    }

    /**
     * Handles all input change events to track what the
     * user has been entering in the form fields.
     * @param {object} event
     * @param {string} dataKey
     */
    handlerChangeOfAll(event, dataKey) {
        const fieldValue = event.target.value;
        // this.props.employeeCallback(fieldValue, dataKey);

        this.setState({
            employee: {
                ...this.state.employee,
                [dataKey]: fieldValue,
            }
        });
    }

    /**
     * Handles the click event of the Add Employee button.
     * When clicked we are adding the employee data entered
     * by the user to the employee list as a new employee
     * object.
     * @param {object} event
     */
    handleClickAddEmployee = (event) => {
        // console.log(this.props.employee.name);

        this.props.listCallback({
            ...this.state.employee,
            salary: 50000,
        });
        this.setState({
            employee: {
                name: '',
                occupation: '',
            }
        });
    }

    render() {
        return (
            <div>
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
                </div>
                <LiveEmployee employee={this.state.employee} />
            </div>
        );
    }
}

export default NewEmployeeForm;