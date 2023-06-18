import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "ComponentA",
            data: []
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
                data: data
            }))
    }
    render() {
        // console.log('this.state.data',this.state.data);
        return (
            <>
                <h2>{this.state.name}</h2>


                <div>
                    <h1>User Table</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Phone</th>
                                <th>Website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(user => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.website}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>

        )
    }
}

export default ComponentA;