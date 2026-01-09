// Тамоми маълумоти демо барои системаи TNУ

// ===========================================
// 1. КОРБАРОН (USERS)
// ===========================================
export const users = [
  // РЕКТОР
  {
    id: 1,
    login: "rector",
    password: "rector123",
    role: "rector",
    fullName: "Раҳимзода Фарҳод Неъматович",
    email: "rector@tnu.tj",
    phone: "+992 918 123 456",
    avatar: null,
    facultyId: null,
    departmentId: null
  },
  
  // МУОВИНИ РЕКТОР ОИД БА ТАЪЛИМ
  {
    id: 2,
    login: "vice_education",
    password: "vice123",
    role: "vice_rector_education",
    fullName: "Собирова Нилуфар Алиевна",
    email: "vice.edu@tnu.tj",
    phone: "+992 918 234 567",
    avatar: null,
    facultyId: null,
    departmentId: null
  },
  
  // МУОВИНИ РЕКТОР ОИД БА ИЛМ
  {
    id: 3,
    login: "vice_science",
    password: "vice123",
    role: "vice_rector_science",
    fullName: "Исмоилов Санҷар Раҳмонович",
    email: "vice.sci@tnu.tj",
    phone: "+992 918 345 678",
    avatar: null,
    facultyId: null,
    departmentId: null
  },
  
  // ДЕКАН ФАКУЛТЕТИ МАТЕМАТИКА
  {
    id: 4,
    login: "dean_math",
    password: "dean123",
    role: "dean",
    fullName: "Юсупов Азиз Муродович",
    email: "dean.math@tnu.tj",
    phone: "+992 918 456 789",
    avatar: null,
    facultyId: 1,
    departmentId: null
  },
  
  // ДЕКАН ФАКУЛТЕТИ ФИЗИКА
  {
    id: 5,
    login: "dean_physics",
    password: "dean123",
    role: "dean",
    fullName: "Қодирова Малика Шарифовна",
    email: "dean.phys@tnu.tj",
    phone: "+992 918 567 890",
    avatar: null,
    facultyId: 2,
    departmentId: null
  },
  
  // ДЕКАН ФАКУЛТЕТИ ИҚТИСОДИЁТ
  {
    id: 6,
    login: "dean_economics",
    password: "dean123",
    role: "dean",
    fullName: "Раҳимов Ҷамшед Акбарович",
    email: "dean.econ@tnu.tj",
    phone: "+992 918 678 901",
    avatar: null,
    facultyId: 3,
    departmentId: null
  },
  
  // МУДИРИ КАФЕДРАИ МАТЕМАТИКАИ ОЛӢ
  {
    id: 7,
    login: "head_higher_math",
    password: "head123",
    role: "department_head",
    fullName: "Назаров Баҳодур Раҳимович",
    email: "head.hmath@tnu.tj",
    phone: "+992 918 789 012",
    avatar: null,
    facultyId: 1,
    departmentId: 1
  },
  
  // МУДИРИ КАФЕДРАИ ГЕОМЕТРИЯ
  {
    id: 8,
    login: "head_geometry",
    password: "head123",
    role: "department_head",
    fullName: "Ҳакимова Зарина Саидовна",
    email: "head.geom@tnu.tj",
    phone: "+992 918 890 123",
    avatar: null,
    facultyId: 1,
    departmentId: 2
  },
  
  // МУДИРИ КАФЕДРАИ ФИЗИКАИ НАЗАРИЯВӢ
  {
    id: 9,
    login: "head_theoretical_physics",
    password: "head123",
    role: "department_head",
    fullName: "Алиев Фаррух Содиқович",
    email: "head.tphys@tnu.tj",
    phone: "+992 918 901 234",
    avatar: null,
    facultyId: 2,
    departmentId: 3
  },
  
  // МУДИРИ КАФЕДРАИ ИҚТИСОДИЁТИ МАКРО
  {
    id: 10,
    login: "head_macroeconomics",
    password: "head123",
    role: "department_head",
    fullName: "Шарипова Гулчеҳра Муҳаммадиевна",
    email: "head.macro@tnu.tj",
    phone: "+992 919 012 345",
    avatar: null,
    facultyId: 3,
    departmentId: 4
  },
  
  // МУДИРИ КАФЕДРАИ МОЛИЯ
  {
    id: 11,
    login: "head_finance",
    password: "head123",
    role: "department_head",
    fullName: "Каримов Достон Раҳматович",
    email: "head.fin@tnu.tj",
    phone: "+992 919 123 456",
    avatar: null,
    facultyId: 3,
    departmentId: 5
  },
  
  // ОМӮЗГОР 1 - Математика
  {
    id: 12,
    login: "teacher_math1",
    password: "teacher123",
    role: "teacher",
    fullName: "Муҳаммадов Акбар Ҷамшедович",
    email: "t.math1@tnu.tj",
    phone: "+992 919 234 567",
    avatar: null,
    facultyId: 1,
    departmentId: 1,
    academicDegree: "Доктори илмҳои физикӣ-математикӣ",
    position: "Профессор"
  },
  
  // ОМӮЗГОР 2 - Геометрия
  {
    id: 13,
    login: "teacher_geom1",
    password: "teacher123",
    role: "teacher",
    fullName: "Раҳмонова Ситора Неъматовна",
    email: "t.geom1@tnu.tj",
    phone: "+992 919 345 678",
    avatar: null,
    facultyId: 1,
    departmentId: 2,
    academicDegree: "Номзади илм",
    position: "Дотсент"
  },
  
  // ОМӮЗГОР 3 - Физика
  {
    id: 14,
    login: "teacher_phys1",
    password: "teacher123",
    role: "teacher",
    fullName: "Саидов Шариф Баҳодурович",
    email: "t.phys1@tnu.tj",
    phone: "+992 919 456 789",
    avatar: null,
    facultyId: 2,
    departmentId: 3,
    academicDegree: "Доктори илм",
    position: "Профессор"
  },
  
  // ОМӮЗГОР 4 - Иқтисодиёт
  {
    id: 15,
    login: "teacher_econ1",
    password: "teacher123",
    role: "teacher",
    fullName: "Юсуфова Нигора Алимардоновна",
    email: "t.econ1@tnu.tj",
    phone: "+992 919 567 890",
    avatar: null,
    facultyId: 3,
    departmentId: 4,
    academicDegree: "Номзади илм",
    position: "Дотсент"
  },
  
  // ОМӮЗГОР 5 - Молия
  {
    id: 16,
    login: "teacher_fin1",
    password: "teacher123",
    role: "teacher",
    fullName: "Холов Фарход Раҳмонович",
    email: "t.fin1@tnu.tj",
    phone: "+992 919 678 901",
    avatar: null,
    facultyId: 3,
    departmentId: 5,
    academicDegree: "Магистр",
    position: "Омӯзгор"
  },
  
  // ДОНИШҶӮЁН - Гурӯҳи 301 (Математика)
  {
    id: 17,
    login: "student1",
    password: "student123",
    role: "student",
    fullName: "Мирзоев Давлат Шерович",
    email: "s301.1@tnu.tj",
    phone: "+992 900 111 222",
    avatar: null,
    facultyId: 1,
    departmentId: 1,
    groupId: 1,
    course: 3,
    specialty: "Математикаи амалӣ",
    studentId: "2021-301-001",
    admissionYear: 2021
  },
  
  {
    id: 18,
    login: "student2",
    password: "student123",
    role: "student",
    fullName: "Раҳимова Зарина Муродовна",
    email: "s301.2@tnu.tj",
    phone: "+992 900 222 333",
    avatar: null,
    facultyId: 1,
    departmentId: 1,
    groupId: 1,
    course: 3,
    specialty: "Математикаи амалӣ",
    studentId: "2021-301-002",
    admissionYear: 2021
  },
  
  {
    id: 19,
    login: "student3",
    password: "student123",
    role: "student",
    fullName: "Султонов Ҷамшед Алиевич",
    email: "s301.3@tnu.tj",
    phone: "+992 900 333 444",
    avatar: null,
    facultyId: 1,
    departmentId: 1,
    groupId: 1,
    course: 3,
    specialty: "Математикаи амалӣ",
    studentId: "2021-301-003",
    admissionYear: 2021
  },
  
  {
    id: 20,
    login: "student4",
    password: "student123",
    role: "student",
    fullName: "Неъматова Нилуфар Баҳодуровна",
    email: "s301.4@tnu.tj",
    phone: "+992 900 444 555",
    avatar: null,
    facultyId: 1,
    departmentId: 1,
    groupId: 1,
    course: 3,
    specialty: "Математикаи амалӣ",
    studentId: "2021-301-004",
    admissionYear: 2021
  },
  
  {
    id: 21,
    login: "student5",
    password: "student123",
    role: "student",
    fullName: "Исмоилов Анвар Раҳматович",
    email: "s301.5@tnu.tj",
    phone: "+992 900 555 666",
    avatar: null,
    facultyId: 1,
    departmentId: 1,
    groupId: 1,
    course: 3,
    specialty: "Математикаи амалӣ",
    studentId: "2021-301-005",
    admissionYear: 2021
  },
  
  // АДМИН
  {
    id: 22,
    login: "admin",
    password: "admin123",
    role: "super_admin",
    fullName: "Ҷабборов Искандар Муҳаммадович",
    email: "admin@tnu.tj",
    phone: "+992 918 999 888",
    avatar: null,
    facultyId: null,
    departmentId: null
  }
];

