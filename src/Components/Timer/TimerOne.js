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
        <h1>Time Spent :
          {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h1>
      </>
    )
  }



  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("TimerOne getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("TimerOne componentDidUpdate");
    console.log('________________________________');
    // console.log('Previous Props',prevProps);
    // console.log('Previous State',prevState);
    // console.log('Snap Shot',snapshot);


    if (prevProps.timerOn !== this.props.timerOn) {
      if (this.props.timerOn) {
        this.timer = setInterval(() => {
          this.setState((prevState) => ({ time: prevState.time + 1 }))
        }, 1000);

      } else {
        clearInterval(this.timer)
      }
    }
  }


    componentWillUnmount() {
      console.log('TimerOne componentWillUnmount');
      clearInterval(this.timer);
    }

  }