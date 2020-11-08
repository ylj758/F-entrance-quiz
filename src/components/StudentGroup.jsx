import React, {Component} from 'react'
import './Students.css';

class StudentGroup extends Component {
    render() {
        return (
            <ul className="stu-list">
                {
                    this.props.students.map((student) => {
                        return <li key={student.id}>
                            {student.id}. {student.name}
                        </li>
                    })
                }
            </ul>
        );
    }
}

export default StudentGroup;