// ===========================================
// 2. ФАКУЛТЕТҲО (FACULTIES)
// ===========================================
export const faculties = [
  {
    id: 1,
    name: "Факултети математика ва информатика",
    nameRu: "Факультет математики и информатики",
    nameEn: "Faculty of Mathematics and Informatics",
    code: "MATH",
    deanId: 4,
    foundedYear: 1948,
    studentCount: 420,
    teacherCount: 45
  },
  {
    id: 2,
    name: "Факултети физика",
    nameRu: "Факультет физики",
    nameEn: "Faculty of Physics",
    code: "PHYS",
    deanId: 5,
    foundedYear: 1950,
    studentCount: 380,
    teacherCount: 38
  },
  {
    id: 3,
    name: "Факултети иқтисодиёт",
    nameRu: "Факультет экономики",
    nameEn: "Faculty of Economics",
    code: "ECON",
    deanId: 6,
    foundedYear: 1955,
    studentCount: 650,
    teacherCount: 52
  }
];

// ===========================================
// 3. КАФЕДРАҲО (DEPARTMENTS)
// ===========================================
export const departments = [
  {
    id: 1,
    name: "Кафедраи математикаи олӣ",
    nameRu: "Кафедра высшей математики",
    nameEn: "Department of Higher Mathematics",
    code: "HMATH",
    facultyId: 1,
    headId: 7,
    teacherCount: 18
  },
  {
    id: 2,
    name: "Кафедраи геометрия ва топология",
    nameRu: "Кафедра геометрии и топологии",
    nameEn: "Department of Geometry and Topology",
    code: "GEOM",
    facultyId: 1,
    headId: 8,
    teacherCount: 12
  },
  {
    id: 3,
    name: "Кафедраи физикаи назариявӣ",
    nameRu: "Кафедра теоретической физики",
    nameEn: "Department of Theoretical Physics",
    code: "TPHYS",
    facultyId: 2,
    headId: 9,
    teacherCount: 15
  },
  {
    id: 4,
    name: "Кафедраи иқтисодиёти макро",
    nameRu: "Кафедра макроэкономики",
    nameEn: "Department of Macroeconomics",
    code: "MACRO",
    facultyId: 3,
    headId: 10,
    teacherCount: 20
  },
  {
    id: 5,
    name: "Кафедраи молия ва банкдорӣ",
    nameRu: "Кафедра финансов и банковского дела",
    nameEn: "Department of Finance and Banking",
    code: "FIN",
    facultyId: 3,
    headId: 11,
    teacherCount: 16
  }
];

