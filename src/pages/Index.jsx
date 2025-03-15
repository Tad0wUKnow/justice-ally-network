
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import PageTransition from '@/components/PageTransition';
import { ArrowRight, Shield, Scale, Users, BookOpen, Activity, Database } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Index = () => {
  const { currentUser } = useAuth();
  
  const features = [
    {
      title: "Legal Resources",
      description: "Access comprehensive guides, articles, and legal frameworks related to false accusations in matrimonial disputes.",
      icon: <Scale className="h-6 w-6" />,
      delay: 1
    },
    {
      title: "Case Submission",
      description: "Submit your case details confidentially to get tailored legal guidance and support from experts.",
      icon: <Database className="h-6 w-6" />,
      delay: 2
    },
    {
      title: "Community Support",
      description: "Connect with others who have faced similar situations through moderated forums and support groups.",
      icon: <Users className="h-6 w-6" />,
      delay: 3
    },
    {
      title: "Legal Advisory",
      description: "Get preliminary guidance and insights about your specific situation from our advisory system.",
      icon: <BookOpen className="h-6 w-6" />,
      delay: 4
    },
    {
      title: "Case Tracking",
      description: "Monitor the progress of your case and receive updates on similar precedents and outcomes.",
      icon: <Activity className="h-6 w-6" />,
      delay: 5
    },
    {
      title: "Privacy Protection",
      description: "Your information remains confidential with our secure infrastructure and privacy-first approach.",
      icon: <Shield className="h-6 w-6" />,
      delay: 6
    }
  ];

  return (
    <PageTransition>
      <main className="overflow-hidden">
        <HeroSection />
        
        {!currentUser && (
          <div className="py-8 bg-primary/10">
            <div className="container mx-auto px-4">
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center">Access All Features</CardTitle>
                  <CardDescription className="text-center">
                    Please log in or create an account to access all features
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center gap-4">
                  <Link to="/login">
                    <Button>Log In</Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="outline">Sign Up</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        
        {/* Features section */}
        <section className="py-20 bg-background relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-medium tracking-tight mb-4"
              >
                Comprehensive Support System
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground mx-auto max-w-2xl"
              >
                A platform designed to provide resources, community support, and legal guidance
                for individuals facing false accusations.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  delay={feature.delay}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-20 bg-secondary/30 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl font-medium tracking-tight mb-4"
              >
                Ready to Take the Next Step?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground mb-8"
              >
                Submit your case, connect with our community, or explore our resources to begin your journey towards justice.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link 
                  to="/submit" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-colors hover:bg-primary/90"
                >
                  Submit Your Case
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/lawyers" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-card border border-border text-foreground font-medium transition-colors hover:bg-card/80"
                >
                  Find a Lawyer
                </Link>
                <Link 
                  to="/resources" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-foreground font-medium transition-colors hover:bg-secondary/80"
                >
                  Explore Resources
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Index;
