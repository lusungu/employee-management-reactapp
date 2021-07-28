import React, { Component } from 'react'

class Employee extends Component {
    render() {
        return (
            <div>
                
                <li> 
                    <input type="checkbox" 
                        checked={this.props.employee.isActive}          
                        onChange={() => this.props.handleChangeProps(this.props.employee.id)}
                        className="m-1"/>
                    
                    {this.props.employee.firstName} {this.props.employee.middleName} {this.props.employee.lastName}
                </li>
            </div> 
        )
    }
}

export default Employee
