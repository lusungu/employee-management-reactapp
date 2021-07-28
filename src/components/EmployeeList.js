import React, { Component } from 'react'
import Employee  from './Employee'

class EmployeeList extends Component {
    render() {
        return (
            <ul className="list-outside md:list-inside list-none md:list-none p-3">
                {this.props.employees.map(employee => (
                    //<li key={employee.id}>{employee.firstName} {employee.middleName} {employee.lastName}</li>
                    <Employee 
                        key={employee.id} 
                        employee={employee}
                        handleChangeProps={this.props.handleChangeProps}
                         />
                ))}
            </ul>
        )
    }
}

export default EmployeeList
