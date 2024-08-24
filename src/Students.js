import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Box } from '@mui/material';

import UserForm from './components/UserForm';
import UserTable from './components/UserTable';

const Students = () => {
    const [ students, setStudents ] = useState([]);
    const [ submitted, setSubmitted ] = useState(false);
    const [ isEdit, setIsEdit ] = useState(false);
    const [ selectedUser, setSelectedUser ] = useState({});

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = () => {
        axios.get(process.env.REACT_ENDPOINT + '/api/students')
            .then(response => {
                setStudents(response.data?.response || []);
            })
            .catch(error => {
                console.error(error);
            })
    };

    const createStudent = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
            grade: data.grade,
        };

        axios.post(process.env.REACT_ENDPOINT + '/api/createstudent', payload)
            .then(() => {
                getStudents();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.error(error);
            })
    };

    const updateStudent = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
            grade: data.grade,
        };

        axios.put(process.env.REACT_ENDPOINT + '/api/updatestudent', payload)
            .then(() => {
                getStudents();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.error(error);
            })
    };

    const deleteStudent = (data) => {
        axios.delete(process.env.REACT_ENDPOINT + '/api/deletestudent', { data: { id: data.id }})
            .then(() => {
                getStudents();
            })
            .catch(error => {
                console.error(error);
            })
    };

    return (
        <Box
            sx={{ 
                width: 'calc(100% - 200px)',
                margin: 'auto',
                marginTop: '50px'
             }}
        >
            <UserForm 
                createStudent={createStudent}
                submitted={submitted}
                data={selectedUser}
                isEdit={isEdit}
                updateStudent={updateStudent}
            />
            <UserTable 
                students={students} 
                selectedUser={data => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
                deleteStudent={data => deleteStudent(data)}
            />
        </Box>
    );
};

export default Students;