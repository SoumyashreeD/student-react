import React, { Component } from 'react'
import AppService from "../service/AppService";

class EditComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            username:'',
            firstName: '',
            lastName: '',
            age: '',
            percentage: '',
        }
        this.saveStudent = this.saveStudent.bind(this);
        this.loadStudent = this.loadStudent.bind(this);
    }

    componentDidMount() {
        this.loadStudent();
    }

    loadStudent() {
        AppService.fetchStudentById(window.localStorage.getItem("studentId"))
            .then((res) => {
                let student= res.data.result;
                this.setState({
                id: student.id,
                username: student.username,
                firstName: student.firstName,
                lastName: student.lastName,
                age: student.age,
                percentage: student.percentage,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

        saveStudent = (e) => {
        e.preventDefault();
        let student = {id: this.state.id, usename: this.state.username,password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, percenatge: this.state.percentage};
        AppService.editStudent(student)
            .then(res => {
                this.setState({message : 'Student added successfully.'});
                this.props.history.push('/students');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Student</h2>
                <form>

                    <div className="form-group">
                        <label>User Name:</label>
                        <input type="text" placeholder="username" name="username" className="form-control" readonly="true" defaultValue={this.state.username}/>
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
                        <label>Percenatge:</label>
                        <input type="number" placeholder="percentage" name="percentage" className="form-control" value={this.state.percentage} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditComponent;