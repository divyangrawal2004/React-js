import React from 'react';

const Product = ({ products }) => {
    const tableStyle = {
        width: '80%',
        margin: '20px auto',
        borderCollapse: 'collapse',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px'
    };

    const thTdStyle = {
        padding: '10px',
        border: '1px solid #ccc',
        textAlign: 'center'
    };

    const thStyle = {
        ...thTdStyle,
        backgroundColor: '#f2f2f2',
        fontWeight: 'bold'
    };

    const imgStyle = {
        width: '100px',
        height: 'auto',
        borderRadius: '6px'
    };

    const headingStyle = {
        textAlign: 'center',
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333'
    };

    const ulStyle = {
        listStyle: 'none',
        padding: 0,
        margin: 0
    };

    return (
        <>
            <h1 style={headingStyle}>Product Data :-</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Image</th>
                        <th style={thStyle}>Tags</th>
                        <th style={thStyle}>Title</th>
                        <th style={thStyle}>Rating</th>
                        <th style={thStyle}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((val) => {
                            return (
                                <tr key={val.id}>
                                    <td style={thTdStyle}>{val.id}</td>
                                    <td style={thTdStyle}> </td>
                                    <td style={thTdStyle}>
                                        {
                                            val.tags.map((val,index) => {
                                                return (
                                                    <ul key={index} style={ulStyle}>
                                                        <li>{val}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </td>
                                    <td style={thTdStyle}>{val.title}</td>
                                    <td style={thTdStyle}>{val.rating}</td>
                                    <td style={thTdStyle}>{val.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Product;
