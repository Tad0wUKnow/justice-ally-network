
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { Send, Bot, ArrowRight, Paperclip, Info, CornerDownLeft, Search } from 'lucide-react';

const LegalAdvisory = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { 
      role: 'bot', 
      content: 'Hello! I\'m the JusticeChain Legal Advisory Bot. I can provide preliminary information about legal situations involving false accusations. How can I assist you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const faqs = [
    "What should I do if I've been falsely accused under IPC 498A?",
    "How do I gather evidence to defend against false allegations?",
    "What are my rights when facing false domestic violence claims?",
    "Can I file a defamation case against false accusers?",
    "How long does the legal process typically take?"
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    const newChatHistory = [
      ...chatHistory,
      { 
        role: 'user', 
        content: message, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
    
    setChatHistory(newChatHistory);
    setMessage('');
    
    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
      let botResponse;
      
      // Simple pattern matching for demo purposes
      if (message.toLowerCase().includes('498a')) {
        botResponse = "If you've been falsely accused under IPC 498A (dowry harassment), here are immediate steps to take:\n\n1. Consult a lawyer specializing in such cases immediately\n2. Document all communication with the accuser\n3. Gather character witnesses and evidence of your relationship\n4. Avoid direct confrontation with the accuser\n5. Prepare for potential bail proceedings\n\nWould you like more specific information about any of these steps?";
      } else if (message.toLowerCase().includes('evidence')) {
        botResponse = "For gathering evidence to defend against false allegations, consider:\n\n• Secure all communication (text messages, emails, call records)\n• Collect financial records to counter any financial abuse claims\n• Maintain a timeline of events with dates and witnesses\n• Gather character references from colleagues, friends, and family\n• Document any inconsistencies in the allegations\n• Consider CCTV footage if available\n\nWould you like specific guidance on documenting any particular type of evidence?";
      } else if (message.toLowerCase().includes('rights')) {
        botResponse = "When facing false accusations, you have several important rights:\n\n• Right to legal representation\n• Right to be presumed innocent until proven guilty\n• Right to bail (in most cases)\n• Right to cross-examine witnesses\n• Right to present evidence in your defense\n• Right to appeal\n\nRemember that specific rights may vary by jurisdiction and case type. Would you like to know more about any specific right?";
      } else if (message.toLowerCase().includes('defamation')) {
        botResponse = "Yes, you may be able to file a defamation case against false accusers, but consider these factors:\n\n• You must wait until the original case concludes with your acquittal\n• You need solid evidence proving malicious intent behind the false accusations\n• Defamation cases can be lengthy and expensive\n• The burden of proof will be on you\n\nI recommend consulting with a lawyer who specializes in defamation law for case-specific advice.";
      } else if (message.toLowerCase().includes('time') || message.toLowerCase().includes('long')) {
        botResponse = "The legal process for false accusation cases varies greatly, but typically:\n\n• Initial investigation: 1-3 months\n• Court proceedings: 1-3 years (sometimes longer)\n• Appeals (if necessary): Additional 1-2 years\n\nFactors affecting timeline include court backlog, complexity of the case, jurisdiction, and evidence availability. Focus on building a strong defense rather than a quick resolution, as thorough preparation is crucial.";
      } else {
        botResponse = "Thank you for your question. While I'm designed to provide general legal information, your situation may require specific legal advice. I recommend consulting with a qualified lawyer for personalized guidance. Would you like me to provide general information about false accusations or suggest resources to find legal help?";
      }
      
      setChatHistory([
        ...newChatHistory,
        { 
          role: 'bot', 
          content: botResponse, 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1000);
  };

  return (
    <PageTransition>
      <main className="min-h-screen pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl md:text-4xl font-medium tracking-tight mb-4"
            >
              Legal Advisory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Get preliminary guidance on legal matters with our advisory chatbot.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main chat area */}
            <div className="w-full lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-sm border overflow-hidden h-[600px] flex flex-col"
              >
                {/* Chat header */}
                <div className="p-4 border-b bg-secondary/30 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium">Legal Advisory Bot</h3>
                    <p className="text-xs text-muted-foreground">
                      Provides information based on common legal scenarios
                    </p>
                  </div>
                </div>
                
                {/* Chat messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatHistory.map((chat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[75%] ${
                        chat.role === 'user'
                          ? 'bg-primary text-white rounded-tl-xl rounded-tr-xl rounded-bl-xl'
                          : 'bg-secondary/50 text-foreground rounded-tl-xl rounded-tr-xl rounded-br-xl'
                      } px-4 py-3 text-sm`}>
                        {chat.content.split('\n').map((line, i) => (
                          <div key={i} className={i > 0 ? 'mt-2' : ''}>
                            {line}
                          </div>
                        ))}
                        <div className={`text-xs mt-1 ${chat.role === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                          {chat.time}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Message input */}
                <div className="p-4 border-t">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                      <Paperclip size={18} />
                    </button>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your question here..."
                      className="flex-1 bg-secondary/30 border-0 focus-visible:ring-0 text-sm rounded-md px-4 py-2.5"
                    />
                    <button 
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className={`p-2 rounded-md ${
                        message.trim() ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground flex items-center gap-1">
                    <Info size={12} />
                    <span>
                      This bot provides general information, not legal advice. Consult with a qualified lawyer for specific guidance.
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/3 space-y-6">
              {/* Suggested questions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-sm border p-5"
              >
                <h3 className="font-medium mb-4">Suggested Questions</h3>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setMessage(faq);
                      }}
                      className="w-full text-left p-3 rounded-md text-sm hover:bg-secondary/50 transition-colors flex items-center justify-between group"
                    >
                      <span>{faq}</span>
                      <CornerDownLeft size={14} className="opacity-0 group-hover:opacity-100 text-muted-foreground transition-opacity" />
                    </button>
                  ))}
                </div>
              </motion.div>
              
              {/* Legal resources */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-xl shadow-sm border p-5"
              >
                <h3 className="font-medium mb-4">Legal Resources</h3>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                  />
                </div>
                <div className="space-y-4">
                  <a href="#" className="block p-3 rounded-md border border-border hover:bg-secondary/30 transition-colors">
                    <h4 className="font-medium text-sm">Understanding IPC 498A</h4>
                    <p className="text-xs text-muted-foreground">Comprehensive guide to the law and defensive strategies</p>
                    <div className="mt-2 flex items-center text-primary text-xs font-medium">
                      <span>Read guide</span>
                      <ArrowRight size={12} className="ml-1" />
                    </div>
                  </a>
                  <a href="#" className="block p-3 rounded-md border border-border hover:bg-secondary/30 transition-colors">
                    <h4 className="font-medium text-sm">Evidence Collection Toolkit</h4>
                    <p className="text-xs text-muted-foreground">Templates and checklists for gathering defense materials</p>
                    <div className="mt-2 flex items-center text-primary text-xs font-medium">
                      <span>Download toolkit</span>
                      <ArrowRight size={12} className="ml-1" />
                    </div>
                  </a>
                  <a href="#" className="block p-3 rounded-md border border-border hover:bg-secondary/30 transition-colors">
                    <h4 className="font-medium text-sm">Legal Process Timeline</h4>
                    <p className="text-xs text-muted-foreground">What to expect at each stage of your case</p>
                    <div className="mt-2 flex items-center text-primary text-xs font-medium">
                      <span>View timeline</span>
                      <ArrowRight size={12} className="ml-1" />
                    </div>
                  </a>
                </div>
                <button className="w-full mt-4 text-center text-sm text-primary font-medium">
                  View all resources
                </button>
              </motion.div>
              
              {/* Legal disclaimer */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-secondary/30 rounded-xl p-5"
              >
                <h3 className="font-medium text-sm mb-2">Important Disclaimer</h3>
                <p className="text-xs text-muted-foreground">
                  The information provided by the Legal Advisory Bot is for general informational purposes only and should not be construed as legal advice. Always consult with a qualified lawyer for advice specific to your situation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default LegalAdvisory;
