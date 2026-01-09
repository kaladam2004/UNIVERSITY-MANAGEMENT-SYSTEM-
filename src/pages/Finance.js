import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { AccountBalance, TrendingUp, TrendingDown } from '@mui/icons-material';

const Finance = () => (
  <Box>
    <Typography variant="h4" fontWeight={700} gutterBottom>💰 Молия</Typography>
    <Grid container spacing={3} sx={{ mt: 2 }}>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <AccountBalance color="primary" sx={{ fontSize: 40 }} />
              <Box>
                <Typography variant="h5" fontWeight={700}>3,850,000</Typography>
                <Typography variant="caption" color="text.secondary">Даромад (TJS)</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <TrendingUp color="success" sx={{ fontSize: 40 }} />
              <Box>
                <Typography variant="h5" fontWeight={700}>120,500</Typography>
                <Typography variant="caption" color="text.secondary">Стипендия (TJS)</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <TrendingDown color="error" sx={{ fontSize: 40 }} />
              <Box>
                <Typography variant="h5" fontWeight={700}>2,100,000</Typography>
                <Typography variant="caption" color="text.secondary">Хароҷот (TJS)</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </Box>
);

export default Finance;
