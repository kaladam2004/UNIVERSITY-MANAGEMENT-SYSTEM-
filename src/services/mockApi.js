// Мантиқи API-и сохта (Mock API)

import {
  users,
  faculties,
  departments,
  groups,
  subjects,
  schedules,
  grades,
  chatRooms,
  chatMessages,
  finances,
  libraryBooks,
  libraryBorrowings,
  exams,
  announcements,
  universityStats
} from './mockData';

// Функсияи кумакӣ барои симулятсияи таъхир (network latency)
const delay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// ===========================================
// AUTHENTICATION API
// ===========================================
export const authAPI = {
  login: async (login, password) => {
    await delay();
    
    const user = users.find(u => u.login === login && u.password === password);
    
    if (!user) {
      throw new Error('Логин ё парол нодуруст аст');
    }
    
    // Эҷоди токени сохта (Mock JWT)
    const token = btoa(JSON.stringify({ 
      userId: user.id, 
      role: user.role,
      timestamp: Date.now()
    }));
    
    return {
      user: {
        id: user.id,
        login: user.login,
        role: user.role,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
        facultyId: user.facultyId,
        departmentId: user.departmentId,
        groupId: user.groupId
      },
      token
    };
  },
  
  logout: async () => {
    await delay(100);
    return { success: true };
  },
  
  verifyToken: async (token) => {
    await delay(100);
    try {
      const decoded = JSON.parse(atob(token));
      const user = users.find(u => u.id === decoded.userId);
      
      if (!user) {
        throw new Error('Токен нодуруст аст');
      }
      
      return {
        user: {
          id: user.id,
          login: user.login,
          role: user.role,
          fullName: user.fullName,
          email: user.email,
          phone: user.phone,
          avatar: user.avatar,
          facultyId: user.facultyId,
          departmentId: user.departmentId,
          groupId: user.groupId
        }
      };
    } catch (error) {
      throw new Error('Токен нодуруст аст');
    }
  }
};

// ===========================================
// USERS API
// ===========================================
export const usersAPI = {
  getAll: async (filters = {}) => {
    await delay();
    
    let filteredUsers = [...users];
    
    if (filters.role) {
      filteredUsers = filteredUsers.filter(u => u.role === filters.role);
    }
    
    if (filters.facultyId) {
      filteredUsers = filteredUsers.filter(u => u.facultyId === filters.facultyId);
    }
    
    if (filters.departmentId) {
      filteredUsers = filteredUsers.filter(u => u.departmentId === filters.departmentId);
    }
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredUsers = filteredUsers.filter(u => 
        u.fullName.toLowerCase().includes(searchLower) ||
        u.email.toLowerCase().includes(searchLower)
      );
    }
    
    return filteredUsers.map(u => ({
      id: u.id,
      fullName: u.fullName,
      role: u.role,
      email: u.email,
      phone: u.phone,
      facultyId: u.facultyId,
      departmentId: u.departmentId,
      groupId: u.groupId
    }));
  },
  
  getById: async (id) => {
    await delay();
    const user = users.find(u => u.id === id);
    if (!user) throw new Error('Корбар ёфт нашуд');
    return user;
  },
  
  getStudentsByGroup: async (groupId) => {
    await delay();
    return users.filter(u => u.role === 'student' && u.groupId === groupId);
  }
};

// ===========================================
// FACULTIES API
// ===========================================
export const facultiesAPI = {
  getAll: async () => {
    await delay();
    return faculties.map(f => ({
      ...f,
      dean: users.find(u => u.id === f.deanId)
    }));
  },
  
  getById: async (id) => {
    await delay();
    const faculty = faculties.find(f => f.id === id);
    if (!faculty) throw new Error('Факултет ёфт нашуд');
    
    return {
      ...faculty,
      dean: users.find(u => u.id === faculty.deanId),
      departments: departments.filter(d => d.facultyId === id)
    };
  }
};

