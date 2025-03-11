
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { User, LogOut, FileText } from 'lucide-react';

const ProtectedRoute = ({ children }) => {
  const { currentUser, loading, logout } = useAuth();

  // If still loading auth state, show loading indicator
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // If not logged in, redirect to login page
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // If logged in, show the protected content with a top bar
  return (
    <div className="min-h-screen">
      <div className="bg-background border-b border-border py-2 px-4 flex justify-end items-center gap-4">
        <Link to="/my-cases" className="text-sm flex items-center gap-1 text-muted-foreground hover:text-foreground">
          <FileText className="h-4 w-4" />
          My Cases
        </Link>
        <div className="text-sm flex items-center gap-1 text-muted-foreground">
          <User className="h-4 w-4" />
          {currentUser.email || currentUser.name}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={logout} 
          className="text-sm"
        >
          <LogOut className="h-4 w-4 mr-1" />
          Logout
        </Button>
      </div>
      {children}
    </div>
  );
};

export default ProtectedRoute;
