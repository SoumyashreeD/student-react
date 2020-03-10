import axios from 'axios';

const STUDENT_API_BASE_URL = 'http://localhost:8080/students';

class AppService {

    fetchStudents() {
        return axios.get(STUDENT_API_BASE_URL);
    }

    fetchStudentById(studentId) {
        return axios.get(STUDENT_API_BASE_URL + '/' + studentId);
    }

    deleteStudent(studentId) {
        return axios.delete(STUDENT_API_BASE_URL + '/' + studentId);
    }

    addStudent(student) {
        return axios.post(""+STUDENT_API_BASE_URL, student);
    }

    editStudent(student) {
        return axios.put(STUDENT_API_BASE_URL + '/' + student.id, student);
    }

}

export default new AppService();