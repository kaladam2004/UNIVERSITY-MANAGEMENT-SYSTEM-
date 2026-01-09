import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  TextField,
  MenuItem,
  Button,
  IconButton,
} from '@mui/material';
import { Search, Add, Edit, Delete } from '@mui/icons-material';
import mockApi from '../services/mockApi';
import { useAuth } from '../contexts/AuthContext';

const Users = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({ role: '', search: '' });

  useEffect(() => {
    loadUsers();
  }, [filters]);

  const loadUsers = async () => {
    try {
      const data = await mockApi.users.getAll(filters);
      setUsers(data);
    } catch (error) {
      console.error('Хатогӣ:', error);
    }
  };

  const getRoleColor = (role) => {
    const colors = {
      rector: 'error',
      dean: 'warning',
      teacher: 'info',
      student: 'success',
      super_admin: 'error',
    };
    return colors[role] || 'default';
  };

  const getRoleLabel = (role) => {
    const labels = {
      rector: 'Ректор',
      dean: 'Декан',
      teacher: 'Омӯзгор',
      student: 'Донишҷӯ',
      super_admin: 'Супер Админ',
      department_head: 'Мудири кафедра',
    };
    return labels[role] || role;
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        👥 Корбарон
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <TextField
              placeholder="Ҷустуҷӯ..."
              value={filters.search}
              onChange={(e) => setFilters({ ...filters, search: e.target.value })}
              InputProps={{
                startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
              sx={{ minWidth: 250 }}
            />
            <TextField
              select
              label="Нақш"
              value={filters.role}
              onChange={(e) => setFilters({ ...filters, role: e.target.value })}
              sx={{ minWidth: 200 }}
            >
              <MenuItem value="">Ҳама</MenuItem>
              <MenuItem value="rector">Ректор</MenuItem>
              <MenuItem value="dean">Декан</MenuItem>
              <MenuItem value="teacher">Омӯзгор</MenuItem>
              <MenuItem value="student">Донишҷӯ</MenuItem>
            </TextField>
            {user.role === 'super_admin' && (
              <Button variant="contained" startIcon={<Add />}>
                Илова кардан
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'primary.light' }}>
              <TableCell sx={{ color: 'white', fontWeight: 700 }}>Корбар</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 700 }}>Нақш</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 700 }}>Email</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 700 }}>Телефон</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 700 }} align="center">Амалҳо</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id} hover>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      {u.fullName.charAt(0)}
                    </Avatar>
                    <Typography variant="body1" fontWeight={600}>
                      {u.fullName}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Chip label={getRoleLabel(u.role)} color={getRoleColor(u.role)} size="small" />
                </TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.phone}</TableCell>
                <TableCell align="center">
                  <IconButton size="small" color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton size="small" color="error">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Users;
