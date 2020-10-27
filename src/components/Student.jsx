import React, {Component} from 'react'
import '@babel/polyfill';
import './Student.css';

class Student extends Component {
  state = {
    students: {},
    inputName: ''
  };

  async componentDidMount() {
    const result = await fetch("http://localhost:8080/students");
    const data = await result.json();
    this.setState({
      students: data
    });
    console.log(data)
  }

  handleAddStudent(){

  }

  async handleConfirmAddStudent(){
    const response = await fetch("http://localhost:8080/student/add",{
      method:"POST",
      body:this.state.inputName
    })
    const data = await response.json();
    this.setState({
      students: data,
    });
  }

  handleCancelAddStudent(){
    this.setState({
      inputName: ""
    });
  }

  handleFileChange = (event) => {
    this.setState({
      inputName: event.target.value,
    })
  };


render()
{
  return (
    <div className="order">
      <div>
        <h2>学员列表</h2>
        {
          Object.values(this.state.students).map((student, index) => {
            return <tr key={index}>
              <label>{student.id}. </label>
              <td>{student.name}</td>
             </tr>
          })
        }
        {/*<button type="button" onClick={(e) => this.handleAddStudent( e)}>添加</button>*/}
        <div>
          <input
              type="text"
              onChange={(e) => this.handleFileChange(e)}
              placeholder="请输入要添加的姓名"
          />
          <button type="button" onClick={(e) => this.handleConfirmAddStudent( e)}>确认添加</button>
          {/*<button type="button" onClick={(e) => this.handleCancelAddStudent( e)}>取消</button>*/}
        </div>
      </div>

    </div>
  );

}
}

export default Student;