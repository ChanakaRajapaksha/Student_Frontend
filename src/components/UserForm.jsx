import React, { useEffect, useState } from 'react';

import { Button, Grid, Input, Typography } from '@mui/material';

const UserForm = ({ createStudent, submitted, data, isEdit, updateStudent }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName('');
      setGrade('');
    }
  }, [submitted]);

  useEffect(() => {
    if (data && data.id && data.id !== 0) {
      setId(data.id);
      setName(data.name);
      setGrade(data.grade);
    } else {
      setId(0);
      setName('');
      setGrade('');
    }
  }, [data]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '20px',
        marginBottom: '40px',
        display: 'block',
      }}
    >

      <Grid item>
        <Typography
          component={'h1'}
          sx={{
            fontSize: '20px',
            color: '#000000',
            marginBottom: '15px',
          }}
        >
          Student Details Form
        </Typography>
      </Grid>

      <Grid item sx={{ alignItems: 'center', display: 'flex' }}>
        <Typography
          component={'label'}
          htmlFor='id'
          sx={{
            width: '150px',
            marginRight: '16px',
          }}
        >
          Student ID
        </Typography>

        <Input
          type='number'
          id='id'
          name='id'
          sx={{ width: '400px' }}
          value={id}
          onChange={e => setId(e.target.value)}
        />
      </Grid>

      <Grid item sx={{ display: 'flex' }}>
        <Typography
          component={'label'}
          htmlFor='name'
          sx={{
            width: '150px',
            marginRight: '16px',
          }}
        >
          Student Name
        </Typography>

        <Input
          type='text'
          id='name'
          name='name'
          sx={{ width: '400px' }}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Grid>

      <Grid item sx={{ display: 'flex' }}>
        <Typography
          component={'label'}
          htmlFor='grade'
          sx={{
            width: '150px',
            marginRight: '16px',
          }}
        >
          Grade
        </Typography>

        <Input
          type='text'
          id='grade'
          name='grade'
          sx={{ width: '400px' }}
          value={grade}
          onChange={e => setGrade(e.target.value)}
        />
      </Grid>

      <Button
        sx={{
          backgroundColor: '#000080',
          fontSize: '12px',
          color: '#ffffff',
          padding: '10px 10px',
          border: 'none',
          '&:hover': {
            opacity: 0.7,
            backgroundColor: '#000080',
          },
          marginTop: '18px',
          marginLeft: '18px',
        }}
        onClick={() => isEdit ? updateStudent({ id, name, grade }) : createStudent({ id, name, grade })}
      >
        { isEdit ? 'Update' : 'Submit' }
      </Button>
    </Grid>
  );
};

export default UserForm;