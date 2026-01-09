import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { users } from '../data/mockData'; // Нишондиҳандаи дуруст ба файли mockData

const Students = () => {
  // Филтр кардани танҳо донишҷӯён
  const students = users.filter(user => user.role === 'student');

  return (
    <Box>
      <Typography variant="h4" fontWeight={700}>🎓 Донишҷӯён</Typography>
      <Typography variant="body1" sx={{ mt: 2, mb: 2 }}>
        Рӯйхати донишҷӯён дар ин ҷо намоиш дода мешавад.
      </Typography>

      <List>
        {students.map(student => (
          <ListItem key={student.id} divider>
            <ListItemText
              primary={student.fullName}
              secondary={`Email: ${student.email} | Телефон: ${student.phone}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Students;
