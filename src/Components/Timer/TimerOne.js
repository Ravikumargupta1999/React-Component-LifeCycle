import React from "react";

export default class TimerOne extends React.Component {
  constructor() {
    super();
    console.log("TimerOne Constructor");
    this.state = {
      count : 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("TimerOne getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleIncrease = () =>{
    this.setState((prevState) =>{
      return{
        count : prevState.count + 1
      }
    })
  }

  render(){
    console.log('TimerOne Render');
    return(
      <>
         <h1>C</h1>
         <h2>{this.state.count}</h2>
         <button onClick={this.handleIncrease}>Increase</button>
      </>
    )
  }
  componentDidMount() {
    console.log("TimerOne componentDidMount");
    console.log('______________________________')
    
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("TimerOne getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("TimerOne componentDidUpdate");
  }

 
}