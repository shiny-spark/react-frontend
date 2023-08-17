import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) })
        });

    }

    editEmployee(id) {
        this.props.navigate(`/update-employee/${id}`);
    }

    viewEmployee(id) {
        this.props.navigate(`/view-employee/${id}`);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data })
        });
    }

    addEmployee() {
        this.props.navigate('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>

                <button className='btn btn-primary mb-2' onClick={this.addEmployee}>Add Employee</button>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <button onClick={() => { this.editEmployee(employee.id) }} className='btn btn-info'>Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => { this.deleteEmployee(employee.id) }} className='btn btn-danger'>Delete</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => { this.viewEmployee(employee.id) }} className='btn btn-info'>View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default function (props) {
    const navigate = useNavigate();
    return <ListEmployeeComponent {...props} navigate={navigate} />;
}