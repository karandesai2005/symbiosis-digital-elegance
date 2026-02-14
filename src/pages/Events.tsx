import { Calendar, CheckCircle, Image, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="fade-in">
      {/* Header Section */}
      <section className="hero-gradient py-20 text-center">
        <div className="container-custom">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary-foreground mb-6">
            Our <span className="text-secondary">Events</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Discover upcoming events and revisit the highlights of our past sessions
            at SIT ACM Student Chapter.
          </p>
        </div>
      </section>

      {/* ================= LATEST EVENT ================= */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card grid md:grid-cols-2 gap-12 p-10 md:p-14 items-center border border-accent/30">

              {/* Poster */}
              <div className="flex justify-center">
                <img
                  src="/feb2026/techpecharcha.jpeg"
                  alt="TechPeCharcha Event"
                  className="rounded-2xl shadow-2xl max-h-[520px] w-auto"
                />
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/15 text-yellow-500 mb-4">
                  <Clock className="h-4 w-4" />
                  <span className="font-semibold text-sm">Upcoming Event</span>
                </div>

                <h2 className="text-4xl font-poppins font-bold text-primary mb-4">
                  TechPeCharcha
                </h2>

                <p className="text-secondary font-semibold mb-4">
                  Advances in AI in Software Development
                </p>

                <div className="flex items-center gap-2 text-text-secondary mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>20 February 2026 · 11:00 AM – 12:00 PM</span>
                </div>

                <p className="text-text-secondary mb-2">
                  <strong>Speaker:</strong> Mr. Ajay Deshpande
                </p>

                <p className="text-text-secondary mb-4">
                  <strong>Venue:</strong> 4th Floor, Seminar Hall, SIT
                </p>

                <p className="text-text-secondary leading-relaxed mb-6">
                  An academic–industry interaction session focusing on real-world applications,
                  global practices, and project mentorship in AI-driven software development.
                </p>

                <ul className="list-disc pl-5 text-text-secondary space-y-2">
                  <li>AI in Software Development</li>
                  <li>Industry Trends</li>
                  <li>Real-world Applications</li>
                  <li>Mentorship Insights</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SECOND UPCOMING EVENT ================= */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card grid md:grid-cols-2 gap-12 p-10 md:p-14 items-center border border-accent/30">

              {/* Poster */}
              <div className="flex justify-center">
                <img
                  src="/feb2026/reg.png"
                  alt="TechVortex 3.0 Poster"
                  className="rounded-2xl shadow-2xl max-h-[520px] w-auto"
                />
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 text-blue-500 mb-4">
                  <Clock className="h-4 w-4" />
                  <span className="font-semibold text-sm">Next Major Event</span>
                </div>

                <h2 className="text-4xl font-poppins font-bold text-primary mb-4">
                  TechVortex 3.0
                </h2>

                <p className="text-secondary font-semibold mb-4">
                  International Project Competition
                </p>

                <div className="flex items-center gap-2 text-text-secondary mb-6">
                  <Calendar className="h-4 w-4" />
                  <span>27–28 March 2026 · 9:00 AM onwards</span>
                </div>

                <p className="text-text-secondary leading-relaxed mb-6">
                  An international-level competition where students showcase innovative
                  projects across domains like AI, Cloud, Web, and Cybersecurity.
                </p>

                <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-8">
                  <li>AI & Data Science</li>
                  <li>Cloud Computing</li>
                  <li>Web Development</li>
                  <li>Cybersecurity</li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <button
                    disabled
                    className="btn-hero opacity-60 cursor-not-allowed"
                  >
                    Registration Starting Soon
                  </button>

                  <button
                    disabled
                    className="btn-secondary opacity-60 cursor-not-allowed"
                  >
                    Glimpses Available After Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PAST EVENT ================= */}
      <section className="py-24 bg-surface">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card grid md:grid-cols-2 gap-12 p-10 md:p-14 items-center">

              {/* Poster */}
              <div className="flex justify-center">
                <img
                  src="/jan2026/img1.png"
                  alt="Data to Dashboards"
                  className="rounded-2xl shadow-2xl max-h-[520px] w-auto"
                />
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 text-green-500 mb-4">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-semibold text-sm">Event Completed</span>
                </div>

                <h2 className="text-4xl font-poppins font-bold text-primary mb-4">
                  Data to Dashboards
                </h2>

                <p className="text-secondary font-semibold mb-4">
                  Tableau Bootcamp
                </p>

                <div className="flex items-center gap-2 text-text-secondary mb-6">
                  <Calendar className="h-4 w-4" />
                  <span>10th January 2026</span>
                </div>

                <p className="text-text-secondary leading-relaxed mb-6">
                  Hands-on bootcamp focused on data visualization and building
                  interactive dashboards using Tableau.
                </p>

                <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-8">
                  <li>Visualization fundamentals</li>
                  <li>Interactive dashboards</li>
                  <li>Real-world datasets</li>
                  <li>Portfolio projects</li>
                </ul>

                <div className="flex flex-wrap gap-4">
                  <Link to="/glimpses" className="btn-hero flex items-center gap-2">
                    <Image className="h-4 w-4" />
                    See Glimpses
                  </Link>

                  <span className="btn-secondary cursor-default opacity-70">
                    Registrations Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <div className="glass-card max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">
              Stay Tuned for More Events
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Follow SIT ACM Student Chapter for updates on workshops and competitions.
            </p>
            <Link to="/glimpses" className="btn-secondary">
              Explore Past Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;