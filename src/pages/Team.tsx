import { Facebook, Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import { useState } from 'react';
import Dropdown from '../components/ui/dropdown';

type SocialLinks = {
  linkedin?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
  facebook?: string;
  email?: string;
};

type TeamMember = {
  name: string;
  position: string;
  year: string;
  image: string;
  bio: string;
  social: SocialLinks;
};

const Team = () => {
  const [selectedYear, setSelectedYear] = useState('2025');

  const yearOptions = [
    { value: '2025', label: 'Team 2025' },
    { value: '2024', label: 'Team 2024' },
    { value: 'all', label: 'All Teams' },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Deepak Dhaarao',
      position: 'Faculty Mentor',
      year: '2025',
      image: '/deepak_Sir.jpeg',
      bio: 'Professor of Computer Science with expertise in AI and Machine Learning',
      social: { linkedin: '#' }
    },
    {
      name: 'Ranjeet Bhidwe',
      position: 'Faculty Mentor',
      year: '2025',
      image: '/ranjeet_sir.jpeg',
      bio: 'Faculty mentor guiding students in systems and applied computing',
      social: { linkedin: '#' }
    },
    {
      name: 'Devashree Kale',
      position: 'Chapter Chairperson',
      year: '2025',
      image: '/devashree_kale.jpeg',
      bio: 'Final year CS student passionate about leadership and development',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Kushbu Agrawal',
      position: 'Vice Chairperson',
      year: '2025',
      image: '/kushbu_agarawal.jpeg',
      bio: 'AI/ML enthusiast and competitive programmer',
      social: { linkedin: '#', instagram: '#' }
    },
    {
      name: 'Karan Desai',
      position: 'Web Master',
      year: '2025',
      image: '/karan.jpeg',
      bio: 'Cybersecurity-focused developer and open-source contributor',
      social: { linkedin: '#', github: '#', twitter: '#' }
    },
    {
      name: 'Devaki Joshi',
      position: 'Treasurer',
      year: '2025',
      image: '/devaki_joshi.jpeg',
      bio: 'Finance & operations lead with a passion for design',
      social: { linkedin: '#', instagram: '#' }
    },
    {
      name: 'Siddhant',
      position: 'Secretary',
      year: '2025',
      image: '/siddhant.jpeg',
      bio: 'Content and outreach coordinator',
      social: { linkedin: '#', instagram: '#' }
    },
    {
      name: 'Swayam Patel',
      position: 'Technical Team',
      year: '2025',
      image: '/swayam_patel.jpeg',
      bio: 'Backend and systems enthusiast',
      social: { linkedin: '#', github: '#' }
    }
  ];

  const filteredMembers =
    selectedYear === 'all'
      ? teamMembers
      : teamMembers.filter(m => m.year === selectedYear);

  const getSocialIcon = (platform: keyof SocialLinks) => {
    const icons = {
      linkedin: Linkedin,
      twitter: Twitter,
      github: Github,
      instagram: Instagram,
      facebook: Facebook,
    };
    return icons[platform];
  };

  return (
    <div className="fade-in">
      {/* Header */}
      <section className="hero-gradient py-20 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary-foreground mb-6">
            Our Team {selectedYear !== 'all' && selectedYear}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Meet the people driving Symbiosis ACM Student Chapter forward.
          </p>

          <div className="max-w-xs mx-auto">
            <Dropdown
              options={yearOptions}
              value={selectedYear}
              onChange={setSelectedYear}
            />
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <div key={index} className="team-card text-center group">
              {/* Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-secondary p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-poppins font-bold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-semibold mb-3">
                {member.position}
              </p>
              <p className="text-text-secondary text-sm mb-4">
                {member.bio}
              </p>

              {/* Socials */}
              <div className="flex justify-center gap-3">
                {Object.entries(member.social).map(([platform, url]) => {
                  const Icon = getSocialIcon(platform as keyof SocialLinks);
                  if (!Icon) return null;

                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border hover:text-accent transition"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
