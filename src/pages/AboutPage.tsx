import { Target, BookOpen, Building, CheckCircle } from 'lucide-react';

const objectives = [
  'Foster collaboration between academia and industry in materials and manufacturing',
  'Share cutting-edge research findings and technological innovations',
  'Discuss challenges and opportunities in sustainable manufacturing',
  'Network with leading experts and researchers from around the world',
  'Explore emerging trends in Industry 4.0 and smart manufacturing',
];

const scope = [
  {
    title: 'I: Data-Driven Modeling of Advanced Energy Systems',
    items: [
      'AI/ML-based energy system modeling',
      'Performance prediction and system analytics',
      'Data-driven simulation and digital modeling',
      'Intelligent decision support systems',
    ],
  },
  {
    title: 'II: Modeling of Mechanical and Thermal Energy Optimisation',
    items: [
      'Thermal system modeling and analysis',
      'Mechanical energy optimization techniques',
      'Heat transfer and thermofluid simulations',
      'Advanced numerical and CFD-based methods',
    ],
  },
  {
    title: 'III: Renewable and Sustainable Energy Systems',
    items: [
      'Solar, wind, and hybrid renewable systems',
      'Sustainable energy technologies',
      'Energy harvesting and utilization',
      'Environmental impact and sustainability assessment',
    ],
  },
  {
    title: 'IV: Energy Storage and Energy Conversion Systems',
    items: [
      'Battery and supercapacitor technologies',
      'Hydrogen energy and fuel cell systems',
      'Advanced energy conversion methods',
      'Storage integration with renewable systems',
    ],
  },
  {
    title: 'V: Smart Distributed Energy Systems',
    items: [
      'Smart grids and microgrid technologies',
      'Distributed generation and control',
      'Energy management systems',
      'Cyber-physical energy infrastructures',
    ],
  },
  {
    title: 'VI: Emerging Trends in Process Optimization',
    items: [
      'AI-driven optimization algorithms',
      'Hybrid and ensemble optimization techniques',
      'Industrial process optimization',
      'Multi-objective and real-time optimization',
    ],
  },
  {
    title: 'VII: Predictive Maintenance and Fault Diagnosis',
    items: [
      'Condition monitoring and diagnostics',
      'Fault detection and classification',
      'Predictive maintenance strategies',
      'Reliability and prognostics analysis',
    ],
  },
  {
    title: 'VIII: Energy Efficiency and Emission Reduction',
    items: [
      'Energy efficiency enhancement techniques',
      'Emission reduction and mitigation strategies',
      'Sustainable energy management',
      'Policy, standards, and environmental compliance',
    ],
  },
];

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
    <p className="text-lg text-gray-600">{subtitle}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Hero Section */}
      <section className="bg-gradient-to-r  text-black py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About ICAIM-AES-2026
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Learn about our mission, objectives, and the organizing institution
          </p>
        </div>
      </section>

      {/* Conference Overview with Parallax */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-slate-900/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-blue-950" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
                Conference Overview
              </h2>
            </div>

            <p className="text-black/90 text-justify leading-relaxed mb-6 text-lg">
              The International Conference on AI/ML Applications in Advanced Energy Systems (ICAIM-AES-2026) is a premier international forum that brings together researchers, academicians, industry professionals, and students to discuss recent advances in artificial intelligence and machine learning for advanced energy systems.
            </p>

            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-blue-950 mb-4">Important Dates</h3>
              <p className="text-black/70 leading-relaxed">
                The conference will commence with the Call for Papers on <strong className="text-">20t February 2026</strong>, followed by the full-length paper submission deadline on <strong className="text-">10th May 2026</strong>. Acceptance notifications will be announced on <strong className="text-">20th May 2026</strong>, and the final date for paper registration is <strong className="text">01st June 2026</strong>. The conference will be held from <strong className="text-">22–26 July 2026</strong>, featuring keynote lectures, technical sessions, and panel discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Conference Scope"
            subtitle="Explore the diverse topics covered at ICAIM-AES-2026"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {scope.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-900 mb-4 border-b border-gray-200 pb-3">
                  {category.title}
                </h3>
                {/* <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                      {item}
                    </li>
                  ))}
                </ul> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizing Institution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                <Building className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Organizing Institution
                </h2>

                <p className="text-gray-700 text-justify leading-relaxed mb-4">
                  ICAIM-AES-2026 is organized by the
                  <a
                    href="https://www.vidhyapeethbhopal.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    {" "}Vidhyapeeth Institute of Science and Technology, Bhopal
                  </a>,
                  in association with
                  <a
                    href="https://ritchennai.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    {" "}Rajalakshmi Institute of Technology, Chennai, India
                  </a>
                  {" "}and
                  <a
                    href="https://www.emu.edu.tr/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 hover:underline"
                  >
                    {" "}Institute of Advanced Technology and Research and Development,
                    Eastern Mediterranean University, North Cyprus, Türkiye
                  </a>.
                  The conference is conducted in collaboration with reputed academic institutions,
                  research organizations, and industry partners.
                </p>

                <p className="text-gray-700 text-justify leading-relaxed">
                  The organizing committee comprises distinguished academicians, researchers,
                  and industry experts who are committed to delivering a high-quality
                  international conference that fosters innovation, interdisciplinary
                  collaboration, and knowledge exchange in advanced energy systems.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}