// ===========================================
// 4. ГУРӮҲҲО (GROUPS)
// ===========================================
export const groups = [
  {
    id: 1,
    name: "301",
    facultyId: 1,
    departmentId: 1,
    course: 3,
    specialty: "Математикаи амалӣ",
    studentCount: 5,
    curatorId: 12,
    academicYear: "2023-2024"
  }
];

// ===========================================
// 5. ФАНҲО (SUBJECTS)
// ===========================================
export const subjects = [
  {
    id: 1,
    name: "Таҳлили математикӣ III",
    nameRu: "Математический анализ III",
    nameEn: "Mathematical Analysis III",
    code: "MATH301",
    credits: 5,
    hours: 120,
    departmentId: 1,
    semester: 5
  },
  {
    id: 2,
    name: "Алгебраи хаттӣ ва геометрияи аналитикӣ",
    nameRu: "Линейная алгебра и аналитическая геометрия",
    nameEn: "Linear Algebra and Analytic Geometry",
    code: "MATH302",
    credits: 4,
    hours: 96,
    departmentId: 1,
    semester: 5
  },
  {
    id: 3,
    name: "Усулҳои ҳисобӣ",
    nameRu: "Численные методы",
    nameEn: "Numerical Methods",
    code: "MATH303",
    credits: 4,
    hours: 96,
    departmentId: 1,
    semester: 5
  },
  {
    id: 4,
    name: "Эҳтимолият ва статистика",
    nameRu: "Теория вероятностей и статистика",
    nameEn: "Probability and Statistics",
    code: "MATH304",
    credits: 4,
    hours: 96,
    departmentId: 1,
    semester: 5
  },
  {
    id: 5,
    name: "Забони англисӣ",
    nameRu: "Английский язык",
    nameEn: "English Language",
    code: "LANG301",
    credits: 3,
    hours: 72,
    departmentId: 1,
    semester: 5
  }
];

