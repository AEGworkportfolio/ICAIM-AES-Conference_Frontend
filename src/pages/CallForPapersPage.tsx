import { FileText, Upload, AlertCircle, CheckCircle, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import springerImg from '@/assets/Springer.jpeg';


const topics = [
  {
    title: 'Data-Driven Modeling of Advanced Energy Systems',
    items: [
      'AI/ML-based energy system modeling',
      'Data-driven performance prediction',
      'Intelligent system analysis and simulation',
      'Decision support for complex energy systems',
    ],
  },
  {
    title: 'Modeling of Mechanical and Thermal Energy Optimisation',
    items: [
      'Thermal system modeling and analysis',
      'Mechanical energy optimization techniques',
      'Heat transfer and thermofluid simulations',
      'Advanced numerical and CFD-based approaches',
    ],
  },
  {
    title: 'Renewable and Sustainable Energy Systems',
    items: [
      'Solar and wind energy systems',
      'Hybrid and sustainable energy technologies',
      'Energy harvesting and utilization',
      'Environmental and sustainability assessment',
    ],
  },
  {
    title: 'Energy Storage and Energy Conversion Systems',
    items: [
      'Battery and supercapacitor technologies',
      'Hydrogen energy and fuel cell systems',
      'Advanced energy conversion techniques',
      'Integration of storage with renewable systems',
    ],
  },
  {
    title: 'Smart Distributed Energy Systems',
    items: [
      'Smart grids and microgrids',
      'Distributed generation and control',
      'Energy management systems',
      'Cyber-physical energy infrastructures',
    ],
  },
  {
    title: 'Emerging Trends in Process Optimization',
    items: [
      'AI-driven optimization algorithms',
      'Hybrid and ensemble optimization methods',
      'Industrial process optimization',
      'Multi-objective and real-time optimization',
    ],
  },
  {
    title: 'Predictive Maintenance and Fault Diagnosis',
    items: [
      'Condition monitoring and diagnostics',
      'Fault detection and classification',
      'Predictive maintenance strategies',
      'Reliability and prognostics analysis',
    ],
  },
  {
    title: 'Energy Efficiency and Emission Reduction',
    items: [
      'Energy efficiency improvement techniques',
      'Emission reduction and mitigation strategies',
      'Sustainable energy management',
      'Policies, standards, and environmental compliance',
    ],
  },
];

const guidelines = [
  'Abstracts should be between 250-300 words',
  'Full papers should be 7-8 pages as per the format',
  'Original and unpublished work only',
  'Maximum 5 co-authors per paper',
  'Plagiarism must be below 15%',
];

const instructions = [
  'Prepare your manuscript according to the provided template',
  'Submit through the online submission portal',
  'Await notification of acceptance/revision',
  'Address reviewer comments if applicable',
  'Submit camera-ready version by deadline',
  'Register and present at the conference',
];

export default function CallForPapersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r  text-black py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Call for Papers</h1>
          <p className="text-xl text-black">Submit your research to  ICAIM-AES-2026 and contribute to sustainable technological advancement</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Preamble and Objectives Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Preamble */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-blue-600">
  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
    <BookOpen className="w-6 h-6 text-blue-600" />
    Preamble and Objectives
  </h2>

  <div className="prose prose-sm text-gray-700 space-y-4">
    <p className="text-justify leading-relaxed">
      This volume comprises selected peer-reviewed papers presented at the
      <strong> International Conference on AI/ML Applications in Advanced Energy Systems (ICAIM-AES-2026)</strong>.
      The conference and the resulting proceedings focus on the transformative
      role of Artificial Intelligence and Machine Learning in the design,
      operation, optimization, and management of next-generation energy systems.
    </p>

    <p className="text-justify leading-relaxed">
      The primary objective of this conference is to highlight the application of
      AI and ML techniques in performance prediction, process optimization, fault
      diagnosis, predictive maintenance, energy efficiency enhancement, and
      intelligent decision support for complex energy systems. The scope also
      includes emerging research areas such as sustainable energy systems,
      digital twins, intelligent control strategies, and optimization of thermal
      and industrial energy systems.
    </p>

    <p className="text-justify leading-relaxed">
      Emphasis is placed on advanced learning algorithms, hybrid and ensemble
      models, optimization techniques, edge–cloud intelligence, cyber-physical
      energy systems, and explainable AI to ensure trustworthy and interpretable
      solutions. The conference proceedings are intended for academicians,
      postgraduate students, researchers, practicing engineers, energy
      professionals, and policymakers interested in interdisciplinary research at
      the intersection of artificial intelligence, machine learning, and advanced
      energy systems.
    </p>
  </div>
</div>

          {/* Full-length Paper Submission */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-green-600">
  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
    <FileText className="w-6 h-6 text-green-600" />
    Full-length Paper Submission
  </h2>

  <div className="space-y-4">
    <p className="text-gray-700 text-justify leading-relaxed">
      Prospective authors are invited to submit original and unpublished
      full-length research papers electronically in the prescribed format by
      <span className="font-semibold text-black-700"> 10th May 2026</span>.
      The manuscript length should be within
      <span className="font-semibold"> 8–10 pages</span>, prepared strictly
      according to the conference template.
    </p>

    <p className="text-gray-700 text-justify leading-relaxed">
      All submissions will undergo a rigorous
      <span className="font-semibold"> double-blind peer-review process</span>
      by at least two independent reviewers. Papers will be evaluated based on
      originality, technical quality, relevance to the conference theme, and
      compliance with ethical standards, including a maximum plagiarism limit
      of <span className="font-semibold">20%</span>.
    </p>

    <p className="text-gray-700 text-justify leading-relaxed">
      At least one author of each accepted paper must register and present the
      paper at the conference for inclusion in the proceedings. Selected and
      presented papers will be submitted for publication in
      <span className="font-semibold"> SCOPUS/WoS-indexed</span> conference
      proceedings or journals, subject to the publisher’s final review and
      approval.
    </p>

    <p className="text-gray-700 text-justify leading-relaxed">
      The publisher or journal may conduct an additional review as per their
      editorial policies before making the final decision on publication.
    </p>

    <p className="text-sm text-gray-600 italic">
      For detailed submission guidelines, templates, and important updates,
      please visit the official conference website:&nbsp;
      <a
        href="http://www.icaimaes.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        www.icaimaes.in
      </a>
    </p>
  </div>
</div>

        </div>

        {/* Publication Details - Springer */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg shadow-lg p-8 border-l-4 border-red-600">
  <div className="flex flex-col md:flex-row items-start gap-6">
    
    <div className="flex-shrink-0">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <img
          src={springerImg}
          alt="Springer Nature"
          className="w-32 h-auto"
        />
      </div>
    </div>

    <div className="flex-1">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Publication Partner
      </h3>

      <p className="text-gray-800 mb-4 font-medium text-lg">
        Proposed Book Series:&nbsp;
        <span className="text-red-700">
         AI/ML Applications in Advanced Energy Systems
        </span>
      </p>

      <div className="bg-white/80 rounded-md p-5 border-2 border-red-200">
        <p className="text-gray-700 leading-relaxed italic">
          <span className="font-semibold text-red-700 not-italic">
            Selected and presented papers from the conference will be proposed
            for publication as a Springer proceedings book volume under the
            AI/ML Applications in Advanced Energy Systems.
          </span>
          &nbsp;All accepted papers will undergo Springer’s editorial and
          quality checks, and only manuscripts that successfully meet Springer
          standards will be included in the final volume. Springer Nature does
          not charge any publication fee for non–open access proceedings.
          <span className="font-semibold not-italic">
            &nbsp;Abstracts, extended abstracts, and short papers (less than
            4 pages) will not be considered for publication.
          </span>
        </p>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <p className="font-medium">Abstracted and indexed in:</p>
        <p>
          EI Compendex, SCOPUS, Norwegian Register for Scientific Journals and
          Series
        </p>
      </div>
    </div>

  </div>
</div>

        {/* Topics Section */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Conference Topics</h2>
            <p className="text-gray-600">Submit your research in any of the following areas</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        
        
        
      </div>
    </div>
  );
}