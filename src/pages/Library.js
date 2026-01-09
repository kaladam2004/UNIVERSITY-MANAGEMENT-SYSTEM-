import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Chip } from '@mui/material';
import { LibraryBooks } from '@mui/icons-material';

const Library = () => {
  const books = [
    { title: 'Таҳлили математикӣ - Ҷилди 1', author: 'Фихтенгольс Г.М.', available: 18 },
    { title: 'Алгебраи хаттӣ', author: 'Курош А.Г.', available: 22 },
    { title: 'Физикаи назариявӣ - Механика', author: 'Ландау Л.Д.', available: 14 },
  ];

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>📚 Китобхона</Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {books.map((book, idx) => (
          <Grid item xs={12} md={6} lg={4} key={idx}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', mb: 2 }}>
                  <LibraryBooks color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Box>
                    <Typography variant="h6" fontWeight={600}>{book.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{book.author}</Typography>
                  </Box>
                </Box>
                <Chip label={`${book.available} дастрас`} color="success" size="small" />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Library;
