import React, { Component } from 'react';
import EmployeeItem from '../EmployeeItem/EmployeeItem';

class EmployeeList extends Component {

    render() {
        let message = null;
        let employeeTableClasses = 'cleanTable show';
        
        if (this.props.employeesList.length === 0) {
            message = 'There are no employees';
            employeeTableClasses = 'cleanTable hide';
        }
        
        const employeeListElements = this.props.employeesList.map((employee, index) => {
            return (<EmployeeItem key={index} employee={employee} />);
        });

        return (
            <div className="container">
                <h3>Employees</h3>
                <table className={employeeTableClasses} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Occupation</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                    {employeeListElements}
                    </tbody>
                </table>
                {message}
            </div>
        );
    }
}

export default EmployeeList;
