import { Search, Calendar, User, ArrowRight, Tag, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Apache Kafka: A Scalable Solution for Real-Time Data Streaming',
      excerpt: 'A beginner-friendly deep dive into Apache Kafka and real-time data streaming.',
      author: 'Karan Desai',
      date: '2024-10-01',
      category: 'Distributed Systems',
      readTime: '6 min read',
      featured: true,
      link: 'https://medium.com/@karanishudesai2/understanding-apache-kafka-a-scalable-solution-for-real-time-data-streaming-f4b9cfa268ea'
    },
    {
      id: 2,
      title: 'The Secret Agent Behind Every Website: A Hilarious Journey into DNS',
      excerpt: 'An entertaining explanation of DNS using google.com as our guide.',
      author: 'Karan Desai',
      date: '2024-09-20',
      category: 'Networking',
      readTime: '5 min read',
      featured: true,
      link: 'https://medium.com/@karanishudesai2/the-secret-agent-behind-every-website-a-hilarious-journey-into-dns-with-google-com-as-our-guide-b2bf4ff4e940'
    },
    {
      id: 3,
      title: 'Demystifying Network Communication: TCP/IP Model vs OSI Model',
      excerpt: 'Clear comparison of TCP/IP and OSI models to understand networking basics.',
      author: 'Karan Desai',
      date: '2024-09-10',
      category: 'Networking',
      readTime: '7 min read',
      featured: false,
      link: 'https://medium.com/@karanishudesai2/demystifying-network-communication-tcp-ip-model-vs-osi-model-4b548ebd2b02'
    },
    {
      id: 4,
      title: 'Unveiling the Innovation Behind Torrents: Beyond Piracy',
      excerpt: 'Technical breakdown of BitTorrent and its use beyond piracy.',
      author: 'Karan Desai',
      date: '2024-08-28',
      category: 'Networking',
      readTime: '6 min read',
      featured: false,
      link: 'https://medium.com/@karanishudesai2/unveiling-the-innovation-behind-torrents-beyond-piracy-2a60e4a8833c'
    },
    {
      id: 5,
      title: 'Why Everyone Should Use a VPN',
      excerpt: 'Practical guide to VPNs, privacy, and security.',
      author: 'Karan Desai',
      date: '2024-08-15',
      category: 'Security',
      readTime: '4 min read',
      featured: false,
      link: 'https://medium.com/@karanishudesai2/why-everyone-should-use-vpn-adf184cb80e7'
    },
    // Reeti’s Posts
    {
      id: 6,
      title: 'Windows Services Architecture',
      excerpt: 'Learn how Windows Services are structured and how they work under the hood.',
      author: 'Reeti Aggarwal',
      date: '2025-01-20',
      category: 'Windows',
      readTime: '5 min read',
      featured: false,
      link: 'https://medium.com/@reeti05agarwal/windows-services-architecture-f6b78997467f'
    },
    {
      id: 7,
      title: 'Mastering Nmap: The Ultimate Guide for Beginners',
      excerpt: 'Comprehensive Nmap walkthrough for beginners in cybersecurity.',
      author: 'Reeti Aggarwal',
      date: '2025-01-15',
      category: 'Cybersecurity',
      readTime: '7 min read',
      featured: false,
      link: 'https://medium.com/@reeti05agarwal/mastering-nmap-the-ultimate-guide-for-beginners-209d87c124eb'
    },
    {
      id: 8,
      title: 'Kali Linux Virtual Machine in VirtualBox',
      excerpt: 'Step-by-step guide to installing Kali Linux as a VirtualBox VM.',
      author: 'Reeti Aggarwal',
      date: '2025-01-10',
      category: 'Linux',
      readTime: '8 min read',
      featured: false,
      link: 'https://medium.com/@reeti05agarwal/kali-linux-virtual-machine-virtual-box-d6d35de163b6'
    }
  ];

  const categories = ['All', 'Networking', 'Security', 'Distributed Systems', 'Windows', 'Cybersecurity', 'Linux'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="hero-gradient py-20 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary-foreground mb-6">
            Our <span className="text-secondary">Blogs</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Real-world explanations of tech, networking, security & more — written to actually make sense.
          </p>

          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/70" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-transparent border border-primary-foreground/20 rounded-lg text-primary-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-surface border-b border-card-border">
        <div className="container-custom flex flex-wrap justify-center gap-3">
          <Tag className="h-4 w-4 text-text-secondary" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card text-text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-20">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="card-elegant group">
              <span className="text-xs text-accent font-semibold">{post.category}</span>

              <h3 className="text-lg font-poppins font-bold text-primary mt-3 mb-3 group-hover:text-accent">
                {post.title}
              </h3>

              <p className="text-text-secondary text-sm mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                <div className="flex items-center gap-2">
                  <User className="h-3 w-3" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3" />
                  {formatDate(post.date)}
                </div>
              </div>

              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full flex items-center justify-center gap-2"
              >
                Read on Medium
                <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
