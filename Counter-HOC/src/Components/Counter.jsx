import  { useState } from 'react'

const Counter = (WrappedComponent) => {

    return () => {
        const [count, setCount] = useState(0)

        const[data, setData] = useState([
            {name: "John", age: 30},
            {name: "Jane", age: 25},
            {name: "Bob", age: 35}
        ])

        const[user,setUser] = useState([])

        const increment = () => {
            setCount(count + 1)
        }

        const decriment = () => {
            setCount(count - 1)
        }

        const showData = () => {
            setUser(data)
        }

        return(
            <WrappedComponent cnt={count} 
            increment={increment}
            decriment={decriment}
            showData={showData}
            user={user}
            />
        )

    }
    

}

export default Counter
