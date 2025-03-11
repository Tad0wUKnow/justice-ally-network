
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { ArrowLeft, FileText, ExternalLink, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '../context/AuthContext';

const MyCases = () => {
  const { currentUser } = useAuth();
  const [cases, setCases] = useState([]);
  
  useEffect(() => {
    // Load cases from localStorage
    const userCases = JSON.parse(localStorage.getItem('userCases') || '[]');
    // Only show cases that belong to the current user
    if (currentUser) {
      const myCases = userCases.filter(c => c.userId === currentUser.id);
      setCases(myCases);
    }
  }, [currentUser]);

  if (cases.length === 0) {
    return (
      <PageTransition>
        <main className="min-h-screen bg-background">
          <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight">My Cases</h1>
            </div>
            
            <Card className="text-center py-12">
              <CardContent>
                <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-xl mb-6">You haven't submitted any cases yet</p>
                <Link to="/submit">
                  <Button>Submit Your First Case</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight">My Cases</h1>
            </div>
            <Link to="/submit" className="mt-4 md:mt-0">
              <Button>Submit New Case</Button>
            </Link>
          </div>
          
          <div className="grid gap-6">
            {cases.map((caseItem, index) => (
              <motion.div 
                key={caseItem.id} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <CardTitle>{caseItem.caseType}</CardTitle>
                        <CardDescription className="mt-1">{new Date(caseItem.submittedAt).toLocaleDateString()}</CardDescription>
                      </div>
                      <Badge variant={
                        caseItem.stage === 'pre' ? 'outline' :
                        caseItem.stage === 'fir' ? 'secondary' :
                        caseItem.stage === 'investigation' ? 'default' :
                        caseItem.stage === 'court' ? 'destructive' : 'default'
                      }>
                        {caseItem.stage === 'pre' ? 'Pre-FIR Stage' :
                         caseItem.stage === 'fir' ? 'FIR Filed' : 
                         caseItem.stage === 'investigation' ? 'Under Investigation' : 
                         caseItem.stage === 'court' ? 'Court Proceedings' : 
                         caseItem.stage === 'appeal' ? 'Appeal Stage' : caseItem.stage}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-2 text-sm mb-4">
                      <FileText className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="font-medium">Case Description</div>
                        <p className="text-muted-foreground mt-1 whitespace-pre-line">
                          {caseItem.situation}
                        </p>
                      </div>
                    </div>
                    {caseItem.location && (
                      <div className="text-sm text-muted-foreground mt-4">
                        Location: {caseItem.location}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" size="sm">Update Case</Button>
                    <Button size="sm">View Details</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default MyCases;
