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
            gender:'',
            percentage: '',
            message: null
        }
        this.saveStudent = this.saveStudent.bind(this);
    }

    saveStudent = (e) => {
        e.preventDefault();
        let student= {username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age,gender: this.state.gender, percentage: this.state.percentage};
        AppService.addStudent(student)
            .then(res => {
                this.setState({message : 'Student added successfully.'});
                this.props.history.push('/students');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });
        onRadioChange = (e) => {
            this.setState({
              gender: e.target.value
            });
          }

    render() {
        return(
            <div>
                <h2 className="text-center">Add Student</h2>
                <form>
                <div className="form-group">
                    <label>User Name:</label><br></br>
                    <input type="text" placeholder="username" name="username" className="form-control" value={this.state.username} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password:</label><br></br>
                    <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>First Name:</label><br></br>
                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Last Name:</label><br></br>
                    <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Age:</label><br></br>
                    <input type="number" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.onChange}/>
                 </div>
                 <div check>
          <input
            type="radio"
            value="male" // this is te value which will be picked up after radio button change
            checked={this.state.gender === "male"} // when this is true it show the male radio button in checked 
            onChange={this.onRadioChange} // whenever it changes from checked to uncheck or via-versa it goes to the handleRadioChange function
          />
          <span
           style={{ marginLeft: "5px" }} // inline style in reactjs 
          >Male</span>
        </div>
        <div check>
          <input
            type="radio"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.onRadioChange}
          />
          <span style={{ marginLeft: "5px" }}>Female</span>
          <br></br>
        </div>
         

                <div className="form-group">
                    <label>Percentage:</label><br></br>
                    <input type="number" placeholder="percentage" name="percentage" className="form-control" value={this.state.percentage} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveStudent} >Save</button>
            
            </form>
    </div>
        );
    }
}

export default AddComponent;
