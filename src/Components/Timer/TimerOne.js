import React from "react";

export default class TimerOne extends React.Component {
  constructor() {
    super();
    console.log("TimerOne Constructor");
    this.state = {
      time: 0
    }
    this.timer = null;
  }

  static getDerivedStateFromProps(props, state) {
    console.log("TimerOne getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }



  render() {
    console.log('TimerOne Render');
    return (
      <>
        <h1>Time Spent : </h1>
        {new Date(this.state.time * 1000).toISOString().slice(11,19)}

      </>
    )
  }
  componentDidMount() {
    console.log("TimerOne componentDidMount");
    console.log('______________________________')

    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1
      }))}, 1000);

  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("TimerOne getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("TimerOne componentDidUpdate");
  }


}