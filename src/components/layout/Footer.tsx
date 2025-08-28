import { Heart, Mail, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-primary"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-primary"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-primary"
          ></path>
        </svg>
      </div>

      <div className="bg-primary pt-16 pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-poppins font-bold text-primary-foreground mb-4">
                Symbiosis ACM Student Chapter
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Empowering the next generation of tech innovators through community,
                learning, and hands-on experience in computer science and technology.
              </p>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h3 className="text-xl font-poppins font-bold text-primary-foreground mb-4">
                Get In Touch
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                We would love to hear from you
              </p>
              <a
                href="mailto:acm@symbiosis.edu"
                className="inline-flex items-center gap-2 btn-secondary text-sm"
              >
                <Mail size={16} />
                Contact Us
              </a>
            </div>

            {/* Social Media */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-poppins font-bold text-primary-foreground mb-4">
                Follow Us
              </h3>
              <div className="flex justify-center md:justify-end gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-3 rounded-full bg-primary-foreground/10 text-primary-foreground transition-all duration-300 hover:scale-110 hover:bg-primary-foreground/20 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-primary-foreground/20 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
                Designed and Developed with <Heart size={16} className="text-red-500" />
              </p>
              <p className="text-primary-foreground/60 text-sm">
                Ⓒ Symbiosis ACM Student Chapter, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;