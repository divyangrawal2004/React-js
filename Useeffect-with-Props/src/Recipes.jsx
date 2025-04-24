const Recipes = ({ recipes }) => {
    const tableStyle = {
        width: '80%',
        margin: '20px auto',
        borderCollapse: 'collapse',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px'
    };

    const thTdStyle = {
        padding: '10px',
        border: '1px solid #ddd',
        textAlign: 'center'
    };

    const thStyle = {
        ...thTdStyle,
        backgroundColor: '#f4f4f4',
        fontWeight: 'bold'
    };

    const imgStyle = {
        width: '100px',
        height: 'auto',
        borderRadius: '8px'
    };

    const headingStyle = {
        textAlign: 'center',
        marginTop: '20px',
        fontSize: '24px',
        color: '#333'
    };

    return (
        <>
            <h1 style={headingStyle}>Recipes Data :-</h1>

            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Id</th>
                        <th style={thStyle}>Image</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Rating</th>
                        <th style={thStyle}>Tags</th>
                        <th style={thStyle}>UserId</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recipes.map((val, index) => (
                            <tr key={index}>
                                <td style={thTdStyle}>{val.id}</td>
                                <td style={thTdStyle}>
                                    <img src={val.image} alt={val.name} style={imgStyle} />
                                </td>
                                <td style={thTdStyle}>{val.name}</td>
                                <td style={thTdStyle}>{val.rating}</td>
                                <td style={thTdStyle}>
                                    <ul>
                                        {
                                            val.tags.map((tag, tagIndex) => (
                                                <li key={tagIndex}>{tag}</li>
                                            ))
                                        }
                                    </ul>
                                </td>
                                <td style={thTdStyle}>{val.userId}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};

export default Recipes;
