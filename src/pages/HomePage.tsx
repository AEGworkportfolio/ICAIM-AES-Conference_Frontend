import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, FileText, ArrowRight, Clock, Lightbulb, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/sections/SectionHeader';
import heroImage from '@/assets/hero-conference.jpg';

const tracks = [
  {
    icon: Lightbulb,
    title: 'Data-Driven Modeling of Advanced Energy Systems',
    // desc: 'AI/ML-based modeling,and intelligent analysis of complex energy systems',
  },
  {
    icon: Award,
    title: 'Modeling of Mechanical and Thermal Energy Optimisation',
    // desc: 'Thermal system modeling, mechanical energy optimization',
  },
  {
    icon: Globe,
    title: 'Renewable and Sustainable Energy Systems',
    // desc: 'Solar, wind, and sustainable energy technologies',
  },
  {
    icon: Users,
    title: 'Energy Storage and Energy Conversion Systems',
    // desc: 'Batteries, supercapacitors, hydrogen energy',
  },
  {
    icon: Lightbulb,
    title: 'Smart Distributed Energy Systems',
    // desc: 'Smart grids, and intelligent energy management',
  },
  {
    icon: Award,
    title: 'Emerging Trends in Process Optimization',
    // desc: 'Optimization algorithms, hybrid models, and AI-driven industrial process optimization',
  },
  {
    icon: Globe,
    title: 'Predictive Maintenance and Fault Diagnosis',
    // desc: 'Condition monitoring, fault detection, prognostics, and reliability analysis',
  },
  {
    icon: Users,
    title: 'Energy Efficiency and Emission Reduction',
    desc: '',
  },
];

const importantDates = [
  { date: '20th February 2026', event: 'Call for Papers Opens' },
  { date: '10th May 2026', event: 'Full-Length Paper Submission Deadline' },
  { date: '20th May 2026', event: 'Acceptance Notification' },
  { date: '01st June 2026', event: 'Last Date for Paper Registration' },
  { date: '22–26th July 2026', event: 'Conference Dates' },
];
const highlights = [
  { icon: Users, number: '500+', label: 'Expected Attendees' },
  { icon: FileText, number: '200+', label: 'Paper Submissions' },
  { icon: Globe, number: '30+', label: 'Countries' },
  { icon: Award, number: '50+', label: 'Expert Speakers' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[78vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/40" />
        </div>


        <div className="relative section-container py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-primary-foreground/90 text-sm font-medium">22-26th July, 2026</span>
            </div>

            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 animate-fade-up stagger-1">
              ICAIM-AES<span className="text-accent">-2026</span>
            </h1>

            <p className="text-xl md:text-2xl  text-primary-foreground/90 font-serif mb-4 animate-fade-up stagger-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-yellow leading-tight">
                International Conference on AI/ML Applications in
                <span className="block mt-1 bg-gradient-to-r from-yellow-400 font-serif to-orange-400 bg-clip-text text-transparent">
                  Advanced Energy Systems
                </span>
              </h1>
            </p>

            <div className="flex items-center gap-2 font-serif text-primary-foreground/70 mb-8 animate-fade-up stagger-3">
              <MapPin className="w-5 h-5" />
              <span>VIDYAPEETH INSTITUTE OF SCIENCE AND TECHNOLOGY BHOPAL, 462022, INDIA</span>
            </div>

            <div className="flex flex-col font-serif sm:flex-row gap-4 animate-fade-up stagger-4">
              <Link to="/registration">
                <Button variant="hero" size="xl">
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              {/* <Link to="/call-for-papers">
                <Button variant="heroOutline" size="xl">
                  Submit Your Paper
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      {/* <section className="bg-primary py-8 -mt-1">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/10 mb-3">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-bold text-primary-foreground">{item.number}</div>
                <div className="text-primary-foreground/70 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="About the Conference"
                subtitle="Join leading researchers and industry experts"
                centered={false}
              />
              <p className="text-muted-foreground text-justify justify-center text-blue-900 leading-relaxed mb-6">
                The International Conference on AI/ML Applications in Advanced Energy Systems (ICAIM-AES 2026) is an international platform that brings together researchers, academicians, and industry professionals to present and discuss recent advancements in Artificial Intelligence and Machine Learning applied to advanced energy systems. The conference is organized by the Department of Computer Science and Engineering, Vidhyapeeth Institute of Science and Technology, Bhopal, in association with
                <a
                  href="https://ritchennai.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 hover:underline mx-1"
                >
                  Rajalakshmi Institute of Technology (RIT), Chennai, India
                </a>
                and
                <a
                  href="https://www.emu.edu.tr/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-700 hover:underline mx-1"
                >
                  Eastern Mediterranean University (EMU), North Cyprus, Türkiye
                </a>, with a focus on fostering interdisciplinary research and innovation.
              </p>

              <p className="text-muted-foreground text-justify leading-relaxed text-blue-900 mb-8">
                The conference emphasizes key areas such as data-driven modeling, intelligent control, energy optimization, renewable and sustainable energy systems, energy storage, and predictive maintenance. ICAIM-AES 2026 aims to promote knowledge exchange, academic–industry collaboration, and the development of intelligent and sustainable solutions to address global energy challenges.
              </p>
              <div className="mb-4 flex flex-col gap-2">
  <span className="inline-flex items-center rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-800 shadow-sm">
    📚 Publication Details
  </span>

  <span className="inline-flex w-fit items-center rounded-md bg-red-600 px-3 py-1 text-xs font-extrabold text-white shadow-md animate-pulse">
    🚀 COMING SOON
  </span>
</div>

              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More About ICAIM-AES
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {tracks.map((track, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl card-elevated"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <track.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-blue-980 text-foreground mb-2">{track.title}</h3>
                  <p className="text-sm text-blue-900 text-muted-foreground">{track.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <SectionHeader
            title="Important Dates"
            subtitle="Mark your calendar for these key deadlines"
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {importantDates.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="relative">
                    <div className="timeline-dot" />
                    {index < importantDates.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="flex-1 bg-card rounded-xl p-6 card-elevated -mt-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        <Clock className="w-4 h-4" />
                        {item.date}
                      </div>
                      <span className="text-foreground font-medium">{item.event}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/important-dates">
              <Button variant="default" size="lg">
                View All Dates
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="section-padding bg-primary">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Present Your Research?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Submit your abstract today and join the global community of materials and manufacturing experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/call-for-papers">
              <Button variant="hero" size="xl">
                Submit Abstract
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/registration">
              <Button variant="heroOutline" size="xl">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </>
  );
}
