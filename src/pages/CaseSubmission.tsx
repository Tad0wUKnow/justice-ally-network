
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { FileUp, ChevronRight, Shield, Eye, Lock } from 'lucide-react';

const CaseSubmission = () => {
  const [formStep, setFormStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const formSteps = [
    { title: "Personal Information", description: "Basic details about you" },
    { title: "Case Details", description: "Information about your situation" },
    { title: "Evidence Upload", description: "Supporting documents and media" },
    { title: "Review & Submit", description: "Finalize your submission" }
  ];

  return (
    <PageTransition>
      <main className="min-h-screen pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-10 text-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl md:text-4xl font-medium tracking-tight mb-4"
            >
              Submit Your Case
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Share your situation with us securely and confidentially. We're here to help.
            </motion.p>
          </div>

          {!isSubmitted ? (
            <>
              {/* Form steps */}
              <div className="mb-10">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                  {formSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center ${index < formSteps.length - 1 ? 'md:flex-1' : ''}`}
                    >
                      <div 
                        className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                          index <= formStep ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {index + 1}
                      </div>
                      
                      <div className="ml-3 hidden md:block">
                        <p className={`text-sm font-medium ${
                          index <= formStep ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {step.title}
                        </p>
                        <p className="text-xs text-muted-foreground hidden lg:block">
                          {step.description}
                        </p>
                      </div>
                      
                      {index < formSteps.length - 1 && (
                        <div className="hidden md:block flex-1 ml-4 mr-4">
                          <div className={`h-0.5 ${
                            index < formStep ? 'bg-primary' : 'bg-muted'
                          }`}></div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-sm border p-6 md:p-8"
              >
                <form onSubmit={handleSubmit}>
                  {formStep === 0 && (
                    <div className="space-y-6">
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name (or pseudonym)
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 disabled:cursor-not-allowed"
                          placeholder="Enter your name or a pseudonym"
                        />
                        <p className="text-xs text-muted-foreground">
                          You can use a pseudonym for anonymity
                        </p>
                      </div>
                      
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                          placeholder="Enter your email address"
                        />
                      </div>
                      
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="location" className="text-sm font-medium">
                          Location
                        </label>
                        <input
                          id="location"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                          placeholder="City, State, Country"
                        />
                      </div>
                      
                      <div className="bg-secondary/30 rounded-lg p-4 flex items-start gap-3">
                        <Lock className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Your privacy is important</p>
                          <p className="text-xs text-muted-foreground">
                            All personal information is kept confidential and securely stored.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {formStep === 1 && (
                    <div className="space-y-6">
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="caseTitle" className="text-sm font-medium">
                          Case Title
                        </label>
                        <input
                          id="caseTitle"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                          placeholder="Brief title for your case"
                        />
                      </div>
                      
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="caseType" className="text-sm font-medium">
                          Type of Case
                        </label>
                        <select
                          id="caseType"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                        >
                          <option value="" disabled selected>Select case type</option>
                          <option value="ipc498a">IPC 498A Related</option>
                          <option value="divorce">Divorce Related</option>
                          <option value="custody">Child Custody</option>
                          <option value="domestic">Domestic Violence Accusation</option>
                          <option value="workplace">Workplace Accusation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="caseDescription" className="text-sm font-medium">
                          Case Description
                        </label>
                        <textarea
                          id="caseDescription"
                          className="flex min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                          placeholder="Please describe your situation in detail"
                        ></textarea>
                      </div>
                      
                      <div className="flex flex-col space-y-1.5">
                        <label htmlFor="timelines" className="text-sm font-medium">
                          Important Dates/Timeline
                        </label>
                        <textarea
                          id="timelines"
                          className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                          placeholder="E.g., Date of accusation, court dates, etc."
                        ></textarea>
                      </div>
                    </div>
                  )}
                  
                  {formStep === 2 && (
                    <div className="space-y-6">
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-sm font-medium">
                          Upload Supporting Documents
                        </label>
                        <div className="border-2 border-dashed border-muted rounded-lg p-10 text-center cursor-pointer hover:bg-muted/5 transition-colors">
                          <div className="flex flex-col items-center gap-3">
                            <FileUp className="h-10 w-10 text-muted-foreground" />
                            <div>
                              <p className="font-medium text-sm">
                                Drag files here or click to upload
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                Support for documents, images, and PDFs (max 10MB per file)
                              </p>
                            </div>
                            <input type="file" className="hidden" multiple />
                            <button type="button" className="mt-2 inline-flex items-center px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded-md">
                              Select Files
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-secondary/30 rounded-lg p-4 flex items-start gap-3">
                        <Shield className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">Evidence Security</p>
                          <p className="text-xs text-muted-foreground">
                            All uploaded files are encrypted and only accessible to authorized personnel reviewing your case.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-sm font-medium">
                          Additional Comments on Evidence
                        </label>
                        <textarea
                          className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                          placeholder="Any context or explanation for the evidence you're providing"
                        ></textarea>
                      </div>
                    </div>
                  )}
                  
                  {formStep === 3 && (
                    <div className="space-y-6">
                      <div className="bg-secondary/40 rounded-lg p-6">
                        <h3 className="font-medium text-lg mb-4">Review Your Submission</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">Personal Information</p>
                            <p className="text-sm">John Doe (Pseudonym)</p>
                            <p className="text-sm">johndoe@example.com</p>
                            <p className="text-sm">Mumbai, Maharashtra, India</p>
                          </div>
                          
                          <div className="pt-3 border-t border-border/40">
                            <p className="text-sm font-medium text-muted-foreground">Case Details</p>
                            <p className="text-sm font-medium">False allegation of domestic violence</p>
                            <p className="text-sm">Type: Domestic Violence Accusation</p>
                            <p className="text-sm line-clamp-3">
                              I am being falsely accused of domestic violence by my spouse during divorce proceedings...
                            </p>
                          </div>
                          
                          <div className="pt-3 border-t border-border/40">
                            <p className="text-sm font-medium text-muted-foreground">Uploaded Evidence</p>
                            <ul className="text-sm list-disc list-inside">
                              <li>Character reference letters (3 files)</li>
                              <li>Legal correspondence.pdf</li>
                              <li>Previous court documents.pdf</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="consent"
                          className="mt-1 rounded border-input h-4 w-4 text-primary focus:ring-primary/20"
                        />
                        <label htmlFor="consent" className="text-sm">
                          I confirm that the information provided is accurate to the best of my knowledge, and I consent to JusticeChain storing and processing this information to assist with my case.
                        </label>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="anonymous"
                          className="mt-1 rounded border-input h-4 w-4 text-primary focus:ring-primary/20"
                        />
                        <label htmlFor="anonymous" className="text-sm">
                          I would like my case to be shared anonymously with the community for peer support (optional).
                        </label>
                      </div>
                      
                      <div className="bg-secondary/30 rounded-lg p-4 flex items-start gap-3">
                        <Eye className="w-5 h-5 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-sm font-medium">What happens next?</p>
                          <p className="text-xs text-muted-foreground">
                            After submission, your case will be reviewed by our team who will connect you with appropriate resources and support within 48 hours.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-8 flex justify-between">
                    {formStep > 0 && (
                      <button
                        type="button"
                        onClick={() => setFormStep(formStep - 1)}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-foreground bg-secondary rounded-md hover:bg-secondary/80 transition-colors"
                      >
                        Back
                      </button>
                    )}
                    
                    {formStep < formSteps.length - 1 ? (
                      <button
                        type="button"
                        onClick={() => setFormStep(formStep + 1)}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors ml-auto"
                      >
                        Next
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center px-6 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors ml-auto disabled:opacity-70"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Case"}
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-sm border p-8 md:p-12 text-center max-w-2xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              
              <h2 className="text-2xl font-medium mb-4">Case Submitted Successfully</h2>
              
              <p className="text-muted-foreground mb-8">
                Thank you for sharing your case with us. Our team will review your submission and get back to you within 48 hours via the email you provided.
              </p>
              
              <div className="bg-secondary/40 rounded-lg p-4 mb-8 text-left">
                <p className="font-medium mb-2">Your case reference number:</p>
                <p className="text-lg font-mono bg-white p-2 rounded border text-center">
                  JC-{Math.floor(100000 + Math.random() * 900000)}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Please save this reference number for future correspondence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/community'}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-colors hover:bg-primary/90"
                >
                  Join Community
                </button>
                <button 
                  onClick={() => window.location.href = '/resources'}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-foreground font-medium transition-colors hover:bg-secondary/80"
                >
                  View Resources
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </PageTransition>
  );
};

export default CaseSubmission;
