import React from 'react'

const Airports = ({ Air }) => {
    return (
        <>
            <h1 align="center">Airpost Data:- </h1>

            <table border={1} align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Code</th>
                        <th>Country</th>
                        <th>Services</th>
                        <th>Terminals</th>
                        <th>Airlines</th>
                        <th>Contact-Info</th>
                        
                    </tr>
                </thead>
                <tbody align="center">
                    {
                        Air.map((val, index) => {
                            return (
                                <tr>
                                    <td>{val.id}</td>
                                    <td>{val.name.slice(0, 30)}</td>
                                    <td>{val.city}</td>
                                    <td>{val.code}</td>
                                    <td>{val.country}</td>
                                    <td >
                                        {
                                            val.services.map((val) => {
                                                return (
                                                    <ul>
                                                        <li>{val}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            val.terminals.map((val) => {
                                                return (
                                                    <>
                                                        <table>
                                                            <thead>
                                                                <tr>
                                                                    <th>{val.name}</th>
                                                                    <th>
                                                                        {
                                                                            val.gates.map((val) => {
                                                                                return (
                                                                                    <ul>
                                                                                        <li>{val.gate_number}</li>
                                                                                    </ul>
                                                                                )
                                                                            })
                                                                        }
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                        </table>

                                                    </>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            val.terminals[0].gates[0].airlines.map((val) => {
                                                return (
                                                    <ul>
                                                        <li>{val}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        <table border={1}>
                                            <thead>
                                                <tr>
                                                    <th>E-mail</th>
                                                    <th>Phone</th>
                                                    <th>Website</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    <tr>
                                                        <td>{val.contact_info.email}</td>
                                                        <td>{val.contact_info.phone}</td>
                                                        <td>{val.contact_info.website}</td>
                                                    </tr>
                                                }
                                            </tbody>
                                        </table>

                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Airports
