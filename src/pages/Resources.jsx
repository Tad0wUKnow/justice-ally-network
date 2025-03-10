
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, FileText, ExternalLink, BookOpen, AlertTriangle, Phone, Download } from 'lucide-react';

const Resources = () => {
  const legalResources = [
    {
      id: 1,
      title: "Understanding IPC 498A",
      description: "Comprehensive guide to Section 498A of Indian Penal Code, its scope, implications, and defenses.",
      type: "legal",
      link: "#",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Bail Provisions Guide",
      description: "Step-by-step guide to understanding bail provisions in false accusation cases.",
      type: "legal",
      link: "#",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Supreme Court Guidelines on 498A",
      description: "Collection of landmark Supreme Court rulings and guidelines regarding 498A cases.",
      type: "legal",
      link: "#",
      icon: <FileText className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Rights of the Accused",
      description: "Detailed overview of legal rights available to those accused in matrimonial disputes.",
      type: "legal",
      link: "#",
      icon: <FileText className="h-5 w-5" />
    },
  ];

  const educationalResources = [
    {
      id: 5,
      title: "False Accusations: Psychological Impact",
      description: "Research-based article on dealing with the psychological impact of false accusations.",
      type: "educational",
      link: "#",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Gathering Evidence Guide",
      description: "How to properly document and gather evidence to build a strong defense case.",
      type: "educational",
      link: "#",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      id: 7,
      title: "Understanding Mediation in Family Disputes",
      description: "Guide to mediation as an alternative dispute resolution method in family matters.",
      type: "educational",
      link: "#",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      id: 8,
      title: "Rebuilding Life After False Accusations",
      description: "Resources for emotional healing and rebuilding your personal and professional life.",
      type: "educational",
      link: "#",
      icon: <BookOpen className="h-5 w-5" />
    }
  ];

  const helplineResources = [
    {
      id: 9,
      title: "National Men's Helpline",
      description: "24/7 helpline providing immediate guidance and support to men in distress.",
      contact: "1800-XXX-XXXX",
      type: "helpline",
      icon: <Phone className="h-5 w-5" />
    },
    {
      id: 10,
      title: "Men's Rights Association Helpline",
      description: "Specialized support for men facing false accusations in matrimonial cases.",
      contact: "1800-XXX-XXXX",
      type: "helpline",
      icon: <Phone className="h-5 w-5" />
    },
    {
      id: 11,
      title: "Legal Aid Helpline",
      description: "Free legal advice and support for understanding your rights and options.",
      contact: "1800-XXX-XXXX",
      type: "helpline",
      icon: <Phone className="h-5 w-5" />
    },
    {
      id: 12,
      title: "Mental Health Support Line",
      description: "Professional counseling support for dealing with stress and anxiety.",
      contact: "1800-XXX-XXXX",
      type: "helpline",
      icon: <Phone className="h-5 w-5" />
    }
  ];

  const caseStudies = [
    {
      id: 13,
      title: "Case Study: Delhi High Court",
      description: "How evidence-based defense led to acquittal in a false 498A case.",
      outcome: "Acquittal",
      year: 2019,
      type: "case-study",
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      id: 14,
      title: "Case Study: Bombay High Court",
      description: "Landmark judgment on misuse of domestic violence provisions.",
      outcome: "Quashed",
      year: 2020,
      type: "case-study",
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      id: 15,
      title: "Case Study: Supreme Court",
      description: "SC guidelines following recognition of 498A misuse pattern.",
      outcome: "Guidelines Issued",
      year: 2017,
      type: "case-study",
      icon: <AlertTriangle className="h-5 w-5" />
    },
    {
      id: 16,
      title: "Case Study: Mediation Success",
      description: "How mediation helped resolve a case without prolonged litigation.",
      outcome: "Settlement",
      year: 2021,
      type: "case-study",
      icon: <AlertTriangle className="h-5 w-5" />
    }
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        {/* Header section */}
        <div className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <Link 
                  to="/" 
                  className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to home
                </Link>
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-3xl md:text-4xl font-medium tracking-tight"
                >
                  Resources & Awareness
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.1 } }}
                  className="mt-2 text-muted-foreground"
                >
                  Educational materials, case studies, and resources to understand your rights and options.
                </motion.p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Download className="h-4 w-4" />
                  Resource Pack
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Resources tabs */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <Tabs defaultValue="legal" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="legal">Legal Resources</TabsTrigger>
              <TabsTrigger value="educational">Educational Content</TabsTrigger>
              <TabsTrigger value="helplines">Helplines</TabsTrigger>
              <TabsTrigger value="casestudies">Case Studies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="legal" className="mt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {legalResources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                          {resource.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                          <Button variant="link" className="p-0 h-auto mt-2 text-primary">
                            Read More
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="educational" className="mt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {educationalResources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-blue-100 text-blue-600 flex-shrink-0">
                          {resource.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                          <Button variant="link" className="p-0 h-auto mt-2 text-blue-600">
                            Read More
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="helplines" className="mt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {helplineResources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-green-100 text-green-600 flex-shrink-0">
                          {resource.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{resource.description}</p>
                          <div className="mt-3 p-2 bg-secondary/50 rounded-lg flex items-center justify-between">
                            <span className="font-medium">{resource.contact}</span>
                            <Button size="sm" variant="secondary" className="h-8">
                              Call Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="casestudies" className="mt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study) => (
                  <Card key={study.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-amber-100 text-amber-600 flex-shrink-0">
                          {study.icon}
                        </div>
                        <div>
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium">{study.title}</h3>
                            <span className="text-xs bg-secondary px-2 py-1 rounded">
                              {study.year}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{study.description}</p>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-sm font-medium">
                              Outcome: <span className="text-green-600">{study.outcome}</span>
                            </span>
                            <Button variant="link" className="p-0 h-auto text-amber-600">
                              Read Full Case
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <Separator className="my-12" />
          
          {/* FAQ section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-medium mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What should I do immediately after receiving a false accusation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Stay calm and avoid confrontations. Secure all communication and evidence that may help your case. Consult with a specialized lawyer immediately, even before police questioning. Do not sign any statements without legal advice.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How long do these cases typically take to resolve?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The duration varies significantly depending on the nature of accusations, evidence available, court jurisdiction, and whether mediation is pursued. Simple cases may resolve in 6-12 months, while complex litigation can take several years.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What evidence should I preserve for my defense?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Keep all communication (texts, emails, call records), financial transactions, travel records, medical reports if applicable, witness details, and any documentation of previous harassment or threats. Take date-stamped photos of any relevant physical evidence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/submit">
              <Button variant="outline">Submit Your Case</Button>
            </Link>
            <Link to="/legal-advisory">
              <Button variant="outline">Get Legal Advisory</Button>
            </Link>
            <Link to="/community">
              <Button variant="secondary">Join Community</Button>
            </Link>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Resources;