// ===========================================
// DEPARTMENTS API
// ===========================================
export const departmentsAPI = {
  getAll: async (facultyId = null) => {
    await delay();
    
    let filteredDepts = [...departments];
    
    if (facultyId) {
      filteredDepts = filteredDepts.filter(d => d.facultyId === facultyId);
    }
    
    return filteredDepts.map(d => ({
      ...d,
      head: users.find(u => u.id === d.headId),
      faculty: faculties.find(f => f.id === d.facultyId)
    }));
  },
  
  getById: async (id) => {
    await delay();
    const dept = departments.find(d => d.id === id);
    if (!dept) throw new Error('Кафедра ёфт нашуд');
    
    return {
      ...dept,
      head: users.find(u => u.id === dept.headId),
      faculty: faculties.find(f => f.id === dept.facultyId),
      teachers: users.filter(u => u.departmentId === id && u.role === 'teacher')
    };
  }
};

// ===========================================
// GROUPS API
// ===========================================
export const groupsAPI = {
  getAll: async (filters = {}) => {
    await delay();
    
    let filteredGroups = [...groups];
    
    if (filters.facultyId) {
      filteredGroups = filteredGroups.filter(g => g.facultyId === filters.facultyId);
    }
    
    if (filters.course) {
      filteredGroups = filteredGroups.filter(g => g.course === filters.course);
    }
    
    return filteredGroups.map(g => ({
      ...g,
      faculty: faculties.find(f => f.id === g.facultyId),
      department: departments.find(d => d.id === g.departmentId),
      curator: users.find(u => u.id === g.curatorId)
    }));
  },
  
  getById: async (id) => {
    await delay();
    const group = groups.find(g => g.id === id);
    if (!group) throw new Error('Гурӯҳ ёфт нашуд');
    
    return {
      ...group,
      faculty: faculties.find(f => f.id === group.facultyId),
      department: departments.find(d => d.id === group.departmentId),
      curator: users.find(u => u.id === group.curatorId),
      students: users.filter(u => u.groupId === id)
    };
  }
};

// ===========================================
// SUBJECTS API
// ===========================================
export const subjectsAPI = {
  getAll: async (filters = {}) => {
    await delay();
    
    let filteredSubjects = [...subjects];
    
    if (filters.departmentId) {
      filteredSubjects = filteredSubjects.filter(s => s.departmentId === filters.departmentId);
    }
    
    if (filters.semester) {
      filteredSubjects = filteredSubjects.filter(s => s.semester === filters.semester);
    }
    
    return filteredSubjects;
  },
  
  getById: async (id) => {
    await delay();
    const subject = subjects.find(s => s.id === id);
    if (!subject) throw new Error('Фан ёфт нашуд');
    return subject;
  }
};

// ===========================================
// SCHEDULE API
// ===========================================
export const scheduleAPI = {
  getByGroup: async (groupId) => {
    await delay();
    
    const groupSchedules = schedules.filter(s => s.groupId === groupId);
    
    return groupSchedules.map(s => ({
      ...s,
      subject: subjects.find(sub => sub.id === s.subjectId),
      teacher: users.find(u => u.id === s.teacherId),
      group: groups.find(g => g.id === s.groupId)
    }));
  },
  
  getByTeacher: async (teacherId) => {
    await delay();
    
    const teacherSchedules = schedules.filter(s => s.teacherId === teacherId);
    
    return teacherSchedules.map(s => ({
      ...s,
      subject: subjects.find(sub => sub.id === s.subjectId),
      teacher: users.find(u => u.id === s.teacherId),
      group: groups.find(g => g.id === s.groupId)
    }));
  },
  
  getByDay: async (dayOfWeek, filters = {}) => {
    await delay();
    
    let daySchedules = schedules.filter(s => s.dayOfWeek === dayOfWeek);
    
    if (filters.groupId) {
      daySchedules = daySchedules.filter(s => s.groupId === filters.groupId);
    }
    
    if (filters.teacherId) {
      daySchedules = daySchedules.filter(s => s.teacherId === filters.teacherId);
    }
    
    return daySchedules.map(s => ({
      ...s,
      subject: subjects.find(sub => sub.id === s.subjectId),
      teacher: users.find(u => u.id === s.teacherId),
      group: groups.find(g => g.id === s.groupId)
    }));
  }
};

