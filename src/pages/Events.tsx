import { Calendar, Clock, MapPin, Users, ExternalLink, Filter } from 'lucide-react';
import { useState } from 'react';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Workshops', 'Hackathons', 'Tech Talks', 'Competitions'];
  
  const events = [
    {
      id: 1,
      title: 'AI/ML Workshop Series',
      date: '2025-09-15',
      time: '10:00 AM - 4:00 PM',
      location: 'SIT Computer Lab',
      category: 'Workshops',
      description: 'Comprehensive hands-on workshop covering machine learning fundamentals, deep learning, and practical AI applications.',
      image: '/api/placeholder/400/250',
      attendees: 120,
      featured: true
    },
    {
      id: 2,
      title: 'HackSymbiosis 2025',
      date: '2025-10-20',
      time: '9:00 AM - 9:00 PM',
      location: 'SIT Main Auditorium',
      category: 'Hackathons',
      description: '48-hour hackathon focused on solving real-world problems using cutting-edge technology and innovation.',
      image: '/api/placeholder/400/250',
      attendees: 200,
      featured: true
    },
    {
      id: 3,
      title: 'Cloud Computing with AWS',
      date: '2025-09-28',
      time: '2:00 PM - 5:00 PM',
      location: 'Virtual Event',
      category: 'Tech Talks',
      description: 'Expert-led session on cloud architecture, AWS services, and best practices for scalable applications.',
      image: '/api/placeholder/400/250',
      attendees: 80,
      featured: false
    },
    {
      id: 4,
      title: 'Competitive Programming Boot Camp',
      date: '2025-10-05',
      time: '9:00 AM - 6:00 PM',
      location: 'SIT Programming Lab',
      category: 'Competitions',
      description: 'Intensive training program for competitive programming with algorithms, data structures, and problem-solving.',
      image: '/api/placeholder/400/250',
      attendees: 60,
      featured: false
    },
    {
      id: 5,
      title: 'Web Development Masterclass',
      date: '2025-09-22',
      time: '11:00 AM - 3:00 PM',
      location: 'SIT Auditorium B',
      category: 'Workshops',
      description: 'Complete guide to modern web development including React, Node.js, and deployment strategies.',
      image: '/api/placeholder/400/250',
      attendees: 100,
      featured: false
    },
    {
      id: 6,
      title: 'Cybersecurity Awareness Week',
      date: '2025-11-10',
      time: '10:00 AM - 4:00 PM',
      location: 'SIT Conference Hall',
      category: 'Tech Talks',
      description: 'Week-long series covering cybersecurity threats, ethical hacking, and digital privacy protection.',
      image: '/api/placeholder/400/250',
      attendees: 150,
      featured: true
    }
  ];

  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => event.category === activeFilter);

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
            Upcoming <span className="text-secondary">Events</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Join our exciting lineup of workshops, hackathons, and tech talks designed to accelerate your learning journey.
          </p>
          <div className="glass inline-flex items-center gap-2 px-6 py-3 rounded-lg text-primary-foreground">
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">{events.length} Events Scheduled</span>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-surface border-b border-card-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-text-secondary">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filter by:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : 'bg-card text-text-secondary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className={`card-elegant group ${event.featured ? 'ring-2 ring-accent' : ''}`}>
                {/* Event Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                    <Calendar className="h-12 w-12 text-accent" />
                  </div>
                  {event.featured && (
                    <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-3 right-3 glass px-3 py-1 rounded-full text-xs font-semibold text-primary">
                    {event.category}
                  </div>
                </div>

                {/* Event Details */}
                <div>
                  <h3 className="text-xl font-poppins font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Event Meta */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span className="text-sm">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-sm">{event.attendees} expected attendees</span>
                    </div>
                  </div>

                  {/* Register Button */}
                  <button className="w-full btn-hero group/btn">
                    Register Now
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-text-muted mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-bold text-text-secondary mb-2">
                No events found
              </h3>
              <p className="text-text-muted">
                No events match the selected filter. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface">
        <div className="container-custom text-center">
          <div className="glass-card max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">
              Want to Host an <span className="text-gradient">Event</span>?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Have an idea for a workshop, tech talk, or community event? We'd love to collaborate with you to make it happen. 
              Our team is always looking for new opportunities to engage and educate our community.
            </p>
            <button className="btn-secondary">
              Propose an Event
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;