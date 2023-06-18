import React from "react";

class ComponentB extends React.Component {
    constructor(){
        super();

        this.state = {
            name : "ComponentB"
        }
        console.log('ComponentB Constructor');
        // this.setState({
        //     name : "CA"
        // })
    }

    static getDerivedStateFromProps(props,state){
        console.log('ComponentB getDerivedStateByProps');
        // this.setState({
        //     name : "CB"
        // })
        return null;
    }

    componentDidMount(){
        console.log('ComponentB componentDidMount');
    }
    render() {
        console.log('ComponentB Render');
        // this.setState({
        //     name : "CB"
        // })
        return (
            <>
                <h1>{this.state.name}</h1>
            </>

        )
    }
}

export default ComponentB;