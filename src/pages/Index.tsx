
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import { FileCheck, MessageSquare, HelpCircle, UserPlus, BookOpen } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: "Submit Your Case",
      description: "Securely submit your case details and supporting evidence with anonymous options available.",
      icon: <FileCheck size={24} />,
      path: "/submit"
    },
    {
      title: "Community Support",
      description: "Connect with others who understand your situation in our supportive community forum.",
      icon: <MessageSquare size={24} />,
      path: "/community"
    },
    {
      title: "Legal Advisory",
      description: "Get preliminary legal guidance through our legal advisory chatbot with pre-defined responses.",
      icon: <HelpCircle size={24} />,
      path: "/legal-advisory"
    },
    {
      title: "Lawyer Directory",
      description: "Find specialized legal help from our directory of lawyers and organizations with experience in these cases.",
      icon: <UserPlus size={24} />,
      path: "/lawyers"
    },
    {
      title: "Resources & Awareness",
      description: "Access educational materials, case studies, and resources to better understand your rights.",
      icon: <BookOpen size={24} />,
      path: "/resources"
    }
  ];

  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        
        {/* Features section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-medium tracking-tight mb-4"
              >
                How JusticeChain Helps You
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-muted-foreground"
              >
                Our platform offers comprehensive support through multiple services 
                designed to assist you during challenging situations.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <Link to={feature.path} key={index} className="group">
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                    delay={index}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-10 border"
            >
              <div className="flex flex-col gap-6">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-xl font-medium italic text-foreground/90">
                  "JusticeChain provided me with crucial guidance and support during one of the most challenging periods of my life. The resources and community here made a real difference."
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                    R
                  </div>
                  <div>
                    <p className="font-medium">Rahul K.</p>
                    <p className="text-sm text-muted-foreground">Delhi, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                Ready to Take the First Step?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join our community today and access the support, resources, and guidance you need to navigate through difficult times.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/submit" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-colors hover:bg-primary/90"
                >
                  Submit Your Case
                </Link>
                <Link 
                  to="/resources" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-foreground font-medium transition-colors hover:bg-secondary/80"
                >
                  Explore Resources
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-10 border-t bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-xl font-medium mb-2">JusticeChain</h2>
                <p className="text-sm text-muted-foreground">Supporting those in need of justice</p>
              </div>
              
              <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                <Link to="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link to="/submit" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Submit Case
                </Link>
                <Link to="/community" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Community
                </Link>
                <Link to="/legal-advisory" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Legal Advisory
                </Link>
                <Link to="/resources" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
                  Resources
                </Link>
              </nav>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border/40">
              <p className="text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} JusticeChain. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
};

export default Index;
