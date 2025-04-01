const Props = ({ a , obj }) => {
    return (
        <>
            <h1>A : {a}</h1>
            <table className='table' style={{ border: '1px solid black' }}>
                <thead >
                       <th>id</th>
                       <th>name</th>
                       <th>age</th>
                </thead>
              
           {
            obj.map((val,index)=> {
                return(
                    <tbody style={{ border: '1px solid black' }} >
                        <tr >
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                        </tr>
                    </tbody>                  
                )
            })
           }
               
            </table>
        </>
    )
}
export default Props;