import React from 'react';

import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const UserTable = ({ students, selectedUser, deleteStudent }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: '650px' }}>
        <TableHead
          sx={{ 
            backgroundColor: '#F0FFFF',
           }}
        >
          <TableRow>
            <TableCell>Student ID</TableCell>
            <TableCell>Student Name</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {students.length > 0 ? students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.grade}</TableCell>
              <TableCell>
                <Button onClick={() => selectedUser({ id: student.id, name: student.name, grade: student.grade })}>Edit</Button>
                <Button onClick={() => deleteStudent(window.confirm('Are you sure you to delete this?') && { id: student.id })}>Delete</Button>
              </TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell>No Students Data</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;