import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, User } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: true
  });

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('mutare_user');
    if (savedUser) {
      const user: User = JSON.parse(savedUser);
      setAuthState({
        user,
        isAuthenticated: true,
        loading: false
      });
    } else {
      setAuthState(prev => ({ ...prev, loading: false }));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would call an API
    if (email === 'admin@mutaregranite.com' && password === 'admin123') {
      const user: User = {
        id: '1',
        email: 'admin@mutaregranite.com',
        role: 'admin',
        name: 'Admin User'
      };
      
      localStorage.setItem('mutare_user', JSON.stringify(user));
      setAuthState({
        user,
        isAuthenticated: true,
        loading: false
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('mutare_user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      loading: false
    });
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};