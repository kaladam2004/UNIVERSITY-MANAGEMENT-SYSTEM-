import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Chip,
} from '@mui/material';
import { Grade as GradeIcon } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import mockApi from '../services/mockApi';

const Grades = () => {
  const { user } = useAuth();
  const [grades, setGrades] = useState([]);
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    loadGrades();
  }, []);

  const loadGrades = async () => {
    try {
      let data = [];
      if (user.role === 'student') {
        // Фақат баҳояи студенти худ
        data = await mockApi.grades.getByStudent(user.id);
        const perf = await mockApi.statistics.getStudentPerformance(user.id);
        setPerformance(perf);
      } else if (['admin', 'rector', 'dekan'].includes(user.role)) {
        // Ҳамаи студентҳо ва баҳояшон
        data = await mockApi.grades.getAllStudents();
        setPerformance(null);
      }
      setGrades(data);
    } catch (error) {
      console.error('Хатогӣ:', error);
    }
  };

  const getGradeColor = (value) => {
    if (value >= 90) return 'success';
    if (value >= 75) return 'primary';
    if (value >= 60) return 'warning';
    return 'error';
  };

  const getGradeTypeLabel = (type) => {
    const labels = {
      current: 'Ҷорӣ',
      midterm: 'Фосилавӣ',
      final: 'Якунӣ',
    };
    return labels[type] || type;
  };

  const isAdminView = ['admin', 'rector', 'dekan'].includes(user.role);

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <GradeIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        <Typography variant="h4" fontWeight={700}>
          📊 Баҳоҳо
        </Typography>
      </Box>

      {/* Муҳофизати муваффақият барои студенти танҳо */}
      {!isAdminView && performance && (
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Муваффақият
            </Typography>
            <Box sx={{ display: 'flex', gap: 4, mt: 2 }}>
              <Box>
                <Typography variant="h3" fontWeight={700} color="primary.main">
                  {performance.averageGrade}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Баҳои миёна
                </Typography>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Сатҳи муваффақият</Typography>
                    <Typography variant="body2" fontWeight={600}>
                      {Math.round((performance.averageGrade / 100) * 100)}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(performance.averageGrade / 100) * 100}
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                </Box>
                <Typography variant="caption" color="text.secondary">
                  Ҳамагӣ баҳоҳо: {performance.totalGrades}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}

      <TableContainer component={Card}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'primary.light' }}>
              {isAdminView && (
                <TableCell sx={{ color: 'white', fontWeight: 700 }}>Студент</TableCell>
              )}
              <TableCell sx={{ color: 'white', fontWeight: 700 }}>Фан</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 700 }}>Намуди баҳо</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 700 }} align="center">Баҳо</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 700 }}>Сана</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {grades.map((grade) => (
              <TableRow key={grade.id} hover>
                {isAdminView && (
                  <TableCell>
                    <Typography variant="body1" fontWeight={600}>
                      {grade.student?.name}
                    </Typography>
                  </TableCell>
                )}
                <TableCell>
                  <Typography variant="body1" fontWeight={600}>
                    {grade.subject?.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={getGradeTypeLabel(grade.gradeType)}
                    size="small"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={`${grade.value} / ${grade.maxValue}`}
                    color={getGradeColor(grade.value)}
                    sx={{ fontWeight: 700 }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(grade.date).toLocaleDateString('tg-TJ')}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {grades.length === 0 && (
        <Card sx={{ p: 4, textAlign: 'center', mt: 3 }}>
          <Typography color="text.secondary">
            Баҳоҳо то ҳол ворид нашудаанд
          </Typography>
        </Card>
      )}
    </Box>
  );
};

export default Grades;
