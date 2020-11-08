import React, {Component} from 'react'
import {Modal, Button, Card} from 'antd';
import StudentGroup from "./StudentGroup";
import './Students.css';
import 'antd/dist/antd.css';

class Students extends Component {
    state = {
        students: [],
        student: {name: ""},
        visible: false,
        groups: []
    };

    async componentDidMount() {
        const stuResult = await fetch("http://localhost:8080/students");
        const stuData = await stuResult.json();
        const groResult = await fetch("http://localhost:8080/groups");
        const groData = await groResult.json();
        this.setState({
            students: stuData,
            groups: groData
        });
    }

    handleAddStudent = async () => {
        this.setState({
            visible: false,
        });
        await fetch("http://localhost:8080/student", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.student)
        })
        await location.reload()
    }


    // TODO GTB-4: - 同理，不用双向绑定，这个方法也是冗余的，且注意命名，怎么会是File？
    handleNameChange = (event) => {
        this.setState({
            student: {name: event.target.value},
        })
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };

    handleGroupStudents = async () => {
        await fetch("http://localhost:8080/students/groups")
        await location.reload()
    }

    render() {
        return (
            // TODO GTB-3: - 加强语义化标签的使用
            <main className="main">
                <section className="group-sec">
                    <header className="group-header">
                        <h2>分组列表</h2>
                        <Button id="group-btn" onClick={this.handleGroupStudents}>分组学员</Button>
                    </header>
                    <section className="group-body">
                        {
                            this.state.groups.map((group) => {
                                return <section key={group.id}>
                                    <p>{group.name}</p>
                                    <StudentGroup students={group.students}/>
                                </section>
                            })
                        }
                    </section>
                </section>
                <section>
                    <h2>学员列表</h2>
                    <ul className="stu-list">
                        {
                            this.state.students.map((student) => {
                                return <li key={student.id}>
                                    {student.id}. {student.name}
                                </li>
                            })
                        }
                        <li id="add-student">
                            <button type="primary" className="add-student-btn" onClick={this.showModal}>
                                + 添加学员
                            </button>
                            <Modal
                                title="添加学员"
                                visible={this.state.visible}
                                onOk={this.handleAddStudent}
                                onCancel={this.handleCancel}
                                okText="确认"
                                cancelText="取消"
                            >
                                <input
                                    type="text"
                                    // TODO GTB-4: - 不用双向绑定，这里onChange可以改成onKeyUp/onKeyDown
                                    onChange={this.handleNameChange}
                                    placeholder="请输入要添加的姓名"
                                />
                            </Modal>
                        </li>
                    </ul>
                </section>
            </main>
        );

    }
}

export default Students;