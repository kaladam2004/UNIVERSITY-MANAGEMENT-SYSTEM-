import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import mockApi from '../services/mockApi';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    mockApi.announcements.getAll().then(setAnnouncements);
  }, []);

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>📢 Эълонҳо</Typography>
      {announcements.map(a => (
        <Paper key={a.id} sx={{ p: 3, mb: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6" fontWeight={600}>{a.title}</Typography>
            <Chip label={a.priority} color={a.priority === 'high' ? 'error' : 'default'} size="small" />
          </Box>
          <Typography variant="body1" color="text.secondary">{a.content}</Typography>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            {a.author?.fullName} • {new Date(a.createdAt).toLocaleDateString('tg-TJ')}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default Announcements;
