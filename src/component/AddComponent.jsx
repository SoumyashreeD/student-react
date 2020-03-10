import React, { Component } from 'react'
import AppService from "../service/AppService";

class AddComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            percentage: '',
            message: null
        }
        this.saveStudent = this.saveStudent.bind(this);
    }

    saveStudent = (e) => {
        e.preventDefault();
        let student= {username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, percentage: this.state.percentage};
        AppService.addStudent(student)
            .then(res => {
                this.setState({message : 'Student added successfully.'});
                this.props.history.push('/students');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Student</h2>
                <form>
                <div className="form-group">
                    <label>User Name:</label>
                    <input type="text" placeholder="username" name="username" className="form-control" value={this.state.username} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>First Name:</label>
                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.onChange}/>
                
                
                </div>
                

                <div className="form-group">
                    <label>Percentage:</label>
                    <input type="number" placeholder="percentage" name="percentage" className="form-control" value={this.state.percentage} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddComponent;