import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Users, MapPin } from 'lucide-react';

const Glimpses = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState('All');

  const categories = ['All', 'Hackathons', 'Workshops', 'Tech Talks', 'Community', 'Awards'];

  const images = [
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

  const filteredImages =
    currentCategory === 'All'
      ? images
      : images.filter(img => img.category === currentCategory);

  const selectedImageData = images.find(img => img.id === selectedImage);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

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

      {/* Category Filter */}
      <section className="py-8 bg-surface border-b border-card-border">
        <div className="container-custom flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                currentCategory === category
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-card text-text-secondary hover:bg-accent/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container-custom columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map(image => (
            <div
              key={image.id}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="card-elegant overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="font-bold text-primary mb-1">{image.title}</h3>
                  <p className="text-sm text-text-secondary">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <div className="max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <img
              src={selectedImageData.src}
              alt={selectedImageData.title}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedImageData.title}</h3>
              <p className="text-text-secondary mb-4">{selectedImageData.description}</p>
              <div className="flex gap-4 text-sm text-text-secondary">
                <span><Calendar size={14} /> {formatDate(selectedImageData.date)}</span>
                <span><MapPin size={14} /> {selectedImageData.location}</span>
                <span><Users size={14} /> {selectedImageData.participants} participants</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Glimpses;
