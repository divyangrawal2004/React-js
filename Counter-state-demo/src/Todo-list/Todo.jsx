import { useState } from "react";
import Color from "./Color"

const Todo = ({ todo }) => {
    let [color,setColor] = useState(["red","green","blue"]);
    return (
        <>
          <h1 align="center">Table </h1>
            <table border="1" align="center" cellPadding={10}>
              
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((val) => (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
       
            <Color
                color={color}
            />
            
        </>

    )
}
export default Todo