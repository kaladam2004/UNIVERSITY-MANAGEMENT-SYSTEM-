import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Grid,
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  TextField,
  IconButton,
  Badge,
  Divider,
  Chip,
  Paper,
  Button,
} from '@mui/material';
import {
  Send,
  AttachFile,
  Person,
  Group,
  PushPin,
  InsertDriveFile,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import mockApi from '../services/mockApi';

const Chat = () => {
  const { user } = useAuth();
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    loadRooms();
  }, []);

  useEffect(() => {
    if (selectedRoom) {
      loadMessages(selectedRoom.id);
    }
  }, [selectedRoom]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadRooms = async () => {
    try {
      const data = await mockApi.chat.getRooms(user.id);
      setRooms(data);
      if (data.length > 0 && !selectedRoom) {
        setSelectedRoom(data[0]);
      }
    } catch (error) {
      console.error('Хатогӣ:', error);
    }
  };

  const loadMessages = async (roomId) => {
    try {
      const data = await mockApi.chat.getMessages(roomId);
      setMessages(data);
    } catch (error) {
      console.error('Хатогӣ:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !selectedRoom) return;

    try {
      const message = await mockApi.chat.sendMessage(
        selectedRoom.id,
        user.id,
        newMessage
      );
      
      setMessages([...messages, message]);
      setNewMessage('');
    } catch (error) {
      console.error('Хатогӣ:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getRoomIcon = (room) => {
    if (room.type === 'admin') return '🏛️';
    if (room.type === 'faculty') return '🎓';
    if (room.type === 'course') return '📚';
    if (room.type === 'group') return '👥';
    return '💬';
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('tg-TJ', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        💬 Чат
      </Typography>

      <Grid container spacing={2} sx={{ height: 'calc(100vh - 200px)' }}>
        {/* Рӯйхати чатҳо */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', overflow: 'auto' }}>
            <List sx={{ p: 0 }}>
              {rooms.map((room) => (
                <React.Fragment key={room.id}>
                  <ListItemButton
                    selected={selectedRoom?.id === room.id}
                    onClick={() => setSelectedRoom(room)}
                    sx={{
                      '&.Mui-selected': {
                        bgcolor: 'primary.light',
                        color: 'white',
                        '&:hover': {
                          bgcolor: 'primary.main',
                        },
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'primary.main' }}>
                        {getRoomIcon(room)}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="body1" fontWeight={600} noWrap>
                            {room.title}
                          </Typography>
                          {room.unreadCount > 0 && (
                            <Badge badgeContent={room.unreadCount} color="error" />
                          )}
                        </Box>
                      }
                      secondary={
                        room.lastMessage ? (
                          <Typography variant="caption" noWrap>
                            {room.lastMessage.message}
                          </Typography>
                        ) : (
                          'Паёме нест'
                        )
                      }
                    />
                  </ListItemButton>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Card>
        </Grid>

        {/* Равзанаи чат */}
        <Grid item xs={12} md={8}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {selectedRoom ? (
              <>
                {/* Сарлавҳа */}
                <Box
                  sx={{
                    p: 2,
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <Avatar sx={{ bgcolor: 'white', color: 'primary.main' }}>
                    {getRoomIcon(selectedRoom)}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" fontWeight={600}>
                      {selectedRoom.title}
                    </Typography>
                    <Typography variant="caption">
                      {selectedRoom.members?.length} иштирокчӣ
                    </Typography>
                  </Box>
                </Box>

                {/* Паёмҳо */}
                <Box
                  sx={{
                    flex: 1,
                    overflow: 'auto',
                    p: 2,
                    bgcolor: 'background.default',
                  }}
                >
                  {messages.map((msg) => {
                    const isOwn = msg.senderId === user.id;
                    
                    return (
                      <Box
                        key={msg.id}
                        sx={{
                          display: 'flex',
                          justifyContent: isOwn ? 'flex-end' : 'flex-start',
                          mb: 2,
                        }}
                      >
                        <Box sx={{ maxWidth: '70%' }}>
                          {!isOwn && (
                            <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                              {msg.sender?.fullName}
                            </Typography>
                          )}
                          
                          <Paper
                            sx={{
                              p: 1.5,
                              bgcolor: isOwn ? 'primary.main' : 'background.paper',
                              color: isOwn ? 'white' : 'text.primary',
                              position: 'relative',
                            }}
                          >
                            {msg.isPinned && (
                              <Chip
                                icon={<PushPin />}
                                label="Махкамшуда"
                                size="small"
                                color="warning"
                                sx={{ mb: 1 }}
                              />
                            )}
                            
                            {msg.messageType === 'file' ? (
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <InsertDriveFile />
                                <Box>
                                  <Typography variant="body2" fontWeight={600}>
                                    {msg.fileName}
                                  </Typography>
                                  <Typography variant="caption">
                                    {(msg.fileSize / 1024 / 1024).toFixed(2)} MB
                                  </Typography>
                                </Box>
                              </Box>
                            ) : msg.messageType === 'task' ? (
                              <Box>
                                <Chip label="ВАЗИФА" color="warning" size="small" sx={{ mb: 1 }} />
                                <Typography variant="body1">{msg.message}</Typography>
                                {msg.taskDeadline && (
                                  <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
                                    Мӯҳлат: {new Date(msg.taskDeadline).toLocaleDateString('tg-TJ')}
                                  </Typography>
                                )}
                              </Box>
                            ) : (
                              <Typography variant="body1">{msg.message}</Typography>
                            )}
                            
                            <Typography
                              variant="caption"
                              sx={{
                                display: 'block',
                                mt: 0.5,
                                opacity: 0.8,
                                textAlign: 'right',
                              }}
                            >
                              {formatTime(msg.timestamp)}
                            </Typography>
                          </Paper>
                        </Box>
                      </Box>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </Box>

                {/* Майдони нависи паём */}
                <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton size="small">
                      <AttachFile />
                    </IconButton>
                    <TextField
                      fullWidth
                      multiline
                      maxRows={4}
                      placeholder="Паёмро нависед..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      variant="outlined"
                      size="small"
                    />
                    <IconButton
                      color="primary"
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        '&:hover': { bgcolor: 'primary.dark' },
                      }}
                    >
                      <Send />
                    </IconButton>
                  </Box>
                </Box>
              </>
            ) : (
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'text.secondary',
                }}
              >
                <Typography>Чатро интихоб кунед</Typography>
              </Box>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chat;
