
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { LogOut, User } from 'lucide-react';
import { toast } from 'sonner';

const UserProfile = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Avatar className="h-8 w-8 border border-primary/20">
        <User className="h-4 w-4" />
      </Avatar>
      <div className="hidden md:block">
        <p className="text-sm font-medium">{currentUser.name || currentUser.email}</p>
      </div>
      <Button variant="ghost" size="sm" onClick={handleLogout} className="ml-2">
        <LogOut className="h-4 w-4" />
        <span className="sr-only">Logout</span>
      </Button>
    </div>
  );
};

export default UserProfile;