// ===========================================
// 6. ҶАДВАЛИ ДАРСҲО (SCHEDULE)
// ===========================================
export const schedules = [
  // Душанбе
  {
    id: 1,
    dayOfWeek: 1,
    dayName: "Душанбе",
    startTime: "08:30",
    endTime: "10:00",
    subjectId: 1,
    teacherId: 12,
    groupId: 1,
    room: "201",
    building: "Бинои асосӣ",
    lessonType: "Лексия"
  },
  {
    id: 2,
    dayOfWeek: 1,
    dayName: "Душанбе",
    startTime: "10:15",
    endTime: "11:45",
    subjectId: 2,
    teacherId: 13,
    groupId: 1,
    room: "305",
    building: "Бинои асосӣ",
    lessonType: "Машғулоти амалӣ"
  },
  {
    id: 3,
    dayOfWeek: 1,
    dayName: "Душанбе",
    startTime: "12:00",
    endTime: "13:30",
    subjectId: 5,
    teacherId: 12,
    groupId: 1,
    room: "108",
    building: "Бинои забонҳо",
    lessonType: "Машғулоти амалӣ"
  },
  
  // Сешанбе
  {
    id: 4,
    dayOfWeek: 2,
    dayName: "Сешанбе",
    startTime: "08:30",
    endTime: "10:00",
    subjectId: 3,
    teacherId: 12,
    groupId: 1,
    room: "210",
    building: "Бинои асосӣ",
    lessonType: "Лексия"
  },
  {
    id: 5,
    dayOfWeek: 2,
    dayName: "Сешанбе",
    startTime: "10:15",
    endTime: "11:45",
    subjectId: 3,
    teacherId: 12,
    groupId: 1,
    room: "401 (Компютерӣ)",
    building: "Бинои асосӣ",
    lessonType: "Лабораторӣ"
  },
  
  // Чоршанбе
  {
    id: 6,
    dayOfWeek: 3,
    dayName: "Чоршанбе",
    startTime: "08:30",
    endTime: "10:00",
    subjectId: 4,
    teacherId: 12,
    groupId: 1,
    room: "215",
    building: "Бинои асосӣ",
    lessonType: "Лексия"
  },
  {
    id: 7,
    dayOfWeek: 3,
    dayName: "Чоршанбе",
    startTime: "10:15",
    endTime: "11:45",
    subjectId: 1,
    teacherId: 12,
    groupId: 1,
    room: "305",
    building: "Бинои асосӣ",
    lessonType: "Машғулоти амалӣ"
  },
  
  // Панҷшанбе
  {
    id: 8,
    dayOfWeek: 4,
    dayName: "Панҷшанбе",
    startTime: "08:30",
    endTime: "10:00",
    subjectId: 2,
    teacherId: 13,
    groupId: 1,
    room: "201",
    building: "Бинои асосӣ",
    lessonType: "Лексия"
  },
  {
    id: 9,
    dayOfWeek: 4,
    dayName: "Панҷшанбе",
    startTime: "10:15",
    endTime: "11:45",
    subjectId: 4,
    teacherId: 12,
    groupId: 1,
    room: "305",
    building: "Бинои асосӣ",
    lessonType: "Машғулоти амалӣ"
  },
  
  // Ҷумъа
  {
    id: 10,
    dayOfWeek: 5,
    dayName: "Ҷумъа",
    startTime: "08:30",
    endTime: "10:00",
    subjectId: 5,
    teacherId: 12,
    groupId: 1,
    room: "108",
    building: "Бинои забонҳо",
    lessonType: "Машғулоти амалӣ"
  }
];

