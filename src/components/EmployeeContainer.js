import React from "react"
import EmployeeList from './EmployeeList'
import Header from './Header'

class EmployeeContainer extends React.Component {

    state = {
        employees: [
            {
                id: 1,
                firstName: "Lusungu",
                middleName: "Emmanuel",
                lastName: "Chihana",
                isActive: true
            },
            {
                id: 2,
                firstName: "Shalom",
                middleName: "Luumuno",
                lastName: "Khatanga",
                isActive: false
            },
            {
                id: 3,
                firstName: "Toweya",
                middleName: "",
                lastName: "Chihana",
                isActive: true
            }
        ]
    };

    handleChange = id => {
        this.setState({
            todos: this.state.employees.map(employee => {
                if (employee.id === id) {
                    employee.isActive = !employee.isActive;
                }
                return employee;
            })
        });
    };

    render() {
        return (
            <div className="bg-blue-300 m-5 rounded p-5">
                <Header />
                <EmployeeList employees={this.state.employees} handleChangeProps={this.handleChange} />
            </div>
        )
    }
}
export default EmployeeContainer