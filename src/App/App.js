import React, { Component } from 'react';
import './App.scss';
import Student from '../components/Student';

// TODO GTB-1: * 页面没有样式
// TODO GTB-1: * 只是实现了添加学员和学员列表，且添加形式没有符合需求
// TODO GTB-2: * 没有测试
// TODO GTB-3: * 没有拆分组件/只有一个Student（单数）组件，思考如何拆分与复用组件
// TODO GTB-3: * 语义化标签使用不好
// TODO GTB-3: * 没有写样式
// TODO GTB-3: * 运用了ES6+语法及fetch，但完成度较低一些知识点无法验证
// TODO GTB-3: * 运用React相关知识点，但完成度较低一些知识点无法验证
// TODO GTB-4: * 有小步提交意识，但message和小步粒度还需提升
// TODO GTB-4: * 没有抽出Api请求层
// TODO GTB-4: * 组件命名，拆分，抽象，复用还需提升
// TODO GTB-4: * 完成度较低，部分工程化实践无法验证
class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Student />
      </div>
    );
  }
}

export default App;
