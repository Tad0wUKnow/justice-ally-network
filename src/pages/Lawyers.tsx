
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Search, MapPin, Phone, Mail, ExternalLink, Filter } from 'lucide-react';

const Lawyers = () => {
  const lawyers = [
    {
      id: 1,
      name: "Adv. Rajesh Kumar",
      specialization: "IPC 498A & Domestic Violence Cases",
      experience: "15+ years",
      location: "Delhi NCR",
      languages: ["English", "Hindi"],
      contact: {
        phone: "+91 98XXXXXXXX",
        email: "rajesh@example.com"
      },
      description: "Specialized in handling false accusations under IPC 498A with focus on quick resolution through mediation and legal representation."
    },
    {
      id: 2,
      name: "Adv. Priya Singh",
      specialization: "Family Law & False Accusations",
      experience: "12+ years",
      location: "Mumbai",
      languages: ["English", "Hindi", "Marathi"],
      contact: {
        phone: "+91 98XXXXXXXX",
        email: "priya@example.com"
      },
      description: "Expert in family law matters with extensive experience in defending false accusations cases in Maharashtra courts."
    },
    {
      id: 3,
      name: "Adv. Suresh Menon",
      specialization: "Criminal Defense & 498A Cases",
      experience: "18+ years",
      location: "Bangalore",
      languages: ["English", "Kannada", "Tamil"],
      contact: {
        phone: "+91 98XXXXXXXX",
        email: "suresh@example.com"
      },
      description: "Criminal defense lawyer with proven track record of successfully defending men against false accusations across Karnataka."
    },
    {
      id: 4,
      name: "Legal Rights Foundation",
      specialization: "NGO - Legal Aid for 498A Cases",
      experience: "Serving since 2005",
      location: "Pan India (Online Consultation)",
      languages: ["Multiple Indian Languages"],
      contact: {
        phone: "+91 11XXXXXXXX",
        email: "help@legalrightsfoundation.org"
      },
      description: "Non-profit providing affordable legal assistance and guidance to men facing false accusations. Offers both online and in-person support."
    },
    {
      id: 5,
      name: "Adv. Ananya Sharma",
      specialization: "Men's Rights in Matrimonial Disputes",
      experience: "10+ years",
      location: "Hyderabad",
      languages: ["English", "Hindi", "Telugu"],
      contact: {
        phone: "+91 98XXXXXXXX",
        email: "ananya@example.com"
      },
      description: "Advocate focused on ensuring fair treatment and justice for men in matrimonial disputes and false accusation cases."
    },
    {
      id: 6,
      name: "Men's Welfare Trust",
      specialization: "Legal Aid Organization",
      experience: "Established 2010",
      location: "Multiple Branches (Delhi, Mumbai, Bangalore)",
      languages: ["English", "Hindi", "Regional Languages"],
      contact: {
        phone: "+91 98XXXXXXXX",
        email: "contact@menswelfare.org"
      },
      description: "Organization providing legal support, counseling, and community resources for men facing false accusations in family matters."
    }
  ];

  const locations = [
    { label: "Delhi NCR", value: "delhi" },
    { label: "Mumbai", value: "mumbai" },
    { label: "Bangalore", value: "bangalore" },
    { label: "Hyderabad", value: "hyderabad" },
    { label: "Chennai", value: "chennai" },
    { label: "Kolkata", value: "kolkata" },
    { label: "Pan India", value: "pan-india" }
  ];

  const specializations = [
    { label: "IPC 498A", value: "498a" },
    { label: "Domestic Violence Defense", value: "domestic" },
    { label: "Family Law", value: "family" },
    { label: "Criminal Defense", value: "criminal" },
    { label: "Matrimonial Disputes", value: "matrimonial" },
    { label: "Legal Aid/NGO", value: "ngo" }
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        {/* Header section */}
        <div className="bg-secondary/30 py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-start justify-between gap-4">
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
                  Lawyer Directory
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.1 } }}
                  className="mt-2 text-muted-foreground max-w-xl"
                >
                  Connect with lawyers and organizations specialized in defending men against false accusations and providing legal support.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search by name or specialization" 
                className="pl-10"
              />
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map(location => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Specialization" />
                </SelectTrigger>
                <SelectContent>
                  {specializations.map(spec => (
                    <SelectItem key={spec.value} value={spec.value}>
                      {spec.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Directory listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawyers.map((lawyer) => (
              <motion.div
                key={lawyer.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: lawyer.id * 0.05 }}
              >
                <Card className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-medium">{lawyer.name}</h3>
                        <p className="text-sm text-primary font-medium mt-1">{lawyer.specialization}</p>
                        <div className="flex items-center text-muted-foreground text-sm mt-1">
                          <MapPin className="h-3.5 w-3.5 mr-1" />
                          {lawyer.location}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-muted-foreground">{lawyer.description}</p>
                      </div>
                      
                      <div className="pt-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">Experience:</span>
                          <span>{lawyer.experience}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-1">
                          <span className="font-medium">Languages:</span>
                          <span>{lawyer.languages.join(", ")}</span>
                        </div>
                      </div>
                      
                      <div className="pt-4 space-y-2">
                        <div className="flex items-center text-sm">
                          <Phone className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                          <span>{lawyer.contact.phone}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Mail className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                          <span>{lawyer.contact.email}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-2" variant="outline">
                        Contact
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation links */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/submit">
              <Button variant="outline">Submit Your Case</Button>
            </Link>
            <Link to="/legal-advisory">
              <Button variant="outline">Get Legal Advisory</Button>
            </Link>
            <Link to="/resources">
              <Button variant="secondary">Explore Resources</Button>
            </Link>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Lawyers;
