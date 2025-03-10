
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Upload, FileText, Shield } from 'lucide-react';

const SubmitCase = () => {
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
                  Submit Your Case
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.1 } }}
                  className="mt-2 text-muted-foreground"
                >
                  Share your experience confidentially and get the support you need.
                </motion.p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield size={16} className="text-primary" />
                <span>Your privacy is our priority. All submissions are confidential.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form section */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Case Details</CardTitle>
                  <CardDescription>
                    Provide information about your situation. All fields are optional.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="caseType">Type of Case</Label>
                      <Select>
                        <SelectTrigger id="caseType">
                          <SelectValue placeholder="Select case type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="498a">IPC 498A</SelectItem>
                          <SelectItem value="domestic">Domestic Violence Act</SelectItem>
                          <SelectItem value="maintenance">Maintenance Case</SelectItem>
                          <SelectItem value="custody">Child Custody</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="situation">
                        Describe Your Situation
                        <span className="text-xs text-muted-foreground ml-2">(confidential)</span>
                      </Label>
                      <Textarea
                        id="situation"
                        placeholder="Please describe what happened..."
                        className="min-h-[150px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="stage">Current Stage</Label>
                      <Select>
                        <SelectTrigger id="stage">
                          <SelectValue placeholder="Select current stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pre">Pre-FIR Stage</SelectItem>
                          <SelectItem value="fir">FIR Filed</SelectItem>
                          <SelectItem value="investigation">Police Investigation</SelectItem>
                          <SelectItem value="court">Court Proceedings</SelectItem>
                          <SelectItem value="appeal">Appeal Stage</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">
                        Location
                        <span className="text-xs text-muted-foreground ml-2">(city/state only)</span>
                      </Label>
                      <Input id="location" placeholder="e.g., Delhi, Mumbai, Bangalore..." />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="upload" className="block mb-2">
                        Upload Supporting Documents
                        <span className="text-xs text-muted-foreground ml-2">(optional)</span>
                      </Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                        <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                        <div className="text-sm text-muted-foreground mb-3">
                          Drag & drop files or click to browse
                        </div>
                        <Button variant="secondary" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Choose Files
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Accepted formats: PDF, JPG, PNG (max 5MB each)
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link to="/">
                    <Button variant="outline">Cancel</Button>
                  </Link>
                  <Button>Submit Case</Button>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-medium">1. Case Review</div>
                    <p className="text-sm text-muted-foreground">
                      Our team will review your submission within 24-48 hours.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium">2. Resource Matching</div>
                    <p className="text-sm text-muted-foreground">
                      We'll match you with appropriate resources and legal guidance.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium">3. Community Support</div>
                    <p className="text-sm text-muted-foreground">
                      Connect with others facing similar situations for support.
                    </p>
                  </div>
                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield size={16} className="text-primary" />
                      <span className="font-medium">Privacy Assurance</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your information remains confidential and is only shared with legal advisors with your consent.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-6">
                <div className="flex gap-2 mb-4">
                  <Link to="/legal-advisory" className="flex-1">
                    <Button variant="outline" className="w-full">Legal Advisory</Button>
                  </Link>
                  <Link to="/community" className="flex-1">
                    <Button variant="outline" className="w-full">Community</Button>
                  </Link>
                </div>
                <Link to="/resources" className="block">
                  <Button variant="secondary" className="w-full">View Resources</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default SubmitCase;
