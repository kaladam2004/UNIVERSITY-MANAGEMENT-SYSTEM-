import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  LinearProgress,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Chip,
  IconButton,
  Button,
} from '@mui/material';
import {
  TrendingUp,
  School,
  Person,
  Business,
  Event,
  Chat as ChatIcon,
  Assignment,
  ArrowUpward,
  ArrowDownward,
  MoreVert,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import mockApi from '../services/mockApi';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

// Регистрация компонентов Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const { user } = useAuth();
  const { t } = useTheme();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [todaySchedule, setTodaySchedule] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    loadDashboardData();
  }, [user]);

  const loadDashboardData = async () => {
    try {
      const statsData = await mockApi.statistics.getUniversityStats();
      setStats(statsData);

      // Ҷадвали имрӯза
      if (user.role === 'student' && user.groupId) {
        const schedule = await mockApi.schedule.getByGroup(user.groupId);
        const today = new Date().getDay();
        const todayLessons = schedule.filter(s => s.dayOfWeek === today);
        setTodaySchedule(todayLessons);
      } else if (user.role === 'teacher') {
        const schedule = await mockApi.schedule.getByTeacher(user.id);
        const today = new Date().getDay();
        const todayLessons = schedule.filter(s => s.dayOfWeek === today);
        setTodaySchedule(todayLessons);
      }

      // Эълонҳо
      const announcementsData = await mockApi.announcements.getAll();
      setAnnouncements(announcementsData.slice(0, 3));
    } catch (error) {
      console.error('Хатогӣ дар боркунии маълумот:', error);
    } finally {
      setLoading(false);
    }
  };

  // Карточкаи статистика
  const StatCard = ({ title, value, icon, color, trend, trendValue }) => (
    <Card sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography color="text.secondary" gutterBottom variant="body2">
              {title}
            </Typography>
            <Typography variant="h4" fontWeight={700} sx={{ my: 1 }}>
              {value}
            </Typography>
            {trend && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                {trend === 'up' ? (
                  <ArrowUpward sx={{ fontSize: 16, color: 'success.main' }} />
                ) : (
                  <ArrowDownward sx={{ fontSize: 16, color: 'error.main' }} />
                )}
                <Typography
                  variant="caption"
                  color={trend === 'up' ? 'success.main' : 'error.main'}
                  fontWeight={600}
                >
                  {trendValue}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  аз моҳи гузашта
                </Typography>
              </Box>
            )}
          </Box>
          <Avatar
            sx={{
              bgcolor: `${color}.light`,
              color: `${color}.main`,
              width: 56,
              height: 56,
            }}
          >
            {icon}
          </Avatar>
        </Box>
      </CardContent>
    </Card>
  );

  // Диаграммаи хатӣ - Динамикаи донишҷӯён
  const lineChartData = {
    labels: ['Шаҳривар', 'Меҳр', 'Обон', 'Озар', 'Деҳ', 'Баҳман', 'Исфанд'],
    datasets: [
      {
        label: 'Донишҷӯён',
        data: [1200, 1250, 1300, 1350, 1400, 1420, 1450],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
      {
        label: 'Омӯзгорон',
        data: [120, 125, 128, 130, 132, 134, 135],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Динамикаи рушди донишгоҳ',
      },
    },
  };

  // Диаграммаи миллаӣ - Донишҷӯён аз рӯи факултет
  const barChartData = {
    labels: ['Математика', 'Физика', 'Иқтисодиёт'],
    datasets: [
      {
        label: 'Донишҷӯён',
        data: [420, 380, 650],
        backgroundColor: [
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
        ],
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Таксимоти донишҷӯён аз рӯи факултетҳо',
      },
    },
  };

  // Диаграммаи гирд - Таксимоти баҳоҳо
  const doughnutChartData = {
    labels: ['Аъло (90-100)', 'Хуб (75-89)', 'Қаноатбахш (60-74)', 'Ноқаноатбахш (<60)'],
    datasets: [
      {
        data: [35, 45, 15, 5],
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(255, 99, 132, 0.8)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Таксимоти баҳоҳо (%)',
      },
    },
  };

  if (loading) {
    return (
      <Box sx={{ width: '100%', mt: 2 }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          {t('dashboard.welcome')}, {user.fullName}! 👋
        </Typography>
        <Typography color="text.secondary" variant="body1">
          Ин дашборди шахсии шумо мебошад. Дар ин ҷо шумо метавонед маълумоти муҳимро бинед.
        </Typography>
      </Box>

      {/* Stats Cards */}
      {(user.role === 'rector' || user.role === 'super_admin') && (
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title={t('dashboard.totalStudents')}
              value={stats?.totalStudents || 0}
              icon={<School />}
              color="primary"
              trend="up"
              trendValue="+5.2%"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title={t('dashboard.totalTeachers')}
              value={stats?.totalTeachers || 0}
              icon={<Person />}
              color="success"
              trend="up"
              trendValue="+2.1%"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title={t('dashboard.totalFaculties')}
              value={stats?.totalFaculties || 0}
              icon={<Business />}
              color="warning"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard
              title="Кафедраҳо"
              value={stats?.totalDepartments || 0}
              icon={<Business />}
              color="error"
            />
          </Grid>
        </Grid>
      )}

      <Grid container spacing={3}>
        {/* Диаграммаҳо - Танҳо барои Ректор ва Админ */}
        {(user.role === 'rector' || user.role === 'super_admin') && (
          <>
            <Grid item xs={12} lg={8}>
              <Card>
                <CardContent sx={{ height: 400 }}>
                  <Line data={lineChartData} options={lineChartOptions} />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Card>
                <CardContent sx={{ height: 400 }}>
                  <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent sx={{ height: 400 }}>
                  <Bar data={barChartData} options={barChartOptions} />
                </CardContent>
              </Card>
            </Grid>
          </>
        )}

        {/* Ҷадвали имрӯза */}
        {todaySchedule.length > 0 && (
          <Grid item xs={12} lg={6}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" fontWeight={600}>
                    📅 {t('dashboard.todaySchedule')}
                  </Typography>
                  <IconButton size="small">
                    <MoreVert />
                  </IconButton>
                </Box>
                <List>
                  {todaySchedule.map((lesson) => (
                    <ListItem
                      key={lesson.id}
                      sx={{
                        bgcolor: 'background.default',
                        borderRadius: 2,
                        mb: 1,
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                          <Event />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={lesson.subject?.name}
                        secondary={`${lesson.startTime} - ${lesson.endTime} | ${lesson.room}`}
                      />
                      <Chip label={lesson.lessonType} size="small" color="primary" variant="outlined" />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        )}

        {/* Эълонҳо */}
        <Grid item xs={12} lg={todaySchedule.length > 0 ? 6 : 12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight={600}>
                  📢 {t('menu.announcements')}
                </Typography>
                <Button size="small">Ҳамаро дидан</Button>
              </Box>
              <List>
                {announcements.map((announcement) => (
                  <Paper
                    key={announcement.id}
                    sx={{
                      p: 2,
                      mb: 2,
                      bgcolor: announcement.priority === 'high' ? 'error.light' : 'background.default',
                      color: announcement.priority === 'high' ? 'white' : 'inherit',
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                      {announcement.title}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      {announcement.content}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                      <Typography variant="caption">
                        {announcement.author?.fullName}
                      </Typography>
                      <Typography variant="caption">
                        {new Date(announcement.createdAt).toLocaleDateString('tg-TJ')}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Амалҳои тез */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                ⚡ Амалҳои тез
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 2 }}>
                <Button variant="contained" startIcon={<ChatIcon />}>
                  Чат
                </Button>
                <Button variant="outlined" startIcon={<Assignment />}>
                  Вазифаҳо
                </Button>
                <Button variant="outlined" startIcon={<Event />}>
                  Ҷадвал
                </Button>
                {user.role === 'teacher' && (
                  <Button variant="outlined" startIcon={<TrendingUp />}>
                    Баҳогузорӣ
                  </Button>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