// ===========================================
// 7. БАҲОҲО (GRADES)
// ===========================================
export const grades = [
  // Донишҷӯи 1 - Давлат
  { id: 1, studentId: 17, subjectId: 1, gradeType: "current", value: 85, maxValue: 100, date: "2024-01-15" },
  { id: 2, studentId: 17, subjectId: 1, gradeType: "midterm", value: 78, maxValue: 100, date: "2024-02-10" },
  { id: 3, studentId: 17, subjectId: 2, gradeType: "current", value: 90, maxValue: 100, date: "2024-01-20" },
  { id: 4, studentId: 17, subjectId: 3, gradeType: "current", value: 82, maxValue: 100, date: "2024-01-18" },
  
  // Донишҷӯи 2 - Зарина
  { id: 5, studentId: 18, subjectId: 1, gradeType: "current", value: 92, maxValue: 100, date: "2024-01-15" },
  { id: 6, studentId: 18, subjectId: 1, gradeType: "midterm", value: 88, maxValue: 100, date: "2024-02-10" },
  { id: 7, studentId: 18, subjectId: 2, gradeType: "current", value: 95, maxValue: 100, date: "2024-01-20" },
  { id: 8, studentId: 18, subjectId: 3, gradeType: "current", value: 87, maxValue: 100, date: "2024-01-18" },
  
  // Донишҷӯи 3 - Ҷамшед
  { id: 9, studentId: 19, subjectId: 1, gradeType: "current", value: 75, maxValue: 100, date: "2024-01-15" },
  { id: 10, studentId: 19, subjectId: 1, gradeType: "midterm", value: 70, maxValue: 100, date: "2024-02-10" },
  { id: 11, studentId: 19, subjectId: 2, gradeType: "current", value: 80, maxValue: 100, date: "2024-01-20" },
  
  // Донишҷӯи 4 - Нилуфар
  { id: 12, studentId: 20, subjectId: 1, gradeType: "current", value: 88, maxValue: 100, date: "2024-01-15" },
  { id: 13, studentId: 20, subjectId: 1, gradeType: "midterm", value: 85, maxValue: 100, date: "2024-02-10" },
  { id: 14, studentId: 20, subjectId: 2, gradeType: "current", value: 92, maxValue: 100, date: "2024-01-20" },
  
  // Донишҷӯи 5 - Анвар
  { id: 15, studentId: 21, subjectId: 1, gradeType: "current", value: 78, maxValue: 100, date: "2024-01-15" },
  { id: 16, studentId: 21, subjectId: 1, gradeType: "midterm", value: 82, maxValue: 100, date: "2024-02-10" },
  { id: 17, studentId: 21, subjectId: 2, gradeType: "current", value: 85, maxValue: 100, date: "2024-01-20" }
];

