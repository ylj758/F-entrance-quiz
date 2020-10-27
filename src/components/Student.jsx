import React, {Component} from 'react'
import '@babel/polyfill';
import './Student.css';

class Student extends Component {
  state = {
    students: {},
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


render()
{
  return (
    <div className="order">
      <div>
        <h2>学员列表</h2>
        {
          Object.values(this.state.students).map((student, index) => {
            return <tr key={index}>
              <label>{index+1}. </label>
              <td>{student.name}</td>
             </tr>
          })
        }
        <button type="button" onClick={(e) => this.handleAddStudent( e)}>添加</button>
        
      </div>

    </div>
  );

}
}

export default Student;