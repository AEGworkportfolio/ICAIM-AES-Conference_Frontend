import React from 'react';
import { Mail, MapPin, GraduationCap } from 'lucide-react';

const EditorialBoard = () => {
  const editors = [
     {
      name: "Dr. Rajeev Arya",
      title: "Director",
      department: "",
      institution: "Vidhyapeeth Institute of Science and Technology",
      location: "Bhopal, 462022, India",
      email: "directorvidhyapeeth@gmail.com"
    },
    {
      name: "Dr. Robert Cep",
      title: "Professor",
      department: "Department of Mechanical Engineering",
      institution: "VSB-Technical University of Ostrava",
      location: "Czech Republic",
      email: "robert.cep@vsb.cz"
    },
    {
      name: "Sharad Sharma",
      title: "Director (Research Consultant) ",
      department: "",
      institution: "AEG Consultancy Services Pvt. Ltd.",
      location: "Bhopal, 462022, India",
      email: "director@aegservices.in"
    },
   
    {
      name: "Dr. Ramesh Kumar Nayak",
      title: "Assistant Professor",
      department: "Department of Materials and Metallurgical Engineering",
      institution: "Maulana Azad National Institute of Technology (MANIT)",
      location: "Bhopal, 462003, India",
      email: "rameshkumarnayak@gmail.com"
    },
    {
      name: "Dr. Kanak Kalita",
      title: "Associate Dean (Research)",
      department: "",
      institution: "Rajalakshmi Institute of Technology",
      location: "Chennai, 600124, India",
      email: "kanakkalita@ritchennai.edu.in"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50">
      {/* Header */}
      <div className="bg-white py-8 border-b-4 border-orange-500 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              Editorial <span className="text-orange-600">Board</span>
            </h1>
            <div className="w-32 h-1 bg-orange-500 mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Distinguished experts leading ICAIM-AES-2026 with excellence in AI/ML applications for Advanced Energy Systems
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {editors.map((editor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-orange-400"
            >
              <div className="bg-gradient-to-r from-orange-500 to-amber-600 h-2"></div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-md">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {editor.name}
                    </h3>
                    {editor.title && (
                      <p className="text-sm font-medium text-orange-600 mb-2">
                        {editor.title}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  {editor.department && (
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {editor.department}
                    </p>
                  )}
                  
                  <div className="flex items-start text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-orange-500" />
                    <div>
                      <p className="font-medium text-gray-800">{editor.institution}</p>
                      <p className="text-gray-600">{editor.location}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <a
                      href={`mailto:${editor.email}`}
                      className="flex items-center text-sm text-orange-600 hover:text-orange-700 transition-colors font-medium"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      {editor.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer decoration */}
      <div className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
    </div>
  );
};

export default EditorialBoard;