import React, {Component} from 'react'
import {Modal, Button} from 'antd';
// TODO GTB-4: - 这里不用独立引入@babel/polyfill，如有需要请修改 .babelrc文件
// import '@babel/polyfill';
import './Students.css';
import 'antd/dist/antd.css';

// TODO GTB-4: - 这里组件命名是应该单数的Student吗？
class Students extends Component {
    state = {
        students: [],
        student: {name: ""},
        visible: false
    };

    async componentDidMount() {
        const result = await fetch("http://localhost:8080/students");
        const data = await result.json();
        this.setState({
            students: data
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
            body:JSON.stringify(this.state.student)
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

// TODO GTB-4: - 注意缩进
    render() {
        return (
            // TODO GTB-3: - 加强语义化标签的使用
            <div className="order">
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

            </div>
        );

    }
}

export default Students;