// ===========================================
// 8. ҲУҶРАҲОИ ЧАТ (CHAT ROOMS)
// ===========================================
export const chatRooms = [
  {
    id: 1,
    title: "Шӯрои Роҳбарияти Донишгоҳ",
    titleRu: "Совет руководства университета",
    titleEn: "University Leadership Council",
    type: "admin",
    members: [1, 2, 3, 4, 5, 6, 22],
    createdAt: "2023-09-01T10:00:00",
    isArchived: false
  },
  {
    id: 2,
    title: "Факултети Математика - Роҳбарият",
    titleRu: "Факультет математики - Руководство",
    titleEn: "Math Faculty - Leadership",
    type: "faculty",
    facultyId: 1,
    members: [4, 7, 8, 12, 13],
    createdAt: "2023-09-01T11:00:00",
    isArchived: false
  },
  {
    id: 3,
    title: "Таҳлили математикӣ III - Гурӯҳи 301",
    titleRu: "Математический анализ III - Группа 301",
    titleEn: "Mathematical Analysis III - Group 301",
    type: "course",
    subjectId: 1,
    groupId: 1,
    teacherId: 12,
    members: [12, 17, 18, 19, 20, 21],
    semester: "2023-2024-1",
    createdAt: "2023-09-05T08:00:00",
    isArchived: false
  },
  {
    id: 4,
    title: "Гурӯҳи 301 - Чати умумӣ",
    titleRu: "Группа 301 - Общий чат",
    titleEn: "Group 301 - General Chat",
    type: "group",
    groupId: 1,
    members: [17, 18, 19, 20, 21],
    createdAt: "2023-09-01T12:00:00",
    isArchived: false
  }
];

// ===========================================
// 9. ПАЁМҲОИ ЧАТ (CHAT MESSAGES)
// ===========================================
export const chatMessages = [
  // Чати Шӯрои Роҳбарият
  {
    id: 1,
    roomId: 1,
    senderId: 1,
    message: "Салом ҳамаатон! Имрӯз дар соати 15:00 ҷаласаи кориро доем.",
    messageType: "text",
    timestamp: "2024-01-15T09:00:00",
    isRead: true,
    isPinned: false
  },
  {
    id: 2,
    roomId: 1,
    senderId: 2,
    message: "Қабул, муҳтарам Ректор. Ман ҳозир мешавам.",
    messageType: "text",
    timestamp: "2024-01-15T09:05:00",
    isRead: true,
    isPinned: false
  },
  
  // Чати Факултет
  {
    id: 3,
    roomId: 2,
    senderId: 4,
    message: "Муҳтарамони кормандон! Лутфан ҳисоботи моҳи январро то рӯзи 25-ум тайёр кунед.",
    messageType: "text",
    timestamp: "2024-01-10T10:00:00",
    isRead: true,
    isPinned: true
  },
  
  // Чати Дарс - Таҳлили математикӣ
  {
    id: 4,
    roomId: 3,
    senderId: 12,
    message: "Салом донишҷӯён! Имрӯз мо мавзӯи интегралҳои мураккабро меомӯзем.",
    messageType: "text",
    timestamp: "2024-01-15T08:30:00",
    isRead: true,
    isPinned: false
  },
  {
    id: 5,
    roomId: 3,
    senderId: 12,
    message: "Материалҳои дарс",
    messageType: "file",
    fileUrl: "/files/lecture_5_integrals.pdf",
    fileName: "Лексияи 5 - Интегралҳои мураккаб.pdf",
    fileSize: 2458000,
    timestamp: "2024-01-15T08:32:00",
    isRead: true,
    isPinned: false
  },
  {
    id: 6,
    roomId: 3,
    senderId: 12,
    message: "Вазифаи хонагӣ: Масъалаҳои 15-20 аз китоби дарсӣ. Мӯҳлат: то рӯзи 20 январ.",
    messageType: "task",
    taskDeadline: "2024-01-20T23:59:00",
    taskStatus: "active",
    timestamp: "2024-01-15T10:00:00",
    isRead: true,
    isPinned: true
  },
  {
    id: 7,
    roomId: 3,
    senderId: 18,
    message: "Устод, оё мо метавонем мисолҳои иловагиро гирем?",
    messageType: "text",
    timestamp: "2024-01-15T10:05:00",
    isRead: true,
    isPinned: false
  },
  {
    id: 8,
    roomId: 3,
    senderId: 12,
    message: "Бале, албатта! Ман ҳозир файлро мефиристам.",
    messageType: "text",
    timestamp: "2024-01-15T10:07:00",
    isRead: true,
    isPinned: false
  },
  {
    id: 9,
    roomId: 3,
    senderId: 12,
    message: "Мисолҳои иловагӣ",
    messageType: "file",
    fileUrl: "/files/extra_examples.pdf",
    fileName: "Мисолҳои иловагӣ - Интегралҳо.pdf",
    fileSize: 1245000,
    timestamp: "2024-01-15T10:08:00",
    isRead: true,
    isPinned: false
  },
  
  // Чати Гурӯҳи 301
  {
    id: 10,
    roomId: 4,
    senderId: 17,
    message: "Салом ҳамагурӯҳиҳо! Имрӯз касе ба китобхона меравад?",
    messageType: "text",
    timestamp: "2024-01-15T14:00:00",
    isRead: true,
    isPinned: false
  },
  {
    id: 11,
    roomId: 4,
    senderId: 18,
    message: "Ман меравам! Соати 16:00 мераҳам, ҳамроҳ шав!",
    messageType: "text",
    timestamp: "2024-01-15T14:03:00",
    isRead: true,
    isPinned: false
  },
  {
    id: 12,
    roomId: 4,
    senderId: 19,
    message: "Касе ёдошт аз дарси имрӯза дорад? Ман баъзе ҷойҳоро фаҳмида натавонистам.",
    messageType: "text",
    timestamp: "2024-01-15T15:30:00",
    isRead: true,
    isPinned: false
  },
  {
    id: 13,
    roomId: 4,
    senderId: 20,
    message: "Бале, ман ёдошт доштам. Фардо дар донишгоҳ ба ту медиҳам.",
    messageType: "text",
    timestamp: "2024-01-15T15:45:00",
    isRead: true,
    isPinned: false
  }
];

