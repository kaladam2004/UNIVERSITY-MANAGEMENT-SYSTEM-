import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Divider } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>👤 Профили шахсӣ</Typography>
      <Card sx={{ mt: 3, maxWidth: 600 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: 32, mr: 3 }}>
              {user?.fullName?.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight={600}>{user?.fullName}</Typography>
              <Typography color="text.secondary">{user?.email}</Typography>
            </Box>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box>
            <Typography variant="body1" gutterBottom><strong>Телефон:</strong> {user?.phone}</Typography>
            <Typography variant="body1" gutterBottom><strong>Нақш:</strong> {user?.role}</Typography>
            <Typography variant="body1" gutterBottom><strong>Login:</strong> {user?.login}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
