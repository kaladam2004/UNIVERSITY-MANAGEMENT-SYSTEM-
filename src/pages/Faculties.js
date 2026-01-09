import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, Avatar, Chip } from '@mui/material';
import { School, Person, Business } from '@mui/icons-material';
import mockApi from '../services/mockApi';

const Faculties = () => {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    loadFaculties();
  }, []);

  const loadFaculties = async () => {
    const data = await mockApi.faculties.getAll();
    setFaculties(data);
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        🏛️ Факултетҳо
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {faculties.map((f) => (
          <Grid item xs={12} md={6} lg={4} key={f.id}>
            <Card sx={{ height: '100%', '&:hover': { boxShadow: 6 }, transition: '0.3s' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, mr: 2 }}>
                    <School />
                  </Avatar>
                  <Box>
                    <Typography variant="h6" fontWeight={600}>{f.name}</Typography>
                    <Chip label={f.code} size="small" color="primary" />
                  </Box>
                </Box>
                <Typography color="text.secondary" gutterBottom>
                  👨‍🏫 Декан: {f.dean?.fullName}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Box>
                    <Typography variant="h5" fontWeight={700} color="primary.main">
                      {f.studentCount}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Донишҷӯён
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5" fontWeight={700} color="success.main">
                      {f.teacherCount}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Омӯзгорон
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Faculties;
