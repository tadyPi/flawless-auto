import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  Palette,
  Car,
  Shield,
  Zap,
  Settings,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Collision Repair',
      description: 'Complete collision damage restoration using state-of-the-art equipment and techniques.',
      features: [
        'Frame straightening and alignment',
        'Structural damage repair',
        'Insurance claim assistance',
        'Free damage assessment'
      ],
      image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
    },
    {
      icon: Palette,
      title: 'Custom Paint & Refinishing',
      description: 'Professional automotive painting with precision color matching and premium finishes.',
      features: [
        'Computer color matching',
        'Custom paint designs',
        'Clear coat application',
        'Paint protection services'
      ],
      image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
    },
    {
      icon: Car,
      title: 'Dent & Scratch Repair',
      description: 'Expert repair of dents, scratches, and surface damage to restore your vehicle\'s appearance.',
      features: [
        'Paintless dent removal',
        'Scratch buffing and polishing',
        'Panel repair and replacement',
        'Bumper restoration'
      ],
      image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
    },
    {
      icon: Shield,
      title: 'Rust & Corrosion Treatment',
      description: 'Comprehensive rust removal and corrosion prevention to protect your investment.',
      features: [
        'Sandblasting and surface prep',
        'Rust inhibitor application',
        'Undercoating services',
        'Preventive maintenance'
      ],
      image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
    },
    {
      icon: Zap,
      title: 'Detailing & Restoration',
      description: 'Complete vehicle detailing and restoration services for like-new appearance.',
      features: [
        'Interior and exterior detailing',
        'Paint correction and polishing',
        'Ceramic coating application',
        'Headlight restoration'
      ],
      image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
    },
    {
      icon: Settings,
      title: 'Specialty Services',
      description: 'Custom automotive work including modifications and specialty finishes.',
      features: [
        'Custom graphics and decals',
        'Chrome and trim restoration',
        'Vintage car restoration',
        'Fleet vehicle services'
      ],
      image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Auto Body Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              From collision repair to custom refinishing, we offer comprehensive automotive body services
              with the expertise and attention to detail your vehicle deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to quality automotive refinishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', description: 'Thorough inspection and damage evaluation' },
              { step: '02', title: 'Estimate', description: 'Detailed quote with transparent pricing' },
              { step: '03', title: 'Repair', description: 'Expert workmanship using quality materials' },
              { step: '04', title: 'Quality Check', description: 'Final inspection and customer approval' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free assessment and detailed quote for your vehicle's repair needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;