import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/mockApi';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth бояд дар дохили AuthProvider истифода шавад');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Санҷиши токен дар localStorage
    const storedToken = localStorage.getItem('tnu_token');
    const storedUser = localStorage.getItem('tnu_user');
    
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    
    setLoading(false);
  }, []);

  const login = async (loginValue, password) => {
    try {
      const response = await authAPI.login(loginValue, password);
      
      setUser(response.user);
      setToken(response.token);
      
      localStorage.setItem('tnu_token', response.token);
      localStorage.setItem('tnu_user', JSON.stringify(response.user));
      
      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authAPI.logout();
      
      setUser(null);
      setToken(null);
      
      localStorage.removeItem('tnu_token');
      localStorage.removeItem('tnu_user');
    } catch (error) {
      console.error('Хатогӣ дар баромадан:', error);
    }
  };

  const hasRole = (roles) => {
    if (!user) return false;
    if (user.role === 'super_admin') return true;
    if (Array.isArray(roles)) {
      return roles.includes(user.role);
    }
    return user.role === roles;
  };

  const canAccessFaculty = (facultyId) => {
    if (!user) return false;
    if (user.role === 'super_admin' || user.role === 'rector') return true;
    return user.facultyId === facultyId;
  };

  const canAccessDepartment = (departmentId) => {
    if (!user) return false;
    if (user.role === 'super_admin' || user.role === 'rector') return true;
    return user.departmentId === departmentId;
  };

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    hasRole,
    canAccessFaculty,
    canAccessDepartment,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
