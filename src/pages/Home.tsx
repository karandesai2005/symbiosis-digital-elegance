import { ArrowRight, Users, Calendar, BookOpen, Camera, Code, Trophy, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Our Team',
      description: 'Meet the passionate individuals driving innovation at Symbiosis ACM',
      path: '/team',
      color: 'text-accent',
    },
    {
      icon: Calendar,
      title: 'Upcoming Events',
      description: 'Join our workshops, hackathons, and tech talks to expand your knowledge',
      path: '/events',
      color: 'text-secondary',
    },
    {
      icon: BookOpen,
      title: 'Our Blogs',
      description: 'Discover insights, tutorials, and tech trends from our community',
      path: '/blogs',
      color: 'text-primary',
    },
    {
      icon: Camera,
      title: 'Glimpses',
      description: 'Explore moments from our journey and community achievements',
      path: '/glimpses',
      color: 'text-accent-light',
    },
  ];

  const stats = [
    { number: '500+', label: 'Active Members', icon: Users },
    { number: '50+', label: 'Events Hosted', icon: Calendar },
    { number: '25+', label: 'Tech Talks', icon: Code },
    { number: '15+', label: 'Awards Won', icon: Trophy },
  ];

  return (
    <div className="fade-in">

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center text-center py-20 relative overflow-hidden">
        <div className="container-custom z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-poppins font-bold text-primary-foreground mb-6 animate-float">
              Empowering Tech
              <span className="block text-accent-light animate-pulse-glow">Innovators</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              At Symbiosis, we nurture creativity, foster collaboration, and build the future of technology together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/team" className="btn-hero group inline-flex items-center justify-center px-6 py-3 rounded-lg">
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/events" className="btn-secondary group inline-flex items-center justify-center px-6 py-3 rounded-lg">
                Explore Events
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/8 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="glass-card mb-4 group-hover:scale-105 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="text-3xl font-poppins font-bold text-primary mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-text-secondary font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-6">
              Discover Our <span className="text-gradient">Community</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore the different facets of our vibrant ACM student chapter and become part of our growing tech community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className="group"
              >
                <div className="glass-card h-full text-center group-hover:scale-105 transition-all duration-500">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br from-current/10 to-current/5 mb-6 ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-center text-accent font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card text-center">
              <div className="flex justify-center mb-6">
                <div className="flex justify-center mb-6">
                  <img src="/acm-logo.png" alt="ACM Logo" className="h-45 w-45" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">
                About Symbiosis ACM Student Chapter
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p className="text-lg">
                  The Symbiosis ACM Student Chapter is a dynamic community of passionate computer science enthusiasts,
                  innovators, and future tech leaders. We are dedicated to fostering excellence in computing education,
                  research, and professional development.
                </p>
                <p>
                  Our chapter serves as a bridge between academic learning and industry expertise, providing our members
                  with opportunities to engage with cutting-edge technologies, participate in competitive programming,
                  and connect with like-minded peers who share a passion for innovation.
                </p>
                <p>
                  Through workshops, hackathons, guest lectures, and collaborative projects, we create an environment
                  where students can explore new frontiers in computer science, develop practical skills, and build
                  lasting professional networks that will serve them throughout their careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home
