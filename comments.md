### 完成度：

- 页面没有样式
- 只是实现了添加学员和学员列表，且添加形式没有符合需求

**Details:**

### 测试：

- 没有测试

**Details:**

### 知识点：

- 没有拆分组件/只有一个 Student（单数）组件，思考如何拆分与复用组件
- 语义化标签使用不好
- 没有写样式
- 运用了 ES6+语法及 fetch，但完成度较低一些知识点无法验证
- 运用 React 相关知识点，但完成度较低一些知识点无法验证

**Details:**

- \- 加强语义化标签的使用
- \- 数组直接 map 即可，不用 Object.values
- \- 这里下面一般直接写{this.handleConfirmAddStudent}，定义 handleConfirmAddStuden 成箭头函数即可 \*/}

### 工程实践：

- 有小步提交意识，但 message 和小步粒度还需提升
- 没有抽出 Api 请求层
- 组件命名，拆分，抽象，复用还需提升
- 完成度较低，部分工程化实践无法验证

**Details:**

- \- 这里不用独立引入@babel/polyfill，如有需要请修改 .babelrc 文件
- \- 这里组件命名是应该单数的 Student 吗？
- \- 冗余的 state inputName，这里不用做双向绑定
- \- 同理，不用双向绑定，这个方法也是冗余的
- \- 同理，不用双向绑定，这个方法也是冗余的，且注意命名，怎么会是 File？
- \- 注意缩进
- \- 不推荐使用 index 作为 key，可以使用 id 等
- \- 不用双向绑定，这里 onChange 可以改成 onKeyUp/onKeyDown
