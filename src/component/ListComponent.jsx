import React, { Component } from 'react'
import AppService from "../service/AppService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEdit } from '@fortawesome/free-solid-svg-icons'
import "../component/list.css"
class ListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: [],
            message: null
        }
        this.deleteStudent = this.deleteStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.reloadStudentList = this.reloadStudentList.bind(this);
    }

    componentDidMount() {
        this.reloadStudentList();
    }

    reloadStudentList() {
        AppService.fetchStudents()
            .then((res) => {
                this.setState({students: res.data.result})
            });
    }

    deleteStudent(studentId) {
        AppService.deleteStudent(studentId)
           .then(res => {
               this.setState({message : 'Student deleted successfully.'});
               this.setState({students: this.state.students.filter(student => student.id !== studentId)});
           })

    }

    editStudent(id) {
        window.localStorage.setItem("studentId", id);
        this.props.history.push('/edit-student');
    }

    addStudent() {
        window.localStorage.removeItem("studentId");
        this.props.history.push('/add-student');
    }

    render() {
        return (
            <div>
                <h2 className="text-center" color="blue">Student Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addStudent()}> Add student</button>
                <table id='students'>
                    <thead>
                        <tr>
                            
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserName</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(
                                student =>
                                    <tr key={student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.username}</td>
                                        <td>{student.age}</td>
                                        <td>{student.gender}</td>
                                        <td>{student.percentage}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteStudent(student.id)}> <FontAwesomeIcon icon={faTrash} color="red"/></button>
                                            <button className="btn btn-success" onClick={() => this.editStudent(student.id)} style={{marginLeft: '20px'}}> <FontAwesomeIcon icon={faEdit}/></button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListComponent;