// ===========================================
// 10. ФИНАНСҲО (FINANCE)
// ===========================================
export const finances = [
  // Пардохтҳои донишҷӯён
  {
    id: 1,
    studentId: 17,
    type: "tuition",
    amount: 2500,
    currency: "TJS",
    semester: "2023-2024-1",
    status: "paid",
    paidDate: "2023-09-05",
    description: "Пардохти шартнома - Семестри 5"
  },
  {
    id: 2,
    studentId: 18,
    type: "tuition",
    amount: 2500,
    currency: "TJS",
    semester: "2023-2024-1",
    status: "paid",
    paidDate: "2023-09-03",
    description: "Пардохти шартнома - Семестри 5"
  },
  {
    id: 3,
    studentId: 19,
    type: "tuition",
    amount: 2500,
    currency: "TJS",
    semester: "2023-2024-1",
    status: "partial",
    paidDate: "2023-09-10",
    paidAmount: 1500,
    description: "Пардохти қисман - Семестри 5"
  },
  
  // Стипендияҳо
  {
    id: 4,
    studentId: 18,
    type: "scholarship",
    amount: 300,
    currency: "TJS",
    period: "2024-01",
    status: "paid",
    paidDate: "2024-01-10",
    description: "Стипендияи академӣ"
  },
  {
    id: 5,
    studentId: 20,
    type: "scholarship",
    amount: 300,
    currency: "TJS",
    period: "2024-01",
    status: "paid",
    paidDate: "2024-01-10",
    description: "Стипендияи академӣ"
  }
];

