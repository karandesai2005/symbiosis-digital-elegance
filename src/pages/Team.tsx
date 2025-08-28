import { Facebook, Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import { useState } from 'react';
import Dropdown from '../components/ui/dropdown';

const Team = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  const yearOptions = [
    { value: '2025', label: 'Team 2025' },
    { value: '2024', label: 'Team 2024' },
    { value: 'all', label: 'All Teams' },
  ];
  const teamMembers = [
    // 2025 Team
    {
      name: 'Dr. Deepak Dhaarao',
      position: 'Faculty Mentor',
      year: '2025',
      image: '/api/placeholder/200/200',
      bio: 'Professor of Computer Science with expertise in AI and Machine Learning',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'priya.sharma@symbiosis.edu'
      }
    },
    {
      name: 'Ranjeet Bhidwe',
      position: 'Faculty Mentor',
      year: '2025',
      image: '/api/placeholder/200/200',
      bio: 'Professor of Computer Science with expertise in AI and Machine Learning',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'priya.sharma@symbiosis.edu'
      }
    },
    {
      name: 'Devashree Kale',
      position: 'Chapter Chairperson',
      year: '2025',
      image: '/api/placeholder/200/200',
      bio: 'Final year CS student passionate about full-stack development',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Kushbu Agrawal',
      position: 'Vice Chairperson',
      year: '2025',
      image: '/api/placeholder/200/200',
      bio: 'AI/ML enthusiast and competitive programming champion',
      social: {
        linkedin: '#',
        github: '#',
        instagram: '#'
      }
    },
    {
      name: 'Karan Desai',
      position: 'Web Master',
      year: '2025',
      image: '/api/placeholder/200/200',
      bio: 'Open source contributor and cybersecurity specialist',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Devaki Joshi',
      position: 'Treasurer',
      year: '2025',
      image: '/api/placeholder/200/200',
      bio: 'Event management expert and UI/UX design enthusiast',
      social: {
        linkedin: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      name: 'Siddhant',
      position: 'Secretary',
      year: '2025',
      image: '/api/placeholder/200/200',
      bio: 'Digital marketing strategist and content creator',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      name: 'Ananya Kumar',
      position: 'Research Coordinator',
      year: '2025',
      image: '/api/placeholder/200/200',
      bio: 'Research enthusiast specializing in data science and analytics',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Harsh Gupta',
      position: 'Web Development Lead',
      year: '2025',
      image: '/api/placeholder/200/200',
      bio: 'Full-stack developer and tech blog writer',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    // 2024 Team
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Faculty Advisor',
      year: '2024',
      image: '/api/placeholder/200/200',
      bio: 'Associate Professor specializing in Software Engineering and Database Systems',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'rajesh.kumar@symbiosis.edu'
      }
    },
    {
      name: 'Priya Nair',
      position: 'Chapter Chairperson',
      year: '2024',
      image: '/api/placeholder/200/200',
      bio: 'Former CS student with expertise in mobile app development',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Karan Mehta',
      position: 'Vice Chairperson',
      year: '2024',
      image: '/api/placeholder/200/200',
      bio: 'Cloud computing specialist and DevOps enthusiast',
      social: {
        linkedin: '#',
        github: '#',
        instagram: '#'
      }
    },
    {
      name: 'Ritika Shah',
      position: 'Technical Lead',
      year: '2024',
      image: '/api/placeholder/200/200',
      bio: 'Data science expert and machine learning researcher',
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Aditya Sharma',
      position: 'Events Coordinator',
      year: '2024',
      image: '/api/placeholder/200/200',
      bio: 'Event planning specialist with focus on tech conferences',
      social: {
        linkedin: '#',
        instagram: '#',
        twitter: '#'
      }
    },
    {
      name: 'Meera Agarwal',
      position: 'Marketing Head',
      year: '2024',
      image: '/api/placeholder/200/200',
      bio: 'Social media strategist and brand management expert',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    }
  ];

  const filteredMembers = selectedYear === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.year === selectedYear);

  const getSocialIcon = (platform: string) => {
    const icons = {
      linkedin: Linkedin,
      twitter: Twitter,
      github: Github,
      instagram: Instagram,
      facebook: Facebook
    };
    return icons[platform as keyof typeof icons];
  };

  return (
    <div className="fade-in">
      {/* Header Section */}
      <section className="hero-gradient py-20 text-center relative" style={{ overflow: 'visible' }}>
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary-foreground mb-6">
            Our Team <span className="text-accent-light">{selectedYear === 'all' ? '' : selectedYear}</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Meet the passionate individuals who make Symbiosis ACM Student Chapter a thriving community of tech innovators.
          </p>
          
          {/* Year Dropdown */}
          <div className="max-w-xs mx-auto relative z-50">
            <Dropdown
              options={yearOptions}
              value={selectedYear}
              onChange={setSelectedYear}
              placeholder="Select Team Year"
              className="text-left w-full"
            />
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <div key={index} className="team-card group">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-accent to-secondary p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-poppins font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold mb-3">{member.position}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const IconComponent = getSocialIcon(platform);
                      if (!IconComponent) return null;
                      
                      return (
                        <a
                          key={platform}
                          href={url}
                          className="p-2 rounded-full bg-glass-bg border border-glass-border text-text-secondary hover:text-accent hover:scale-110 transition-all duration-300"
                          aria-label={`${member.name}'s ${platform}`}
                        >
                          <IconComponent size={16} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-poppins font-bold text-text-secondary mb-2">
                No team members found
              </h3>
              <p className="text-text-muted">
                No team members match the selected year.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card text-center">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-8">
                Leadership & <span className="text-gradient">Excellence</span>
              </h2>
              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p className="text-lg">
                  Our diverse team brings together students from various backgrounds, united by a common passion for 
                  technology and innovation. Each member contributes unique skills and perspectives that strengthen 
                  our community and drive our mission forward.
                </p>
                <p>
                  From seasoned developers to creative designers, from research enthusiasts to community builders, 
                  our team represents the best of what Symbiosis has to offer. Together, we organize impactful events, 
                  foster learning opportunities, and create an inclusive environment where every member can thrive.
                </p>
                <p>
                  Under the guidance of our experienced faculty advisor and the leadership of our dedicated student 
                  officers, we continue to push boundaries and set new standards for excellence in student-led 
                  technology organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;