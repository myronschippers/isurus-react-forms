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

    // One event handler for all input field change events
    handlerChangeOfAll(event, dataKey) {
        const fieldValue = event.target.value;
        // $(this).data().type
        // const dataKey = event.target.dataset.type;

        this.setState({
            employee: {
                ...this.state.employee,
                [dataKey]: fieldValue,
            }
        })
    }

    handleClickAddEmployee = (event) => {
        console.log(this.state.employee.name);
        this.setState({
            employee: {
                name: '',
                occupation: '',
            },
            employeesList: [
                ...this.state.employeesList,
                this.state.employee
            ]
        });
    }

    render() {
        let message = null;
        // let employeeListElements = [];
        let employeeTableClasses = 'show';
        
        if (this.state.employeesList.length === 0) {
            message = 'There are no employees';
            employeeTableClasses = 'hide';
        }

        // for (let i = 0; i < this.state.employeesList.length; i++) {
        //     const employee = this.state.employeesList[i];
        //     employeeListElements.push(<tr key={i}>
        //             <td>{employee.name}</td>
        //             <td>{employee.occupation}</td>
        //     </tr>);
        // }

        // this.state.employeesList.forEach((employee, index) => {
        //     employeeListElements.push(
        //         <tr key={index}>
        //             <td>{employee.name}</td>
        //             <td>{employee.occupation}</td>
        //         </tr>
        //     );
        // });   
        
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
                        {/* {
                            this.state.employeesList.map((employee, index) => {
                                return <tr key={index}>
                                             <td>{employee.name}</td>
                                             <td>{employee.occupation}</td>
                                        </tr>
                            })
                        } */}
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
