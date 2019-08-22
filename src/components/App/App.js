import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
    state = {
        employee: {
            name: 'Jim',
            occupation: 'Software Developer',    
        },
        employeesList: [],
    };

    // handlerChangeName = (event) => {
    //     const fieldValue = event.target.value;

    //     this.setState({
    //         employee: {
    //             ...this.state.employee,
    //             name: fieldValue,
    //         }
    //     })
    // }

    // handlerChangeOccupation = (event) => {
    //     const fieldValue = event.target.value;

    //     this.setState({
    //         employee: {
    //             ...this.state.employee,
    //             occupation: fieldValue,
    //         }
    //     })
    // }

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

    render() {
        return (
            <div>
                <Header title="React Forms" />

                <div className="container">
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(event) => this.handlerChangeOfAll(event, 'name')}
                    />
                    <input
                        type="text"
                        placeholder="Occupation"
                        onChange={(event) => this.handlerChangeOfAll(event, 'occupation')}
                    />
                    <p>{this.state.employee.name} is a {this.state.employee.occupation}</p>
                </div>
            </div>
        );
    }
}

export default App;
