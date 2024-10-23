import { useState } from 'react';

// In a real application, these would be stored securely, not hardcoded
const DEFAULT_USERNAME = 'admin';
const DEFAULT_PASSWORD = 'password123';
const DEFAULT_2FA_CODE = '123456';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string, password: string, twoFACode: string) => {
    if (username === DEFAULT_USERNAME && 
        password === DEFAULT_PASSWORD && 
        twoFACode === DEFAULT_2FA_CODE) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
}