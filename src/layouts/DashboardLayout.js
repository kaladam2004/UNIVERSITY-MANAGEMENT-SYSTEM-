import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Badge,
  Tooltip,
  useTheme as useMuiTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard,
  People,
  School,
  Business,
  Person,
  Schedule,
  Grade,
  Chat,
  AccountBalance,
  LibraryBooks,
  Announcement,
  Settings,
  Logout,
  Brightness4,
  Brightness7,
  Language,
  Notifications,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const drawerWidth = 280;

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { mode, toggleTheme, language, changeLanguage, t } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLangMenuOpen = (event) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleLangMenuClose = () => {
    setLangAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const handleChangeLang = (lang) => {
    changeLanguage(lang);
    handleLangMenuClose();
  };

  // Меню вобаста ба нақши корбар
  const getMenuItems = () => {
    const baseItems = [
      { text: t('menu.dashboard'), icon: <Dashboard />, path: '/' },
    ];

    // Меню барои Ректор ва Админ
    if (user.role === 'rector' || user.role === 'super_admin') {
      return [
        ...baseItems,
        { text: t('menu.users'), icon: <People />, path: '/users' },
        { text: t('menu.faculties'), icon: <School />, path: '/faculties' },
        { text: t('menu.departments'), icon: <Business />, path: '/departments' },
        { text: t('menu.students'), icon: <Person />, path: '/students' },
        { text: t('menu.teachers'), icon: <Person />, path: '/teachers' },
        { text: t('menu.schedule'), icon: <Schedule />, path: '/schedule' },
        { text: t('menu.grades'), icon: <Grade />, path: '/grades' },
        { text: t('menu.chat'), icon: <Chat />, path: '/chat' },
        { text: t('menu.finance'), icon: <AccountBalance />, path: '/finance' },
        { text: t('menu.library'), icon: <LibraryBooks />, path: '/library' },
        { text: t('menu.announcements'), icon: <Announcement />, path: '/announcements' },
      ];
    }

    // Меню барои Декан
    if (user.role === 'dean') {
      return [
        ...baseItems,
        { text: t('menu.departments'), icon: <Business />, path: '/departments' },
        { text: t('menu.students'), icon: <Person />, path: '/students' },
        { text: t('menu.teachers'), icon: <Person />, path: '/teachers' },
        { text: t('menu.schedule'), icon: <Schedule />, path: '/schedule' },
        { text: t('menu.grades'), icon: <Grade />, path: '/grades' },
        { text: t('menu.chat'), icon: <Chat />, path: '/chat' },
        { text: t('menu.announcements'), icon: <Announcement />, path: '/announcements' },
      ];
    }

    // Меню барои Омӯзгор
    if (user.role === 'teacher') {
      return [
        ...baseItems,
        { text: t('menu.students'), icon: <Person />, path: '/students' },
        { text: t('menu.schedule'), icon: <Schedule />, path: '/schedule' },
        { text: t('menu.grades'), icon: <Grade />, path: '/grades' },
        { text: t('menu.chat'), icon: <Chat />, path: '/chat' },
        { text: t('menu.announcements'), icon: <Announcement />, path: '/announcements' },
      ];
    }

    // Меню барои Донишҷӯ
    if (user.role === 'student') {
      return [
        ...baseItems,
        { text: t('menu.schedule'), icon: <Schedule />, path: '/schedule' },
        { text: t('menu.grades'), icon: <Grade />, path: '/grades' },
        { text: t('menu.chat'), icon: <Chat />, path: '/chat' },
        { text: t('menu.library'), icon: <LibraryBooks />, path: '/library' },
        { text: t('menu.announcements'), icon: <Announcement />, path: '/announcements' },
      ];
    }

    return baseItems;
  };

  const menuItems = getMenuItems();

  const drawer = (
    <Box>
      <Toolbar
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }}
      >
        <School sx={{ mr: 2, fontSize: 32 }} />
        <Box>
          <Typography variant="h6" fontWeight={700}>
            TNУ
          </Typography>
          <Typography variant="caption">
            {user.role === 'rector' ? 'Ректор' : 
             user.role === 'dean' ? 'Декан' :
             user.role === 'teacher' ? 'Омӯзгор' :
             user.role === 'student' ? 'Донишҷӯ' : 'Админ'}
          </Typography>
        </Box>
      </Toolbar>

      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            p: 2,
            bgcolor: 'primary.light',
            borderRadius: 2,
            color: 'white',
          }}
        >
          <Avatar
            sx={{
              width: 50,
              height: 50,
              bgcolor: 'white',
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            {user.fullName.charAt(0)}
          </Avatar>
          <Box sx={{ flex: 1, overflow: 'hidden' }}>
            <Typography variant="body1" fontWeight={600} noWrap>
              {user.fullName}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.9 }}>
              {user.email}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider />

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
                if (isMobile) setMobileOpen(false);
              }}
              sx={{
                '&:hover': {
                  bgcolor: 'primary.light',
                  color: 'white',
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: 'primary.main' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            {t('app.university')}
          </Typography>

          <Tooltip title="Эълонҳо">
            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <Notifications />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title="Забон">
            <IconButton color="inherit" onClick={handleLangMenuOpen}>
              <Language />
            </IconButton>
          </Tooltip>

          <Tooltip title={mode === 'light' ? 'Режими торик' : 'Режими равшан'}>
            <IconButton color="inherit" onClick={toggleTheme}>
              {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </Tooltip>

          <IconButton
            edge="end"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar sx={{ width: 36, height: 36, bgcolor: 'primary.main' }}>
              {user.fullName.charAt(0)}
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleProfileMenuClose}
      >
        <MenuItem onClick={() => { navigate('/profile'); handleProfileMenuClose(); }}>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          Профил
        </MenuItem>
        <MenuItem onClick={handleProfileMenuClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Танзимот
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {t('button.logout')}
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={langAnchorEl}
        open={Boolean(langAnchorEl)}
        onClose={handleLangMenuClose}
      >
        <MenuItem onClick={() => handleChangeLang('tg')} selected={language === 'tg'}>
          🇹🇯 Тоҷикӣ
        </MenuItem>
        <MenuItem onClick={() => handleChangeLang('ru')} selected={language === 'ru'}>
          🇷🇺 Русский
        </MenuItem>
        <MenuItem onClick={() => handleChangeLang('en')} selected={language === 'en'}>
          🇬🇧 English
        </MenuItem>
      </Menu>

      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: 8,
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
