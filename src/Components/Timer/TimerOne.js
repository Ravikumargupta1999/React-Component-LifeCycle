import React from "react";

export default class TimerOne extends React.Component {
  constructor() {
    super();
    console.log("Timer Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Timer getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Timer shouldComponentUpdate");
    return true;
  }

  render(){
    console.log('TimerOne Render');
    return <h1>Timer</h1>
  }
  componentDidMount() {
    console.log("Timer ComponentDidMount");
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Timer getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Timer componentDidUpdate");
  }

 
}