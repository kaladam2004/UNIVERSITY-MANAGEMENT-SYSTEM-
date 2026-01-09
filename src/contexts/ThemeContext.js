import React, { createContext, useContext, useState, createContext as createReactContext } from 'react';

const ThemeContext = createReactContext(null);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme бояд дар дохили ThemeProvider истифода шавад');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('tnu_theme_mode');
    return savedMode || 'light';
  });

  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('tnu_language');
    return savedLang || 'tg';
  });

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('tnu_theme_mode', newMode);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('tnu_language', lang);
  };

  const t = (key) => {
    const translations = {
      // Асосӣ
      'app.title': {
        tg: 'Системаи Идоракунии Донишгоҳ',
        ru: 'Система Управления Университетом',
        en: 'University Management System'
      },
      'app.university': {
        tg: 'Донишгоҳи Миллии Тоҷикистон',
        ru: 'Таджикский Национальный Университет',
        en: 'Tajik National University'
      },
      
      // Меню
      'menu.dashboard': {
        tg: 'Дашборд',
        ru: 'Панель управления',
        en: 'Dashboard'
      },
      'menu.users': {
        tg: 'Корбарон',
        ru: 'Пользователи',
        en: 'Users'
      },
      'menu.faculties': {
        tg: 'Факултетҳо',
        ru: 'Факультеты',
        en: 'Faculties'
      },
      'menu.departments': {
        tg: 'Кафедраҳо',
        ru: 'Кафедры',
        en: 'Departments'
      },
      'menu.students': {
        tg: 'Донишҷӯён',
        ru: 'Студенты',
        en: 'Students'
      },
      'menu.teachers': {
        tg: 'Омӯзгорон',
        ru: 'Преподаватели',
        en: 'Teachers'
      },
      'menu.schedule': {
        tg: 'Ҷадвал',
        ru: 'Расписание',
        en: 'Schedule'
      },
      'menu.grades': {
        tg: 'Баҳоҳо',
        ru: 'Оценки',
        en: 'Grades'
      },
      'menu.chat': {
        tg: 'Чат',
        ru: 'Чат',
        en: 'Chat'
      },
      'menu.finance': {
        tg: 'Молия',
        ru: 'Финансы',
        en: 'Finance'
      },
      'menu.library': {
        tg: 'Китобхона',
        ru: 'Библиотека',
        en: 'Library'
      },
      'menu.announcements': {
        tg: 'Эълонҳо',
        ru: 'Объявления',
        en: 'Announcements'
      },
      
      // Дашборд
      'dashboard.welcome': {
        tg: 'Хуш омадед',
        ru: 'Добро пожаловать',
        en: 'Welcome'
      },
      'dashboard.totalStudents': {
        tg: 'Ҳамагӣ донишҷӯён',
        ru: 'Всего студентов',
        en: 'Total Students'
      },
      'dashboard.totalTeachers': {
        tg: 'Ҳамагӣ омӯзгорон',
        ru: 'Всего преподавателей',
        en: 'Total Teachers'
      },
      'dashboard.totalFaculties': {
        tg: 'Факултетҳо',
        ru: 'Факультеты',
        en: 'Faculties'
      },
      'dashboard.todaySchedule': {
        tg: 'Ҷадвали имрӯза',
        ru: 'Расписание на сегодня',
        en: "Today's Schedule"
      },
      
      // Формаҳо
      'form.login': {
        tg: 'Логин',
        ru: 'Логин',
        en: 'Login'
      },
      'form.password': {
        tg: 'Парол',
        ru: 'Пароль',
        en: 'Password'
      },
      'form.email': {
        tg: 'Почтаи электронӣ',
        ru: 'Электронная почта',
        en: 'Email'
      },
      'form.phone': {
        tg: 'Телефон',
        ru: 'Телефон',
        en: 'Phone'
      },
      'form.fullName': {
        tg: 'Ному насаб',
        ru: 'ФИО',
        en: 'Full Name'
      },
      'form.search': {
        tg: 'Ҷустуҷӯ...',
        ru: 'Поиск...',
        en: 'Search...'
      },
      
      // Тугмаҳо
      'button.login': {
        tg: 'Ворид шудан',
        ru: 'Войти',
        en: 'Login'
      },
      'button.logout': {
        tg: 'Баромадан',
        ru: 'Выйти',
        en: 'Logout'
      },
      'button.save': {
        tg: 'Сабт кардан',
        ru: 'Сохранить',
        en: 'Save'
      },
      'button.cancel': {
        tg: 'Бекор кардан',
        ru: 'Отмена',
        en: 'Cancel'
      },
      'button.send': {
        tg: 'Фиристодан',
        ru: 'Отправить',
        en: 'Send'
      },
      'button.upload': {
        tg: 'Боргузорӣ',
        ru: 'Загрузить',
        en: 'Upload'
      },
      
      // Нақшҳо
      'role.rector': {
        tg: 'Ректор',
        ru: 'Ректор',
        en: 'Rector'
      },
      'role.dean': {
        tg: 'Декан',
        ru: 'Декан',
        en: 'Dean'
      },
      'role.teacher': {
        tg: 'Омӯзгор',
        ru: 'Преподаватель',
        en: 'Teacher'
      },
      'role.student': {
        tg: 'Донишҷӯ',
        ru: 'Студент',
        en: 'Student'
      },
      'role.admin': {
        tg: 'Админ',
        ru: 'Админ',
        en: 'Admin'
      }
    };

    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation['tg'];
  };

  const value = {
    mode,
    language,
    toggleTheme,
    changeLanguage,
    t
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
