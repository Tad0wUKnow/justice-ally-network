
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SubmitCase from "./pages/SubmitCase";
import Community from "./pages/Community";
import LegalAdvisory from "./pages/LegalAdvisory";
import Lawyers from "./pages/Lawyers";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyCases from "./pages/MyCases";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Auth routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/resources" element={<Resources />} />
            
            {/* Protected routes */}
            <Route path="/submit" element={
              <ProtectedRoute>
                <SubmitCase />
              </ProtectedRoute>
            } />
            <Route path="/my-cases" element={
              <ProtectedRoute>
                <MyCases />
              </ProtectedRoute>
            } />
            <Route path="/community" element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            } />
            <Route path="/legal-advisory" element={
              <ProtectedRoute>
                <LegalAdvisory />
              </ProtectedRoute>
            } />
            <Route path="/lawyers" element={
              <ProtectedRoute>
                <Lawyers />
              </ProtectedRoute>
            } />
            
            {/* Not found route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
