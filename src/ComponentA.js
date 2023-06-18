import React from "react";

class ComponentA extends React.Component {
    constructor(){
        super();

        this.state = {
            name : "ComponentA"
        }
        console.log('ComponentA Constructor');
        // this.setState({
        //     name : "CA"
        // })
    }

    static getDerivedStateFromProps(props,state){
        console.log('ComponentA getDerivedStateByProps');
        return null;
    }

    componentDidMount(){
        console.log('ComponentA componentDidMount');
    }
    render() {
        console.log('ComponentA Render');
        // this.setState({
        //     name : "CA"
        // })
        return (
            <>
                <h1>{this.state.name}</h1>
            </>

        )
    }
}

export default ComponentA;