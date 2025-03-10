
import { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import { MessageSquare, User, Users, Heart, Share2, BookmarkPlus, Filter, Search } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const communityPosts = [
    {
      id: 1,
      author: "Rajesh S.",
      avatar: "R",
      date: "3 days ago",
      title: "Coping with the stress of false 498A accusations",
      content: "I've been dealing with false accusations under IPC 498A for the past 6 months. The mental toll has been immense, but I've found some coping mechanisms that have helped me stay focused and positive...",
      likes: 42,
      comments: 18,
      category: "support",
      tags: ["498A", "Mental Health", "Coping Strategies"]
    },
    {
      id: 2,
      author: "Vikram M.",
      avatar: "V",
      date: "1 week ago",
      title: "My journey through the legal system - timeline and lessons learned",
      content: "When I was first accused, I had no idea what to expect. It's been a long journey, but I wanted to share the timeline of my case to help others prepare for what might lie ahead...",
      likes: 65,
      comments: 31,
      category: "legal",
      tags: ["Legal Process", "Timeline", "Preparation"]
    },
    {
      id: 3,
      author: "Anonymous",
      avatar: "A",
      date: "2 weeks ago",
      title: "How I gathered evidence to prove my innocence",
      content: "Evidence collection was crucial in my case. Here's a systematic approach I took to gather and organize evidence that ultimately helped me prove my innocence...",
      likes: 87,
      comments: 42,
      category: "advice",
      tags: ["Evidence", "Documentation", "Strategy"]
    },
    {
      id: 4,
      author: "Sanjay P.",
      avatar: "S",
      date: "1 month ago",
      title: "Found an excellent lawyer who specializes in false accusations",
      content: "After struggling with multiple lawyers who didn't understand the nuances of my case, I finally found someone who specializes in defending against false accusations. Sharing my experience and their contact details...",
      likes: 56,
      comments: 24,
      category: "resource",
      tags: ["Legal Help", "Lawyer", "Recommendation"]
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Posts', icon: <MessageSquare size={18} /> },
    { id: 'support', name: 'Support', icon: <Users size={18} /> },
    { id: 'legal', name: 'Legal', icon: <User size={18} /> },
    { id: 'advice', name: 'Advice', icon: <MessageSquare size={18} /> },
    { id: 'resource', name: 'Resources', icon: <BookmarkPlus size={18} /> }
  ];
  
  const filteredPosts = activeTab === 'all' 
    ? communityPosts 
    : communityPosts.filter(post => post.category === activeTab);

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
              Community Forum
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A safe space to share experiences, seek advice, and connect with others who understand.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content area */}
            <div className="w-full lg:w-3/4">
              {/* Search and filter */}
              <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <input
                      type="text"
                      placeholder="Search discussions..."
                      className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
                    />
                  </div>
                  <button className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-secondary text-foreground text-sm font-medium">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </button>
                  <button className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white text-sm font-medium">
                    Start New Discussion
                  </button>
                </div>
              </div>
              
              {/* Category tabs */}
              <div className="bg-white rounded-xl shadow-sm border p-2 mb-6 overflow-x-auto">
                <div className="flex space-x-1 min-w-max">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveTab(category.id)}
                      className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeTab === category.id
                          ? 'bg-primary text-white'
                          : 'bg-transparent text-foreground hover:bg-secondary'
                      }`}
                    >
                      {category.icon}
                      <span className="ml-2">{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Posts */}
              <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                          {post.avatar}
                        </div>
                        <div>
                          <p className="font-medium">{post.author}</p>
                          <p className="text-xs text-muted-foreground">{post.date}</p>
                        </div>
                        <div className="ml-auto">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-foreground">
                            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-medium mb-3">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.content}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex} 
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground pt-4 border-t">
                        <button className="inline-flex items-center gap-1 mr-4 hover:text-foreground transition-colors">
                          <Heart size={16} />
                          <span>{post.likes}</span>
                        </button>
                        <button className="inline-flex items-center gap-1 mr-4 hover:text-foreground transition-colors">
                          <MessageSquare size={16} />
                          <span>{post.comments}</span>
                        </button>
                        <button className="inline-flex items-center gap-1 ml-auto hover:text-foreground transition-colors">
                          <Share2 size={16} />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/4 space-y-6">
              {/* Community stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-sm border p-5"
              >
                <h3 className="font-medium mb-4">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Members</span>
                    <span className="font-medium">2,547</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Discussions</span>
                    <span className="font-medium">843</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Comments</span>
                    <span className="font-medium">12,942</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Online now</span>
                    <span className="font-medium">34</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Community guidelines */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white rounded-xl shadow-sm border p-5"
              >
                <h3 className="font-medium mb-4">Community Guidelines</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <svg className="h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    Be respectful and supportive of others
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <svg className="h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    Keep discussions constructive and on-topic
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <svg className="h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    Protect your privacy and others'
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <svg className="h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    No sharing of personal contact information
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-green-100 p-1 mt-0.5">
                      <svg className="h-2 w-2 text-green-600" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                    </div>
                    Report inappropriate content
                  </li>
                </ul>
                <button className="w-full mt-4 inline-flex items-center justify-center px-4 py-2 rounded-md bg-secondary text-foreground text-sm font-medium">
                  Read Full Guidelines
                </button>
              </motion.div>
              
              {/* Popular tags */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm border p-5"
              >
                <h3 className="font-medium mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    498A
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Legal Advice
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Mental Health
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Evidence
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Court Process
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Divorce
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Success Stories
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    Support
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Community;