// ===========================================
// GRADES API
// ===========================================
export const gradesAPI = {
  getByStudent: async (studentId) => {
    await delay();
    
    const studentGrades = grades.filter(g => g.studentId === studentId);
    
    return studentGrades.map(g => ({
      ...g,
      subject: subjects.find(s => s.id === g.subjectId),
      student: users.find(u => u.id === g.studentId)
    }));
  },
  
  getBySubject: async (subjectId) => {
    await delay();
    
    const subjectGrades = grades.filter(g => g.subjectId === subjectId);
    
    return subjectGrades.map(g => ({
      ...g,
      subject: subjects.find(s => s.id === g.subjectId),
      student: users.find(u => u.id === g.studentId)
    }));
  },
  
  updateGrade: async (id, newValue) => {
    await delay();
    
    const grade = grades.find(g => g.id === id);
    if (!grade) throw new Error('Баҳо ёфт нашуд');
    
    grade.value = newValue;
    return grade;
  }
};

// ===========================================
// CHAT API
// ===========================================
export const chatAPI = {
  getRooms: async (userId) => {
    await delay();
    
    const userRooms = chatRooms.filter(room => room.members.includes(userId));
    
    return userRooms.map(room => ({
      ...room,
      lastMessage: chatMessages
        .filter(m => m.roomId === room.id)
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0],
      unreadCount: chatMessages.filter(m => 
        m.roomId === room.id && 
        !m.isRead && 
        m.senderId !== userId
      ).length
    }));
  },
  
  getMessages: async (roomId) => {
    await delay();
    
    const roomMessages = chatMessages.filter(m => m.roomId === roomId);
    
    return roomMessages.map(m => ({
      ...m,
      sender: users.find(u => u.id === m.senderId)
    })).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
  },
  
  sendMessage: async (roomId, senderId, message, messageType = 'text') => {
    await delay();
    
    const newMessage = {
      id: chatMessages.length + 1,
      roomId,
      senderId,
      message,
      messageType,
      timestamp: new Date().toISOString(),
      isRead: false,
      isPinned: false
    };
    
    chatMessages.push(newMessage);
    
    return {
      ...newMessage,
      sender: users.find(u => u.id === senderId)
    };
  },
  
  uploadFile: async (roomId, senderId, file) => {
    await delay(500);
    
    const newMessage = {
      id: chatMessages.length + 1,
      roomId,
      senderId,
      message: file.name,
      messageType: 'file',
      fileUrl: `/files/${file.name}`,
      fileName: file.name,
      fileSize: file.size,
      timestamp: new Date().toISOString(),
      isRead: false,
      isPinned: false
    };
    
    chatMessages.push(newMessage);
    
    return {
      ...newMessage,
      sender: users.find(u => u.id === senderId)
    };
  }
};

// ===========================================
// FINANCE API
// ===========================================
export const financeAPI = {
  getByStudent: async (studentId) => {
    await delay();
    return finances.filter(f => f.studentId === studentId);
  },
  
  getSummary: async (filters = {}) => {
    await delay();
    
    let filteredFinances = [...finances];
    
    if (filters.type) {
      filteredFinances = filteredFinances.filter(f => f.type === filters.type);
    }
    
    if (filters.semester) {
      filteredFinances = filteredFinances.filter(f => f.semester === filters.semester);
    }
    
    const totalIncome = filteredFinances
      .filter(f => f.type === 'tuition')
      .reduce((sum, f) => sum + (f.paidAmount || f.amount), 0);
    
    const totalExpense = filteredFinances
      .filter(f => f.type === 'scholarship')
      .reduce((sum, f) => sum + f.amount, 0);
    
    return {
      totalIncome,
      totalExpense,
      balance: totalIncome - totalExpense,
      transactions: filteredFinances
    };
  }
};

