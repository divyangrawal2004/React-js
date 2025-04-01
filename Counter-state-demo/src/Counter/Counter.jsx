const Counter = ({add,Add,minus,reset}) => {
    return (
        <div align="center">
            <h1>Counter</h1>
            <h2>Counter: {add}</h2>
            <button onClick={Add} style={{margin:"10px"}}>Add</button>
            <button onClick={minus} style={{margin:"10px"}}>minus</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;