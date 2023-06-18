import React from "react";

class ComponentA extends React.Component {
    constructor(){
        super();

        this.state = {
            name : "ComponentA"
        }
        console.log('Component Constructor')
    }

    static getDerivedStateFromProps(){
        console.log('ComponentA getDerivedStateByProps');
        return null;
    }

    componentDidMount(){
        console.log('ComponentA componentDidMount');
    }
    render() {
        console.log('ComponentA Render')
        return (
            <>
                <h1>{this.state.name}</h1>
            </>

        )
    }
}

export default ComponentA;