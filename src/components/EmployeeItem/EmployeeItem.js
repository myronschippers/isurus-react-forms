import React, { Component } from 'react';
import Currency from 'react-currency-formatter';

class EmployeeItem extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.occupation}</td>
                <td>
                    <Currency
                        quantity={this.props.employee.salary}
                        currency="USD"
                    />
                </td>
            </tr>
        );
    }
}

export default EmployeeItem;
