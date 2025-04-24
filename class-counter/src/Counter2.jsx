import { Component } from "react";

class Counter2 extends Component {
    constructor() {
        super();
        this.state = {
            count:0
        }
    }
    componentDidMount() {
        console.log("Start now...");
        
    }
    componentDidUpdate() {
        console.log("Update now...");
    }
    plus(){
        this.setState({count: this.state.count +1})
    }

    componentWillUnmount() {
        console.log("End now...");
    }   
    render() {
        return(
           <div align="center">
            <h1>Counter :-</h1>
            <h2>Count:-{this.state.count}</h2>
            <button onClick={() => this.plus()}>+</button>
           </div>
        )
    }
}
export default Counter2