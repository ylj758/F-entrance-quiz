import React, {Component} from 'react'
// TODO GTB-4: - 这里不用独立引入@babel/polyfill，如有需要请修改 .babelrc文件
import '@babel/polyfill';
import './Student.css';

// TODO GTB-4: - 这里组件命名是应该单数的Student吗？
class Student extends Component {
  state = {
    students: {},
    // TODO GTB-4: - 冗余的state inputName，这里不用做双向绑定
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

  // TODO GTB-4: - 同理，不用双向绑定，这个方法也是冗余的
  handleCancelAddStudent(){
    this.setState({
      inputName: ""
    });
  }

  // TODO GTB-4: - 同理，不用双向绑定，这个方法也是冗余的，且注意命名，怎么会是File？
  handleFileChange = (event) => {
    this.setState({
      inputName: event.target.value,
    })
  };

// TODO GTB-4: - 注意缩进
render()
{
  return (
    // TODO GTB-3: - 加强语义化标签的使用 
    <div className="order">
      <div>
        <h2>学员列表</h2>
        {
          // TODO GTB-3: - 数组直接map即可，不用Object.values
          Object.values(this.state.students).map((student, index) => {
            // TODO GTB-4: - 不推荐使用index作为key，可以使用id等
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
              // TODO GTB-4: - 不用双向绑定，这里onChange可以改成onKeyUp/onKeyDown
              onChange={(e) => this.handleFileChange(e)}
              placeholder="请输入要添加的姓名"
          />
          {/* TODO GTB-3: - 这里下面一般直接写{this.handleConfirmAddStudent}，定义handleConfirmAddStuden成箭头函数即可 */}
          <button type="button" onClick={(e) => this.handleConfirmAddStudent( e)}>确认添加</button>
          {/*<button type="button" onClick={(e) => this.handleCancelAddStudent( e)}>取消</button>*/}
        </div>
      </div>

    </div>
  );

}
}

export default Student;