
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-blue-100/30 blur-3xl -z-10" />
      <div className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-indigo-100/20 blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 md:gap-6 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 max-w-xl"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4"
            >
              Supporting Those in Need
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight md:leading-tight"
            >
              Justice and Support When You Need It Most
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground"
          >
            A platform dedicated to supporting individuals facing false accusations, providing resources, community, and legal guidance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <Link 
              to="/submit" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              Submit Your Case
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/community" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-foreground font-medium transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
            >
              Join Community
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            {/* Abstract shapes */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-blue-100/50 blur-md" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/3 w-1/2 h-1/2 rounded-full bg-sky-100/50 blur-md" />
            
            {/* Card-like element */}
            <div className="relative z-10 bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 w-full max-w-md transform rotate-2 transition-transform hover:rotate-0 duration-500">
              <div className="flex flex-col gap-5">
                <div className="w-12 h-1.5 bg-primary/20 rounded-full" />
                <h3 className="text-xl font-medium">Your Story Matters</h3>
                <p className="text-muted-foreground">We believe in justice and due process. Our platform provides the resources and community support needed during challenging times.</p>
                <div className="flex gap-3 mt-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  <div className="w-2 h-2 rounded-full bg-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
