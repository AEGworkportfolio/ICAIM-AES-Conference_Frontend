import { Users, Award, Settings, Sparkles } from 'lucide-react';

const committees = {
  patron: {
    title: 'Chief Patron',
    icon: Award,
    members: [
      {
        name: 'Smt. Shraddha Suhane',
        role: 'Chief Patron',
        affiliation: 'CEO, VGI',
      },
      {
        name: 'Er. Ashish Suhane',
        role: 'Chief Patron',
        affiliation: 'Executive Secretary, VGI',
      },
    ],
  },

  chairman: {
    title: 'Conference Chairman',
    icon: Settings,
    members: [
      {
        name: 'Dr. Rajiv Arya',
        role: 'Conference Chairman',
        affiliation:
          'Director, Vidhyapeeth Institute of Science and Technology, Bhopal',
      },
      {
        name: 'Sharad Sharma',
        role: 'Conference Chairman',
        affiliation: 'Director, AEG Consultancy Services, Bhopal',
      },
    ],
  },

  organizing: {
    title: 'Organizing Secretaries',
    icon: Users,
    members: [
      {
        name: 'Dr. Ramesh Kumar Nayak',
        role: 'Organizing Secretary',
        affiliation:
          'Assistant Professor, Materials & Metallurgical Engineering',
      },
      {
        name: 'Dr. Kanak Kalita',
        role: 'Organizing Secretary',
        affiliation:
          'Department of Mechanical Engineering, Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Avadi, India',
      },
      {
        name: 'Dr. Shisher Shandilya',
        role: 'Organizing Secretary',
        affiliation:
          'Division Head, Cyber Security and Digital Forensics, VIT Bhopal',
      },
    ],
  },

  advisory: {
    title: 'Advisory Board',
    icon: Sparkles,
    members: [
      {
        name: 'Dr. Sheetal Kumar Dewangan',
        role: 'Advisory Board Member',
        affiliation:
          'CHRIST (Deemed to be University), Bangalore, Karnataka, India',
      },
      {
        name: 'Dr. Rajesh Purohit',
        role: 'Advisory Board Member',
        affiliation:
          'Maulana Azad National Institute of Technology, Bhopal, India',
      },
      {
        name: 'Dr. Mukesh Kirar',
        role: 'Advisory Board Member',
        affiliation:
          'Assistant Professor, Electrical Department, MANIT Bhopal, India',
      },
      {
        name: 'Dr. Reliance Jain',
        role: 'Advisory Board Member',
        affiliation:
          'School of Materials Science and Engineering, Yeungnam University, Republic of Korea',
      },
      {
        name: 'Dr. Pradeep Bedi',
        role: 'Advisory Board Member',
        affiliation:
          'Department of Computer Science, Galgotias University, India',
      },
      {
        name: 'Dr. Ramesh Chandra Poonia',
        role: 'Advisory Board Member',
        affiliation:
          'Professor, Department of Computer Science, CHRIST University, Bangalore, India',
      },
      {
        name: 'Dr. Shrikant V. Sonekar',
        role: 'Advisory Board Member',
        affiliation:
          'J D College of Engineering and Management, Nagpur, India',
      },
      {
        name: 'Dr. Ajay Sharma',
        role: 'Advisory Board Member',
        affiliation: 'VIT, Bhopal, India',
      },
      {
        name: 'Dr. Mohammad Taufik',
        role: 'Advisory Board Member',
        affiliation:
          'Maulana Azad National Institute of Technology, Bhopal, India',
      },
      {
        name: 'Dr. Leena Daniel',
        role: 'Advisory Board Member',
        affiliation:
          'Principal, Laxmipati Institute of Technology, India',
      },
      {
        name: 'Dr. Bharat Gupta',
        role: 'Advisory Board Member',
        affiliation:
          'Director, Corporate Institute of Science & Technology, Bhopal, India',
      },
    ],
  },
};

export default function CommitteesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header with Background Image */}
      <div 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070')`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <Users className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">ICAIM-AES</span>
            </div>
            <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg">
              Conference Committees
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto drop-shadow">
              Meet the distinguished team of experts and leaders organizing ICAIM-AES-2026
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>

      {/* Committees Section with Pattern Background */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.values(committees).map((committee, index) => (
            <div key={index} className="mb-20 last:mb-0">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl blur-lg opacity-30"></div>
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <committee.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{committee.title}</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mt-2"></div>
                </div>
              </div>
              
              {/* Cards Grid */}
              <div className={`grid gap-6 ${
                committee.title === 'Chief Patron' || committee.title === 'Conference Chairman' 
                  ? 'sm:grid-cols-2' 
                  : 'sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {committee.members.map((member, idx) => (
                  <div 
                    key={idx} 
                    className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-amber-300 overflow-hidden"
                  >
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mr-16 -mt-16"></div>
                    
                    <div className="relative">
                      {/* Member Name */}
                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {member.name}
                      </h3>
                      
                      {/* Role Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                        <p className="text-amber-700 text-sm font-semibold">{member.role}</p>
                      </div>
                      
                      {/* Affiliation */}
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {member.affiliation}
                      </p>
                    </div>
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}