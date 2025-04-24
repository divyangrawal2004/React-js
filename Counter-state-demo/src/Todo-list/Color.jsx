const Color = ({color}) => {
    return(

      < >
        <h1 align="center">Color:-</h1>

        <ul style={{listStyle:"none"}} align="center">
            {
                color.map((val) => {
                return(
                    <li style={{color:val, fontSize:"20px"}}>{val}</li>
                )
                    
                })
            }
        </ul>
      
      </> 
       
          )
}
export default Color