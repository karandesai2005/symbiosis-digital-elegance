import { Search, Calendar, User, ArrowRight, Eye, MessageCircle, Tag } from 'lucide-react';
import { useState } from 'react';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
      excerpt: 'Explore the fundamentals of machine learning, from basic concepts to your first ML model. Perfect for students beginning their AI journey.',
      author: 'Kavya Reddy',
      date: '2025-08-20',
      category: 'AI/ML',
      readTime: '8 min read',
      views: 1245,
      comments: 23,
      featured: true,
      tags: ['Machine Learning', 'AI', 'Python', 'Beginner']
    },
    {
      id: 2,
      title: 'Building Scalable Web Applications with React and Node.js',
      excerpt: 'Learn best practices for creating robust, scalable web applications using modern JavaScript technologies and cloud deployment strategies.',
      author: 'Harsh Gupta',
      date: '2025-08-18',
      category: 'Web Development',
      readTime: '12 min read',
      views: 892,
      comments: 15,
      featured: true,
      tags: ['React', 'Node.js', 'JavaScript', 'Web Development']
    },
    {
      id: 3,
      title: 'Cybersecurity Essentials for Software Developers',
      excerpt: 'Understanding common security vulnerabilities and implementing best practices to protect your applications from potential threats.',
      author: 'Rohit Singh',
      date: '2025-08-15',
      category: 'Security',
      readTime: '10 min read',
      views: 654,
      comments: 8,
      featured: false,
      tags: ['Cybersecurity', 'Security', 'Web Security', 'Best Practices']
    },
    {
      id: 4,
      title: 'Data Structures and Algorithms: Mastering the Fundamentals',
      excerpt: 'A comprehensive guide to essential data structures and algorithms that every computer science student should master for technical interviews.',
      author: 'Rahul Mishra',
      date: '2025-08-12',
      category: 'Algorithms',
      readTime: '15 min read',
      views: 1567,
      comments: 34,
      featured: false,
      tags: ['DSA', 'Algorithms', 'Programming', 'Interview Prep']
    },
    {
      id: 5,
      title: 'The Future of Cloud Computing: Trends and Predictions',
      excerpt: 'Exploring emerging trends in cloud technology, serverless computing, and how these innovations will shape the future of software development.',
      author: 'Ananya Kumar',
      date: '2025-08-10',
      category: 'Cloud Computing',
      readTime: '9 min read',
      views: 743,
      comments: 12,
      featured: false,
      tags: ['Cloud Computing', 'AWS', 'Technology Trends', 'Future Tech']
    },
    {
      id: 6,
      title: 'UI/UX Design Principles for Developers',
      excerpt: 'Essential design principles that every developer should know to create intuitive and user-friendly interfaces for their applications.',
      author: 'Divya Nair',
      date: '2025-08-08',
      category: 'Design',
      readTime: '7 min read',
      views: 521,
      comments: 9,
      featured: false,
      tags: ['UI/UX', 'Design', 'User Experience', 'Frontend']
    },
    {
      id: 7,
      title: 'Open Source Contribution: How to Get Started',
      excerpt: 'A step-by-step guide to making your first open source contribution, from finding projects to submitting your first pull request.',
      author: 'Arjun Patel',
      date: '2025-08-05',
      category: 'Open Source',
      readTime: '11 min read',
      views: 987,
      comments: 18,
      featured: true,
      tags: ['Open Source', 'GitHub', 'Contribution', 'Community']
    },
    {
      id: 8,
      title: 'Blockchain Technology: Beyond Cryptocurrency',
      excerpt: 'Discovering the potential applications of blockchain technology in various industries and its impact on future business models.',
      author: 'Siddharth Rao',
      date: '2025-08-03',
      category: 'Blockchain',
      readTime: '13 min read',
      views: 678,
      comments: 14,
      featured: false,
      tags: ['Blockchain', 'Cryptocurrency', 'Technology', 'Innovation']
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Development', 'Security', 'Algorithms', 'Cloud Computing', 'Design', 'Open Source', 'Blockchain'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="fade-in">
      {/* Header Section */}
      <section className="hero-gradient py-20 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary-foreground mb-6">
            Our <span className="text-secondary">Blogs</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover insights, tutorials, and tech trends from our community of passionate developers and researchers.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="glass rounded-lg p-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-foreground/70" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-transparent text-primary-foreground placeholder-primary-foreground/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-surface border-b border-card-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-text-secondary">
              <Tag className="h-4 w-4" />
              <span className="font-medium">Categories:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : 'bg-card text-text-secondary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === 'All' && searchTerm === '' && (
        <section className="py-16 bg-surface">
          <div className="container-custom">
            <h2 className="text-3xl font-poppins font-bold text-primary mb-8 text-center">
              Featured <span className="text-gradient">Articles</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).slice(0, 2).map((post) => (
                <div key={post.id} className="glass-card group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </span>
                    <span className="text-accent font-semibold text-sm">{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-poppins font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-accent/10 text-accent px-2 py-1 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-text-secondary">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    <button className="text-accent hover:text-accent-dark font-medium flex items-center gap-1 group">
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="card-elegant group">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-text-muted text-xs">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-poppins font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-card-border/50 text-text-muted px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-text-secondary border-t border-card-border pt-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 btn-secondary group/btn">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-text-muted mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-bold text-text-secondary mb-2">
                No articles found
              </h3>
              <p className="text-text-muted">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-surface">
        <div className="container-custom text-center">
          <div className="glass-card max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">
              Stay Updated with Our <span className="text-gradient">Latest Posts</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Subscribe to our newsletter and never miss out on the latest tech insights, tutorials, and community updates 
              from the Symbiosis ACM Student Chapter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-card-border focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn-secondary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;