import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { users } from '../data/mockData'; // Масъул барои маълумот

const Teachers = () => {
  // Филтр кардани танҳо омӯзгорон
  const teachers = users.filter(user => user.role === 'teacher');

  return (
    <Box>
      <Typography variant="h4" fontWeight={700}>👨‍🏫 Омӯзгорон</Typography>
      <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
        Рӯйхати омӯзгорон дар ин ҷо намоиш дода мешавад.
      </Typography>

      <List>
        {teachers.map(teacher => (
          <ListItem key={teacher.id} divider>
            <ListItemText
              primary={teacher.fullName}
              secondary={`Email: ${teacher.email} | Телефон: ${teacher.phone} | Дараҷаи илмӣ: ${teacher.academicDegree || '–'} | Мансаб: ${teacher.position || '–'}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Teachers;
