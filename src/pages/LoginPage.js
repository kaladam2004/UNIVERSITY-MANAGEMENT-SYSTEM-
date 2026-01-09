import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
  InputAdornment,
  Divider,
  Chip,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  School,
  Language,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { language, changeLanguage, t } = useTheme();
  
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Предустановленные логины для быстрого доступа
  const quickLogins = [
    { login: 'rector', password: 'rector123', label: 'Ректор', role: 'rector' },
    { login: 'dean_math', password: 'dean123', label: 'Декани математика', role: 'dean' },
    { login: 'teacher_math1', password: 'teacher123', label: 'Омӯзгор', role: 'teacher' },
    { login: 'student1', password: 'student123', label: 'Донишҷӯ', role: 'student' },
    { login: 'admin', password: 'admin123', label: 'Админ', role: 'admin' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData.login, formData.password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Хатогӣ ҳангоми воридшавӣ');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = (quickLogin) => {
    setFormData({
      login: quickLogin.login,
      password: quickLogin.password,
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 3,
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.95)',
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <School sx={{ fontSize: 60, color: 'primary.main' }} />
            </Box>
            <Typography variant="h4" fontWeight={700} color="primary" gutterBottom>
              TNУ
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {t('app.title')}
            </Typography>
          </Box>

          {/* Language Selector */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>
                <Language sx={{ fontSize: 18, mr: 0.5 }} />
                Забон
              </InputLabel>
              <Select
                value={language}
                label="Забон"
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <MenuItem value="tg">Тоҷикӣ</MenuItem>
                <MenuItem value="ru">Русский</MenuItem>
                <MenuItem value="en">English</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label={t('form.login')}
              value={formData.login}
              onChange={(e) => setFormData({ ...formData, login: e.target.value })}
              margin="normal"
              required
              autoFocus
            />

            <TextField
              fullWidth
              label={t('form.password')}
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
              sx={{ mt: 3, py: 1.5, fontSize: '1.1rem' }}
            >
              {loading ? 'Лутфан, интизор шавед...' : t('button.login')}
            </Button>
          </form>

          <Divider sx={{ my: 3 }}>
            <Chip label="Воридшавии тез (Demo)" size="small" />
          </Divider>

          {/* Quick Login Buttons */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
            {quickLogins.map((ql) => (
              <Chip
                key={ql.login}
                label={ql.label}
                onClick={() => handleQuickLogin(ql)}
                color="primary"
                variant="outlined"
                sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'primary.light', color: 'white' } }}
              />
            ))}
          </Box>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', textAlign: 'center', mt: 3 }}
          >
            © 2024 TNУ. Ҳамаи ҳуқуқҳо ҳифз шудаанд.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
