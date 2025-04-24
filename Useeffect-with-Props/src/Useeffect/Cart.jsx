import React from 'react';

const Cart = ({ cart }) => {
    const headingStyle = {
        textAlign: 'center',
        fontSize: '24px',
        color: '#333',
        marginTop: '20px',
        marginBottom: '20px',
    };

    const tableStyle = {
        width: '90%',
        margin: '0 auto',
        borderCollapse: 'collapse',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
    };

    const thTdStyle = {
        border: '1px solid #ccc',
        padding: '10px',
        textAlign: 'center',
        verticalAlign: 'middle',
    };

    const thStyle = {
        ...thTdStyle,
        backgroundColor: '#f2f2f2',
        fontWeight: 'bold',
    };

    const productTableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '10px',
    };

    const innerThTd = {
        border: '1px solid #ccc',
        padding: '6px',
        fontSize: '14px',
        backgroundColor: '#fafafa',
    };

    return (
        <>
            <h1 style={headingStyle}>Carts Details :-</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Id</th>
                        <th style={thStyle}>Products</th>
                        <th style={thStyle}>Total</th>
                        <th style={thStyle}>Total-Product</th>
                        <th style={thStyle}>User-ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((val, index) => {
                            return (
                                <tr key={index}>
                                    <td style={thTdStyle}>{val.id}</td>
                                    <td style={thTdStyle}>
                                        <table style={productTableStyle}>
                                            <thead>
                                                <tr>
                                                    <th style={innerThTd}>Title</th>
                                                    <th style={innerThTd}>Price</th>
                                                    <th style={innerThTd}>Quantity</th>
                                                    <th style={innerThTd}>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    val.products.map((item, idx) => (
                                                        <tr key={idx}>
                                                            <td style={innerThTd}>{item.title}</td>
                                                            <td style={innerThTd}>₹ {item.price}</td>
                                                            <td style={innerThTd}>{item.quantity}</td>
                                                            <td style={innerThTd}>₹ {item.total}</td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </td>
                                    <td style={thTdStyle}>₹ {val.total}</td>
                                    <td style={thTdStyle}>{val.totalProducts}</td>
                                    <td style={thTdStyle}>{val.userId}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
};

export default Cart;
