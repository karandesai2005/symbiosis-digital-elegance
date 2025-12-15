import { Calendar, Sparkles, Bell } from 'lucide-react';

const Events = () => {
  return (
    <div className="fade-in">
      {/* Header Section */}
      <section className="hero-gradient py-20 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary-foreground mb-6">
            Our <span className="text-secondary">Events</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Workshops, hackathons, tech talks, and competitions — crafted to elevate
            your learning and community experience.
          </p>
          <div className="glass inline-flex items-center gap-2 px-6 py-3 rounded-lg text-primary-foreground">
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">New events launching soon</span>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card relative overflow-hidden p-12 md:p-16 text-center">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/20 to-transparent blur-3xl" />

              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-accent/20 text-accent">
                    <Sparkles className="h-10 w-10" />
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-6">
                  Events <span className="text-gradient">Coming Soon</span>
                </h2>

                <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                  We’re working behind the scenes to bring you impactful workshops,
                  exciting hackathons, insightful tech talks, and competitive events.
                  Stay tuned — announcements are right around the corner 🚀
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="btn-hero flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    Get Notified
                  </button>
                  <button className="btn-secondary">
                    Propose an Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface">
        <div className="container-custom text-center">
          <div className="glass-card max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">
              Want to Collaborate with <span className="text-gradient">Us</span>?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              If you have an idea for a workshop, speaker session, or community-driven
              event, we’d love to hear from you. Let’s build something meaningful
              together.
            </p>
            <button className="btn-secondary">
              Contact the Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
