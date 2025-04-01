const Promps = ({a ,color , sum}) => {
    return(
        <>
        <h1>A :- {a}</h1>

        <ul>
            {
                color.map ((val) => {
                    return (
                        <li style={{color : val }}>{val}</li>
                    )
                })
            }
        </ul>
        <h1>Sum is:- {sum()}</h1>
        </>
    )
}
export default Promps