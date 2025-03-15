
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const HeroSection = () => {
  const { currentUser } = useAuth();
  
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Welcome to <span className="text-primary">WeMen</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-10"
          >
            A community platform providing legal resources and support for individuals facing false accusations.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {currentUser ? (
              <>
                <Link 
                  to="/submit" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
                >
                  Submit Your Case
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/my-cases" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/90"
                >
                  View Your Cases
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90"
                >
                  Log In
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/signup" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/90"
                >
                  Sign Up
                </Link>
              </>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[140%] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[140%] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
