import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Users, MapPin } from 'lucide-react';

const Glimpses = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState('All');

  const categories = ['All', 'Hackathons', 'Workshops', 'Tech Talks', 'Community', 'Awards'];

  const images = [
    {
      id: 1,
      title: 'HackSymbiosis 2024 Grand Finale',
      description: 'Teams presenting their innovative solutions at our flagship hackathon event with over 200 participants.',
      category: 'Hackathons',
      date: '2024-03-15',
      location: 'SIT Main Auditorium',
      participants: 200,
      placeholder: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'AI/ML Workshop with Industry Experts',
      description: 'Hands-on machine learning workshop conducted by industry professionals from leading tech companies.',
      category: 'Workshops',
      date: '2024-02-20',
      location: 'Computer Lab A',
      participants: 120,
      placeholder: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Tech Talk: Future of Cloud Computing',
      description: 'Engaging discussion on cloud technologies and their impact on modern software development.',
      category: 'Tech Talks',
      date: '2024-01-18',
      location: 'Virtual Event',
      participants: 150,
      placeholder: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'ACM Chapter Community Meetup',
      description: 'Monthly community gathering for networking, knowledge sharing, and collaborative project discussions.',
      category: 'Community',
      date: '2024-04-10',
      location: 'SIT Campus Lawn',
      participants: 80,
      placeholder: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Competitive Programming Contest',
      description: 'Intense coding competition showcasing algorithmic problem-solving skills of our talented members.',
      category: 'Hackathons',
      date: '2024-02-28',
      location: 'Programming Lab',
      participants: 60,
      placeholder: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'Excellence Award Ceremony',
      description: 'Recognizing outstanding contributions and achievements of our chapter members throughout the year.',
      category: 'Awards',
      date: '2024-05-15',
      location: 'SIT Auditorium',
      participants: 250,
      placeholder: '/api/placeholder/600/400'
    },
    {
      id: 7,
      title: 'Web Development Bootcamp',
      description: 'Comprehensive training program covering modern web technologies and best development practices.',
      category: 'Workshops',
      date: '2024-03-05',
      location: 'Tech Lab B',
      participants: 90,
      placeholder: '/api/placeholder/600/400'
    },
    {
      id: 8,
      title: 'Open Source Contribution Drive',
      description: 'Community initiative encouraging members to contribute to open source projects and build their portfolios.',
      category: 'Community',
      date: '2024-04-22',
      location: 'Collaboration Space',
      participants: 45,
      placeholder: '/api/placeholder/600/400'
    },
    {
      id: 9,
      title: 'Cybersecurity Awareness Session',
      description: 'Educational workshop on digital security, ethical hacking, and protecting personal data online.',
      category: 'Tech Talks',
      date: '2024-01-30',
      location: 'Conference Room',
      participants: 110,
      placeholder: '/api/placeholder/600/400'
    },
    {
      id: 10,
      title: 'Innovation Showcase 2024',
      description: 'Annual exhibition displaying creative projects and innovative solutions developed by our members.',
      category: 'Community',
      date: '2024-05-20',
      location: 'Exhibition Hall',
      participants: 300,
      placeholder: '/api/placeholder/600/400'
    },
    {
      id: 11,
      title: 'Mobile App Development Workshop',
      description: 'Practical session on building cross-platform mobile applications using modern frameworks.',
      category: 'Workshops',
      date: '2024-03-12',
      location: 'Mobile Dev Lab',
      participants: 75,
      placeholder: '/api/placeholder/600/400'
    },
    {
      id: 12,
      title: 'Best Chapter Award 2024',
      description: 'Proud moment as Symbiosis ACM receives recognition as the best student chapter in the region.',
      category: 'Awards',
      date: '2024-06-01',
      location: 'Regional Conference',
      participants: 500,
      placeholder: '/api/placeholder/600/400'
    }
  ];

  const filteredImages = currentCategory === 'All' 
    ? images 
    : images.filter(img => img.category === currentCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const selectedImageData = images.find(img => img.id === selectedImage);

  return (
    <div className="fade-in">
      {/* Header Section */}
      <section className="hero-gradient py-20 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary-foreground mb-6">
            Glimpses of Our <span className="text-secondary">Journey</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Explore memorable moments, achievements, and community experiences that define the spirit of Symbiosis ACM Student Chapter.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-surface border-b border-card-border">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentCategory === category
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

      {/* Masonry Gallery */}
      <section className="py-20">
        <div className="container-custom">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid mb-6 cursor-pointer group"
                onClick={() => openLightbox(image.id)}
              >
                <div className="card-elegant overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
                        <p className="text-sm font-medium text-text-primary">{image.title}</p>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-primary-foreground p-4">
                        <h3 className="font-bold mb-2">{image.title}</h3>
                        <p className="text-sm opacity-90">Click to view details</p>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-bold">
                      {image.category}
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="p-4">
                    <h3 className="font-poppins font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-3">
                      {image.description}
                    </p>
                    
                    <div className="space-y-1 text-xs text-text-muted">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(image.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{image.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{image.participants} participants</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-text-muted mx-auto mb-4" />
              <h3 className="text-xl font-poppins font-bold text-text-secondary mb-2">
                No images found
              </h3>
              <p className="text-text-muted">
                No images match the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors z-10"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors z-10"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors z-10"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            {/* Image and Details */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-poppins font-bold text-primary">{selectedImageData.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {selectedImageData.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(selectedImageData.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedImageData.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{selectedImageData.participants} participants</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-text-secondary leading-relaxed">
                  {selectedImageData.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-surface">
        <div className="container-custom text-center">
          <div className="glass-card max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">
              Be Part of Our <span className="text-gradient">Next Chapter</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Join the Symbiosis ACM Student Chapter and create your own memorable moments while building skills, 
              making connections, and contributing to the tech community.
            </p>
            <button className="btn-secondary">
              Join Our Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Glimpses;