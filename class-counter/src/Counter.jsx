import { Component } from "react";

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,

            users : [
                {name:"Ram", age:23},
                {name:"Shyam", age:25},
                {name:"Hari", age:27}
            ],

            color : ["Red","Green","Blue","Pink","Yellow"]
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <div align="center">
                <h1 align="center">Counter</h1>
                <h2>Count :- {this.state.count}</h2>
                <button onClick={() => this.increment()}> + </button>
                <button onClick={() => this.decrement()}>-</button>
                <h2>Users:-
                    {
                        this.state.users.map((val,index)=> {
                            return(
                                <div>
                                  <h3> Name:- {val.name} </h3>
                                  <h3> Age:- {val.age}</h3>
                                </div>
                            )
                        })
                    }
                </h2>
                <h3>Colors
                    
                    :-
                    {
                        this.state.color.map((val) => {
                            return(
                                <div>
                                    <h3 style={{color:val}}>{val}</h3>
                                </div>
                            )
                        })
                    }

                </h3>
            </div>
        )
    }
}


export default Counter