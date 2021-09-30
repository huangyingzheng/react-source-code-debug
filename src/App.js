// import React, { useState } from 'react';
// import State from './components/State';
// import LanesDemo from './components/LanesDemo';
// import AppSibling from './components/AppSibling';
// import TasksWithDifferentPriorities from './components/TasksWithDifferentPriorities';
// import SchedulerTask from './components/SchedulerTask';
// import Concurrent from './components/ConcurrentInput';
// import Diff from './components/Diff';
// import PropsDiff from './components/PropsDiff';
// import Hooks from './components/Hooks';
// import EventDemo from './components/EventDemo';
// import ContextDemo from './components/Context';
import './App.css';
import React from 'react';

// propsDiff
/* class App extends React.Component {
  render() {
    return <PropsDiff/>
  }
} */
// function App() {
// 事件系统
// return <EventDemo/>
// return <Hooks/>
// fiber树
// return (
//   <div className="App">
//     <span className={'app-span'} onClick={() => setCount(count + 1)}>App{count}</span>
//     <AppSibling count={count}/>
//   </div>
// );
// Scheduler调度任务与用户交互
// return <SchedulerTask/>
// 高优先级插队
// return <TasksWithDifferentPriorities/>
// context
// return <ContextDemo/>
// diff 算法
// return <Diff ref={'diffRef'}/>
// }
// export default App;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
  }
  state = {
    count: 0,
  };
  componentDidMount() {
    this.setState({ count: 1 });
    // const button = this.buttonRef.current;
    // setTimeout(() => this.setState({ count: 1 }), 500);
    // setTimeout(() => button.click(), 600);
  }
  handleButtonClick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 2 };
    });
  };
  render() {
    return (
      <div className={'origin-demo'}>
        <p>
          不需要点击这个按钮，这个按钮是交给js去模拟点击用的，模拟点击之后产生的是高优先级任务
        </p>
        <button ref={this.buttonRef} onClick={this.handleButtonClick}>
          增加2
        </button>
        <div>
          {Array.from(new Array(16000)).map((v, index) => (
            <div key={index}>{this.state.count}</div>
          ))}
        </div>
      </div>
    );
  }
}
