import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Users, MapPin } from 'lucide-react';

type EventItem =
  | {
      id: number;
      title: string;
      description: string;
      category: string;
      date: string;
      location: string;
      participants: number;
      src: string;
      images?: never;
    }
  | {
      id: number;
      title: string;
      description: string;
      category: string;
      date: string;
      location: string;
      participants: number;
      images: string[];
      src?: never;
    };

const Glimpses = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('All');

  const categories = ['All', 'Hackathons', 'Workshops', 'Tech Talks', 'Community', 'Awards'];

  const events: EventItem[] = [
    /* ================= LATEST EVENT (CLUSTERED) ================= */

    {
      id: 100,
      title: 'Data to Dashboards – Tableau Bootcamp',
      description:
        'Hands-on Tableau bootcamp focused on transforming raw data into meaningful dashboards.',
      category: 'Workshops',
      date: '2026-01-10',
      location: 'SIT Pune',
      participants: 150,
      images: [
        '/jan2026/img2.jpeg',
        '/jan2026/img3.jpeg',
        '/jan2026/img4.jpeg'
      ]
    },

    /* ================= EXISTING EVENTS (UNCHANGED) ================= */

    {
      id: 1,
      title: 'Hackathon Event',
      description: 'High-energy hackathon with students building innovative solutions.',
      category: 'Hackathons',
      date: '2024-03-15',
      location: 'SIT Campus',
      participants: 200,
      src: '/hackathon.jpeg'
    },
    {
      id: 2,
      title: 'API + Postman Workshop',
      description: 'Hands-on API testing and development workshop.',
      category: 'Workshops',
      date: '2024-02-20',
      location: 'Computer Lab',
      participants: 120,
      src: '/api+postman.jpeg'
    },
    {
      id: 3,
      title: 'Cloud Computing Session',
      description: 'Exploring cloud technologies and real-world use cases.',
      category: 'Tech Talks',
      date: '2024-01-18',
      location: 'Auditorium',
      participants: 150,
      src: '/cloud_computing.jpeg'
    },
    {
      id: 4,
      title: 'Cybersecurity Awareness',
      description: 'Session on cybersecurity fundamentals and ethical hacking.',
      category: 'Tech Talks',
      date: '2024-01-30',
      location: 'Conference Hall',
      participants: 110,
      src: '/cybersecurity.jpeg'
    },
    {
      id: 5,
      title: 'ACM Summit 2023',
      description: 'ACM student summit showcasing innovation and collaboration.',
      category: 'Community',
      date: '2023-11-20',
      location: 'SIT Pune',
      participants: 300,
      src: '/acmsummit2023.jpeg'
    },
    {
      id: 6,
      title: 'ACM SIT Launch',
      description: 'Official launch of the ACM Student Chapter at SIT.',
      category: 'Community',
      date: '2023-09-10',
      location: 'SIT Campus',
      participants: 250,
      src: '/amc_sitlaunch.jpeg'
    },
    {
      id: 7,
      title: 'Tech Pe Charcha',
      description: 'Interactive tech discussion session with students.',
      category: 'Community',
      date: '2024-04-10',
      location: 'Open Arena',
      participants: 80,
      src: '/techpecharcha.jpeg'
    },
    {
      id: 8,
      title: 'TechVortex',
      description: 'Flagship tech event with multiple sessions and competitions.',
      category: 'Awards',
      date: '2024-05-20',
      location: 'Exhibition Hall',
      participants: 400,
      src: '/techvortex.jpeg'
    }
  ];

  const filteredEvents =
    currentCategory === 'All'
      ? events
      : events.filter(e => e.category === currentCategory);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

  const images =
    selectedEvent && 'images' in selectedEvent
      ? selectedEvent.images
      : selectedEvent && 'src' in selectedEvent
      ? [selectedEvent.src]
      : [];

  const nextImage = () =>
    setCurrentImageIndex(i => (i + 1) % images.length);

  const prevImage = () =>
    setCurrentImageIndex(i => (i - 1 + images.length) % images.length);

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="hero-gradient py-20 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary-foreground mb-6">
            Glimpses of Our <span className="text-secondary">Journey</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Real moments from events, workshops, and community gatherings.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-surface border-b border-card-border">
        <div className="container-custom flex justify-center gap-3 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCurrentCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium ${
                currentCategory === cat
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card text-text-secondary hover:bg-accent/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="card-elegant p-4 cursor-pointer"
              onClick={() => {
                setSelectedEvent(event);
                setCurrentImageIndex(0);
              }}
            >
              {'images' in event ? (
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {event.images.slice(0, 3).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="rounded-lg object-cover h-28 w-full"
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={event.src}
                  className="rounded-lg object-cover h-48 w-full mb-3"
                />
              )}

              <h3 className="font-bold text-primary">{event.title}</h3>
              <p className="text-sm text-text-secondary">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setSelectedEvent(null)}
          >
            <X size={32} />
          </button>

          {images.length > 1 && (
            <>
              <button className="absolute left-6 text-white" onClick={prevImage}>
                <ChevronLeft size={36} />
              </button>
              <button className="absolute right-6 text-white" onClick={nextImage}>
                <ChevronRight size={36} />
              </button>
            </>
          )}

          <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden">
            <img
              src={images[currentImageIndex]}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold">{selectedEvent.title}</h3>
              <p className="text-text-secondary mb-4">
                {selectedEvent.description}
              </p>
              <div className="flex gap-4 text-sm text-text-secondary">
                <span className="flex gap-1 items-center">
                  <Calendar size={14} /> {formatDate(selectedEvent.date)}
                </span>
                <span className="flex gap-1 items-center">
                  <MapPin size={14} /> {selectedEvent.location}
                </span>
                <span className="flex gap-1 items-center">
                  <Users size={14} /> {selectedEvent.participants}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Glimpses;
