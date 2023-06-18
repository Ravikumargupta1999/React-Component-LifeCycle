import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "ComponentA"
        }
        console.log('ComponentA Constructor');
        // this.setState({
        //     name : "CA"
        // })
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ComponentA getDerivedStateByProps');
        // this.setState({
        //     name : "CA"
        // })
        return null;
    }

    componentDidMount() {
        console.log('ComponentA componentDidMount');
    }
    render() {
        console.log('ComponentA Render');
        // this.setState({
        //     name : "CA"
        // })
        return (
            <>
               
                <h2>{this.state.name}</h2>
                <ComponentB />
            </>

        )
    }
}

export default ComponentA;