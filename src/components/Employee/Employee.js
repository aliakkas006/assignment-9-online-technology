import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Employee = () => {

    // Load data from json
    const [employeeData, setEmployeeData] = useState([]);

    const [matchEmployee, setMatchEmployee] = useState([]);

    useEffect(() => {
        fetch('/employeeData.json')
            .then(res => res.json())
            .then(data => {
                setEmployeeData(data);
                setMatchEmployee(data);
            });
    }, []);

    // Handle input field
    const handleSearchText = (event) => {

        const serchValue = event.target.value.toLowerCase();

        const matchedEmployee = employeeData.filter(employee => employee.name.toLowerCase().includes(serchValue));
        // console.log(matchedEmployee);
        setMatchEmployee(matchedEmployee);
    }

    return (
        <Container className="my-5">
            <Form style={{width: '40%'}} className="d-flex mb-3">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleSearchText}
                />
            </Form>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {/* display data in UI using map and employeeData replace with matchEmployee */}
                    {
                        matchEmployee.map(employee => (
                            <tr>
                                <td> {employee?.id} </td>
                                <td> {employee?.name} </td>
                                <td>Image</td>
                                <td> {employee?.designation} </td>
                                <td>
                                    <NavLink
                                    to={`/employee/${employee?.id}`}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }}
                                    >
                                    Details
                                    </NavLink>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default Employee;