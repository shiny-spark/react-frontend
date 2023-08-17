import React, { Component } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            employee: {}
        }
    }


    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        });
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'> View Employee Page </h3>
                    <div className='card-body'>
                        <div className='row'>
                            <div>First Name: {this.state.employee.firstName}</div>
                        </div>
                        <div className='row'>
                            <div>Last Name: {this.state.employee.lastName}</div>
                        </div>
                        <div className='row'>
                            <div>Email ID: {this.state.employee.emailId}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default function (props) {
    const navigate = useNavigate();
    const { id } = useParams();
    return <ViewEmployeeComponent {...props} navigate={navigate} id={id} />;
}