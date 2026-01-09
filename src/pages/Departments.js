import React, { useState, useEffect } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper, Chip } from '@mui/material';
import mockApi from '../services/mockApi';

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    mockApi.departments.getAll().then(setDepartments);
  }, []);

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>🏢 Кафедраҳо</Typography>
      <List>
        {departments.map(d => (
          <Paper key={d.id} sx={{ mb: 2, p: 2 }}>
            <ListItem>
              <ListItemText
                primary={<Typography variant="h6">{d.name}</Typography>}
                secondary={`Мудир: ${d.head?.fullName} | Факултет: ${d.faculty?.name}`}
              />
              <Chip label={`${d.teacherCount} омӯзгор`} color="primary" />
            </ListItem>
          </Paper>
        ))}
      </List>
    </Box>
  );
};

export default Departments;
