import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "ComponentA",
            data : []
        }
        console.log('ComponentA Constructor');
        
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ComponentA getDerivedStateByProps');
        return null;
    }


    // https://jsonplaceholder.typicode.com/users/
    componentDidMount() {
        console.log('ComponentA componentDidMount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => this.setState({
                data :data
            }))
    }
    render() {
        // console.log('this.state.data',this.state.data);
        return (
            <>

                <h2>{this.state.name}</h2>
                 <ul>
                     {this.state.data.map((d) =>{
                        return (
                            <li>{d.username}</li>
                        )
                     })}
                 </ul>
            </>

        )
    }
}

export default ComponentA;