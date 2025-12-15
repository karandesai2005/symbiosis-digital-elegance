import { Linkedin } from 'lucide-react';
import { useState } from 'react';
import Dropdown from '../components/ui/dropdown';

type TeamMember = {
  name: string;
  position: string;
  year: '2024' | '2025';
  image: string;
  bio: string;
  linkedin: string;
};

const Team = () => {
  const [selectedYear, setSelectedYear] = useState<'2024' | '2025' | 'all'>('2025');

  const yearOptions = [
    { value: '2025', label: 'Team 2025' },
    { value: '2024', label: 'Team 2024' },
    { value: 'all', label: 'All Teams' },
  ];

  const teamMembers: TeamMember[] = [
    /* ===================== 2025 ===================== */
    {
      name: 'Dr. Deepak Dhaarao',
      position: 'Faculty Mentor',
      year: '2025',
      image: '/deepak_Sir.jpeg',
      bio: 'Professor of Computer Science with expertise in AI and Machine Learning',
      linkedin: 'https://www.linkedin.com/in/dr-deepak-dharrao-8b1aa364/'
    },
    {
      name: 'Ranjeet Bhidwe',
      position: 'Faculty Mentor',
      year: '2025',
      image: '/ranjeet_sir.jpeg',
      bio: 'Faculty mentor guiding students in systems and applied computing',
      linkedin: 'https://www.linkedin.com/in/ranjeet-bidwe-ph-d-6ab67419/'
    },
    {
      name: 'Devashree Kale',
      position: 'Chapter Chairperson',
      year: '2025',
      image: '/devashree_kale.jpeg',
      bio: 'Pre-Final year CS student passionate about leadership and development',
      linkedin: 'https://www.linkedin.com/in/devashreekale/'
    },
    {
      name: 'Kushbu Agrawal',
      position: 'Vice Chairperson',
      year: '2025',
      image: '/kushbu_agarawal.jpeg',
      bio: 'AI/ML enthusiast and competitive programmer',
      linkedin: 'https://www.linkedin.com/in/kushbu-agrawal-04146b2a6/'
    },
    {
      name: 'Karan Desai',
      position: 'Web Master',
      year: '2025',
      image: '/karan.jpeg',
      bio: 'Cybersecurity-focused developer and open-source contributor',
      linkedin: 'https://www.linkedin.com/in/karandesai2005/'
    },
    {
      name: 'Devaki Joshi',
      position: 'Treasurer',
      year: '2025',
      image: '/devaki_joshi.jpeg',
      bio: 'Finance & operations lead with a passion for design',
      linkedin: 'https://www.linkedin.com/in/devaki-joshi-033b6a307/'
    },
    {
      name: 'Siddhant',
      position: 'Secretary',
      year: '2025',
      image: '/siddhant.jpeg',
      bio: 'Content and outreach coordinator',
      linkedin: 'https://www.linkedin.com/in/siddhantbedre/'
    },
    {
      name: 'Swayam Patel',
      position: 'Membership Chair',
      year: '2025',
      image: '/swayam_patel.jpeg',
      bio: 'Backend and systems enthusiast',
      linkedin: 'https://www.linkedin.com/in/swayam19/'
    },

    /* ===================== 2024 ===================== */
    {
      name: 'Priyanka Gupta',
      position: 'President',
      year: '2024',
      image: '/priyanka-2024.jpeg',
      bio: 'Led the chapter with focus on growth, outreach, and community building',
      linkedin: 'https://www.linkedin.com/in/priyankag1/'
    },
    {
      name: 'Trisha Boda',
      position: 'Vice President',
      year: '2024',
      image: '/trisha-2024.jpeg',
      bio: 'Oversaw operations and coordinated major technical events',
      linkedin: 'https://www.linkedin.com/in/trishaboda8905/'
    },
    {
      name: 'Samruddhi Borhade',
      position: 'Membership Chair',
      year: '2024',
      image: '/samruddhi.jpeg',
      bio: 'Managed member onboarding and engagement initiatives',
      linkedin: 'https://www.linkedin.com/in/samruddhi-borhade-4191a0283/'
    },
    {
      name: 'Kewal Nanavati',
      position: 'Treasurer',
      year: '2024',
      image: '/kewal-2024.jpeg',
      bio: 'Handled budgeting, sponsorships, and financial planning',
      linkedin: 'https://www.linkedin.com/in/kewal-nanavati-aaa22b24a/'
    },
    {
      name: 'Malvika Bhadoriya',
      position: 'Secretary',
      year: '2024',
      image: '/malvika-2024.jpeg',
      bio: 'Managed documentation and official communications',
      linkedin: 'https://www.linkedin.com/in/malvika-bhadoriya/'
    },
    {
      name: 'Manan Bhimjiyani',
      position: 'Web Master',
      year: '2024',
      image: '/manan-2024.jpeg',
      bio: 'Maintained chapter web presence and digital assets',
      linkedin: 'https://www.linkedin.com/in/mananbhimjiyani/'
    }
  ];

  const filteredMembers =
    selectedYear === 'all'
      ? teamMembers
      : teamMembers.filter(m => m.year === selectedYear);

  return (
    <div className="fade-in">
      {/* HEADER */}
      <section className="hero-gradient py-20 text-center relative overflow-visible">
        <div className="container-custom overflow-visible">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary-foreground mb-6">
            Our Team {selectedYear !== 'all' && selectedYear}
          </h1>

          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Meet the people driving the Symbiosis ACM Student Chapter forward.
          </p>

          {/* 🔥 FIXED DROPDOWN */}
          <div className="max-w-xs mx-auto relative z-[100]">
            <Dropdown
              options={yearOptions}
              value={selectedYear}
              onChange={setSelectedYear}
            />
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-20">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <div key={index} className="team-card text-center group">
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-secondary p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
              </div>

              <h3 className="text-xl font-poppins font-bold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-semibold mb-3">
                {member.position}
              </p>
              <p className="text-text-secondary text-sm mb-4">
                {member.bio}
              </p>

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border hover:text-accent transition"
              >
                <Linkedin size={16} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
