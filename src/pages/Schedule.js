import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Paper,
} from '@mui/material';
import { Event } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import mockApi from '../services/mockApi';

const Schedule = () => {
  const { user } = useAuth();
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    loadSchedule();
  }, []);

  const loadSchedule = async () => {
    try {
      let data = [];
      if (user.role === 'student' && user.groupId) {
        data = await mockApi.schedule.getByGroup(user.groupId);
      } else if (user.role === 'teacher') {
        data = await mockApi.schedule.getByTeacher(user.id);
      }
      setSchedule(data);
    } catch (error) {
      console.error('Хатогӣ:', error);
    }
  };

  const groupByDay = () => {
    const days = {
      1: 'Душанбе',
      2: 'Сешанбе',
      3: 'Чоршанбе',
      4: 'Панҷшанбе',
      5: 'Ҷумъа',
    };
    
    const grouped = {};
    schedule.forEach(s => {
      if (!grouped[s.dayOfWeek]) {
        grouped[s.dayOfWeek] = [];
      }
      grouped[s.dayOfWeek].push(s);
    });
    
    return Object.keys(grouped).map(day => ({
      day: days[day],
      lessons: grouped[day].sort((a, b) => a.startTime.localeCompare(b.startTime))
    }));
  };

  const scheduleByDay = groupByDay();

  const getTypeColor = (type) => {
    const colors = {
      'Лексия': 'primary',
      'Машғулоти амалӣ': 'success',
      'Лабораторӣ': 'warning',
    };
    return colors[type] || 'default';
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Event sx={{ fontSize: 40, color: 'primary.main' }} />
        <Typography variant="h4" fontWeight={700}>
          📅 Ҷадвали дарсҳо
        </Typography>
      </Box>

      {scheduleByDay.map((daySchedule, idx) => (
        <Card key={idx} sx={{ mb: 3 }}>
          <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2 }}>
            <Typography variant="h6" fontWeight={600}>
              {daySchedule.day}
            </Typography>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Вақт</strong></TableCell>
                  <TableCell><strong>Фан</strong></TableCell>
                  <TableCell><strong>Омӯзгор</strong></TableCell>
                  <TableCell><strong>Хона</strong></TableCell>
                  <TableCell><strong>Намуд</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {daySchedule.lessons.map((lesson) => (
                  <TableRow key={lesson.id} hover>
                    <TableCell>
                      <Typography variant="body2" fontWeight={600}>
                        {lesson.startTime} - {lesson.endTime}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{lesson.subject?.name}</Typography>
                    </TableCell>
                    <TableCell>{lesson.teacher?.fullName}</TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        {lesson.room}<br />
                        <Typography variant="caption" color="text.secondary">
                          {lesson.building}
                        </Typography>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={lesson.lessonType}
                        color={getTypeColor(lesson.lessonType)}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      ))}

      {scheduleByDay.length === 0 && (
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography color="text.secondary">
            Ҷадвали дарсҳо дастрас нест
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default Schedule;
