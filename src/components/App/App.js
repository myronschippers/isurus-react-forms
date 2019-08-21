import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends Component {
    state = {
        employee: {
            name: '',
            occupation: '',    
        },
    };

    render() {
        return (
            <div>
                <Header />

                <div className="container">
                    <p>{this.state.employee.name} is a {this.state.employee.occupation}</p>
                </div>
            </div>
        );
    }
}

export default App;