// ===========================================
// 11. СИСТЕМАИ КИТОБХОНА (LIBRARY)
// ===========================================
export const libraryBooks = [
  {
    id: 1,
    title: "Таҳлили математикӣ - Ҷилди 1",
    titleRu: "Математический анализ - Том 1",
    author: "Фихтенгольс Г.М.",
    isbn: "978-5-9507-0123-4",
    publisher: "Донишномаи Тоҷикистон",
    year: 2018,
    copies: 25,
    available: 18,
    category: "Математика"
  },
  {
    id: 2,
    title: "Алгебраи хаттӣ",
    titleRu: "Линейная алгебра",
    author: "Курош А.Г.",
    isbn: "978-5-9507-0234-5",
    publisher: "Маориф",
    year: 2020,
    copies: 30,
    available: 22,
    category: "Математика"
  },
  {
    id: 3,
    title: "Физикаи назариявӣ - Механика",
    titleRu: "Теоретическая физика - Механика",
    author: "Ландау Л.Д., Лифшиц Е.М.",
    isbn: "978-5-9507-0345-6",
    publisher: "Ирфон",
    year: 2019,
    copies: 20,
    available: 14,
    category: "Физика"
  }
];

export const libraryBorrowings = [
  {
    id: 1,
    bookId: 1,
    userId: 17,
    borrowDate: "2024-01-05",
    dueDate: "2024-02-05",
    returnDate: null,
    status: "borrowed"
  },
  {
    id: 2,
    bookId: 2,
    userId: 18,
    borrowDate: "2024-01-08",
    dueDate: "2024-02-08",
    returnDate: null,
    status: "borrowed"
  },
  {
    id: 3,
    bookId: 3,
    userId: 19,
    borrowDate: "2023-12-15",
    dueDate: "2024-01-15",
    returnDate: null,
    status: "overdue"
  }
];

// ===========================================
// 12. ОЗМУНҲО ВА ИМТИҲОНҲО (EXAMS)
// ===========================================
export const exams = [
  {
    id: 1,
    subjectId: 1,
    groupId: 1,
    examType: "midterm",
    date: "2024-02-10",
    startTime: "09:00",
    duration: 90,
    room: "Толори 5",
    maxScore: 100,
    teacherId: 12
  },
  {
    id: 2,
    subjectId: 2,
    groupId: 1,
    examType: "midterm",
    date: "2024-02-12",
    startTime: "09:00",
    duration: 90,
    room: "Толори 3",
    maxScore: 100,
    teacherId: 13
  },
  {
    id: 3,
    subjectId: 1,
    groupId: 1,
    examType: "final",
    date: "2024-05-20",
    startTime: "09:00",
    duration: 120,
    room: "Толори 5",
    maxScore: 100,
    teacherId: 12
  }
];

// ===========================================
// 13. ЭЪЛОНҲО (ANNOUNCEMENTS)
// ===========================================
export const announcements = [
  {
    id: 1,
    title: "Конференсияи илмии донишҷӯён",
    titleRu: "Научная конференция студентов",
    content: "Рӯзи 15 феврал конференсияи илмии донишҷӯён баргузор мешавад. Донишҷӯёни хоҳишманд метавонанд тезисҳои худро то рӯзи 1 феврал пешниҳод намоянд.",
    contentRu: "15 февраля состоится научная конференция студентов. Желающие могут подать тезисы до 1 февраля.",
    authorId: 2,
    targetAudience: "all",
    createdAt: "2024-01-10T10:00:00",
    isActive: true,
    priority: "high"
  },
  {
    id: 2,
    title: "Тағйироти дар ҷадвали имтиҳонҳо",
    titleRu: "Изменения в расписании экзаменов",
    content: "Дар ҷадвали имтиҳонҳои семестри баҳорӣ тағйирот ворид карда шуд. Бо ҷадвали нав дар сомонаи донишгоҳ шиноӣ ҳосил кунед.",
    contentRu: "В расписание весенних экзаменов внесены изменения. Ознакомьтесь с новым расписанием на сайте университета.",
    authorId: 2,
    targetAudience: "students",
    createdAt: "2024-01-12T14:00:00",
    isActive: true,
    priority: "medium"
  }
];

// ===========================================
// 14. СТАТИСТИКАИ УМУМӢ (GENERAL STATISTICS)
// ===========================================
export const universityStats = {
  totalStudents: 1450,
  totalTeachers: 135,
  totalFaculties: 3,
  totalDepartments: 5,
  totalSubjects: 85,
  totalGroups: 28,
  currentAcademicYear: "2023-2024",
  currentSemester: "Семестри баҳорӣ"
};
