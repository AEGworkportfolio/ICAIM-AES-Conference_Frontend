import { PageHeader } from '@/components/sections/PageHeader';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { Linkedin, Globe } from 'lucide-react';
import robertCepImg from '@/assets/speakers/Robert-CEP.jpg';
import kanakKalitaImg from '@/assets/speakers/Kanak-Kalita.jpg';
import relianceJainImg from '@/assets/speakers/Reliance-Jain.jpg';


 const speakers = [
 {
  name: 'Dr. Robert Cep',
  affiliation:
    'Professor, VSB – Technical University of Ostrava, Czech Republic',
  title:
    'Professor of Mechanical Engineering | Advanced Manufacturing & Machining',
  bio: 'Dr. Robert Cep is a Professor at VSB – Technical University of Ostrava, Czech Republic, with extensive expertise in advanced manufacturing technologies, machining processes, and material characterization. He has made significant research contributions through high-quality scholarly publications and active participation in international research collaborations. Dr. Cep is widely recognized for his academic leadership and commitment to advancing engineering education and research through interdisciplinary and global partnerships.',
  image: robertCepImg,
  linkedin: 'https://www.linkedin.com/in/robert-cep-47351819/?originalSubdomain=cz',
  website: null,
 },

 {
  name: 'Dr. Kanak Kalita',
  affiliation:
    'Associate Dean – Research & Development & Head – International Relations, Rajalakshmi Institute of Technology, Chennai, India',
  title:
    'Research & Innovation Leader | Applied AI, Advanced Manufacturing & Global Academic Collaborations',
  bio: 'Dr. Kanak Kalita is an accomplished research and innovation leader with over 12 years of experience spanning academia, applied research, and industry-driven projects. He currently serves as Associate Dean – Research & Development and Head – International Relations at Rajalakshmi Institute of Technology.',
  image: kanakKalitaImg,
  linkedin: 'https://www.linkedin.com/in/dr-kanak-kalita-00276627/?originalSubdomain=in',
  website: null,
 },

 {
  name: 'Dr. Reliance Jain',
  affiliation:
    'Postdoctoral Fellow, Ajou University, South Korea',
  title: 'Postdoctoral Researcher | Materials Science & Mechanical Engineering',
  bio: 'Dr. Reliance Jain is a Postdoctoral Fellow at Ajou University, South Korea, with a PhD in Mechanical Engineering. Her research focuses on eutectic high-entropy alloys (EHEAs), additive manufacturing, hot deformation, and machine learning–assisted alloy design.',
  image: relianceJainImg,
  linkedin: 'https://www.linkedin.com/in/reliance-jain-a224b4100/?originalSubdomain=in',
  website: null,
 },
];



export default function SpeakersPage() {
  return (
    <>
      {/* <PageHeader 
        title="Keynote Speakers" 
        subtitle="Learn from world-renowned experts in materials and manufacturing"
      /> */}
       {/* <div className="min-h-screen bg-gray-50"> */}
      {/* Simple Hero Section */}
      {/* <section className="bg-gradient-to-r bg-amber-50 text-black py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
           Keynote Speakers
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
          Learn from world-renowned experts in materials and manufacturing
          </p>
        </div>
      </section> */}

      <section className="section-padding bg-background">
        <div className="section-container">
          <SectionHeader 
            title="Keynote Speakers" 
            subtitle="Learn from world-renowned experts in materials and manufacturing"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl overflow-hidden card-elevated group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display text-xl font-bold text-white mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-white/80 text-sm">{speaker.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-accent font-medium text-justify text-sm mb-3">{speaker.affiliation}</p>
                  <p className="text-muted-foreground text-sm text-justify leading-relaxed">{speaker.bio}</p>
                  <div className="flex gap-3 mt-4 pt-4 border-t border-border">
  {speaker.linkedin && (
    <a
      href={speaker.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${speaker.name} LinkedIn`}
    >
      <button className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
        <Linkedin className="w-4 h-4" />
      </button>
    </a>
  )}

  {speaker.website && (
    <a
      href={speaker.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${speaker.name} Website`}
    >
      <button className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
        <Globe className="w-4 h-4" />
      </button>
    </a>
  )}
</div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Speaker CTA */}
      <section className="section-padding bg-muted">
        <div className="section-container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Interested in Speaking?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are always looking for distinguished speakers to share their expertise. 
            If you are interested in presenting a keynote or invited talk, please contact us.
          </p>
        </div>
      </section>
    </>
  );
}