// ===========================================
// LIBRARY API
// ===========================================
export const libraryAPI = {
  getBooks: async (filters = {}) => {
    await delay();
    
    let filteredBooks = [...libraryBooks];
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredBooks = filteredBooks.filter(b =>
        b.title.toLowerCase().includes(searchLower) ||
        b.author.toLowerCase().includes(searchLower)
      );
    }
    
    if (filters.category) {
      filteredBooks = filteredBooks.filter(b => b.category === filters.category);
    }
    
    return filteredBooks;
  },
  
  getBorrowings: async (userId) => {
    await delay();
    
    const userBorrowings = libraryBorrowings.filter(b => b.userId === userId);
    
    return userBorrowings.map(b => ({
      ...b,
      book: libraryBooks.find(book => book.id === b.bookId),
      user: users.find(u => u.id === b.userId)
    }));
  }
};

// ===========================================
// EXAMS API
// ===========================================
export const examsAPI = {
  getByGroup: async (groupId) => {
    await delay();
    
    const groupExams = exams.filter(e => e.groupId === groupId);
    
    return groupExams.map(e => ({
      ...e,
      subject: subjects.find(s => s.id === e.subjectId),
      teacher: users.find(u => u.id === e.teacherId),
      group: groups.find(g => g.id === e.groupId)
    }));
  },
  
  getUpcoming: async (groupId) => {
    await delay();
    
    const now = new Date();
    const groupExams = exams.filter(e => 
      e.groupId === groupId && 
      new Date(e.date) > now
    );
    
    return groupExams
      .map(e => ({
        ...e,
        subject: subjects.find(s => s.id === e.subjectId),
        teacher: users.find(u => u.id === e.teacherId)
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }
};

// ===========================================
// ANNOUNCEMENTS API
// ===========================================
export const announcementsAPI = {
  getAll: async (targetAudience = 'all') => {
    await delay();
    
    return announcements
      .filter(a => 
        a.isActive && 
        (a.targetAudience === 'all' || a.targetAudience === targetAudience)
      )
      .map(a => ({
        ...a,
        author: users.find(u => u.id === a.authorId)
      }))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }
};

// ===========================================
// STATISTICS API
// ===========================================
export const statisticsAPI = {
  getUniversityStats: async () => {
    await delay();
    return universityStats;
  },
  
  getFacultyStats: async (facultyId) => {
    await delay();
    
    const faculty = faculties.find(f => f.id === facultyId);
    if (!faculty) throw new Error('Факултет ёфт нашуд');
    
    const facultyDepartments = departments.filter(d => d.facultyId === facultyId);
    const facultyStudents = users.filter(u => u.facultyId === facultyId && u.role === 'student');
    const facultyTeachers = users.filter(u => u.facultyId === facultyId && u.role === 'teacher');
    
    return {
      faculty: faculty.name,
      studentCount: facultyStudents.length,
      teacherCount: facultyTeachers.length,
      departmentCount: facultyDepartments.length,
      groupCount: groups.filter(g => g.facultyId === facultyId).length
    };
  },
  
  getStudentPerformance: async (studentId) => {
    await delay();
    
    const studentGrades = grades.filter(g => g.studentId === studentId);
    
    if (studentGrades.length === 0) {
      return { averageGrade: 0, totalGrades: 0 };
    }
    
    const total = studentGrades.reduce((sum, g) => sum + g.value, 0);
    const average = total / studentGrades.length;
    
    return {
      averageGrade: Math.round(average * 10) / 10,
      totalGrades: studentGrades.length,
      gradesBySubject: studentGrades.reduce((acc, g) => {
        const subject = subjects.find(s => s.id === g.subjectId);
        if (!acc[subject.name]) {
          acc[subject.name] = [];
        }
        acc[subject.name].push(g.value);
        return acc;
      }, {})
    };
  }
};

export default {
  auth: authAPI,
  users: usersAPI,
  faculties: facultiesAPI,
  departments: departmentsAPI,
  groups: groupsAPI,
  subjects: subjectsAPI,
  schedule: scheduleAPI,
  grades: gradesAPI,
  chat: chatAPI,
  finance: financeAPI,
  library: libraryAPI,
  exams: examsAPI,
  announcements: announcementsAPI,
  statistics: statisticsAPI
};
