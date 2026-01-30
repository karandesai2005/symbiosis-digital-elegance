import { Calendar, CheckCircle, Image } from "lucide-react";
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
            A look back at the workshops, bootcamps, and tech sessions conducted by
            SIT ACM Student Chapter.
          </p>
        </div>
      </section>

      {/* Past Event Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card grid md:grid-cols-2 gap-12 p-10 md:p-14 items-center">
              
              {/* Event Poster */}
              <div className="flex justify-center">
                <img
                  src="/jan2026/img1.png"
                  alt="Data to Dashboards - Tableau Bootcamp"
                  className="rounded-2xl shadow-2xl max-h-[520px] w-auto"
                />
              </div>

              {/* Event Content */}
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
                  <strong>Data to Dashboards</strong> was a hands-on Tableau bootcamp
                  focused on transforming raw data into meaningful, interactive
                  dashboards. Participants explored real-world datasets and learned
                  how data visualization plays a critical role in data science and
                  business decision-making.
                </p>

                <ul className="list-disc pl-5 text-text-secondary space-y-2 mb-8">
                  <li>Introduction to data visualization principles</li>
                  <li>Hands-on dashboard creation using Tableau</li>
                  <li>Working with real datasets and KPIs</li>
                  <li>Portfolio-ready dashboard project</li>
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

      {/* CTA Section */}
      <section className="py-20 bg-surface">
        <div className="container-custom text-center">
          <div className="glass-card max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">
              More Events Coming Soon
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Stay connected with SIT ACM Student Chapter for upcoming workshops,
              hackathons, and technical sessions.
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
