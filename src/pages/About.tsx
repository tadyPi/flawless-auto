import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, Users, Clock, ArrowRight } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '2,500+', label: 'Vehicles Restored' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '5★', label: 'Average Rating' }
  ];

  const team = [
    {
      name: 'Mike Johnson',
      role: 'Master Technician & Owner',
      image: 'https://placehold.co/400x400',
      bio: 'With over 20 years in automotive refinishing, Mike founded Flawless Auto with a vision of providing uncompromising quality and service.'
    },
    {
      name: 'Sarah Martinez',
      role: 'Paint Specialist',
      image: 'https://placehold.co/400x400',
      bio: 'Sarah brings 12 years of experience in custom paint work and color matching, ensuring every finish meets our exacting standards.'
    },
    {
      name: 'David Chen',
      role: 'Collision Repair Expert',
      image: 'https://placehold.co/400x400',
      bio: 'David specializes in structural repairs and frame alignment, bringing precision engineering to every collision repair job.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality. Every repair is completed to the highest standards using premium materials and proven techniques.'
    },
    {
      icon: Users,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We keep you informed throughout the process and ensure you\'re completely happy with the results.'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'We respect your time and work efficiently to get your vehicle back to you as quickly as possible without sacrificing quality.'
    },
    {
      icon: Award,
      title: 'Expertise',
      description: 'Our certified technicians stay current with industry best practices and use state-of-the-art equipment for superior results.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Flawless Auto Refinishing
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                For over 15 years, we've been the trusted choice for automotive body repair and refinishing.
                Our commitment to excellence and attention to detail has made us a leader in the industry.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
                alt="Professional auto shop"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Flawless Auto Refinishing was founded in 2009 with a simple mission: to provide the highest quality
                  automotive body repair and refinishing services with unmatched customer service.
                </p>
                <p>
                  What started as a small shop with big dreams has grown into one of the region's most trusted
                  auto body repair facilities. Our success is built on a foundation of skilled craftsmanship,
                  honest business practices, and a genuine care for our customers.
                </p>
                <p>
                  Today, we continue to invest in the latest technology and training to ensure we can handle
                  everything from minor touch-ups to major collision repairs with the same level of excellence
                  that has defined our reputation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
                alt="Auto shop interior"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and ensure every customer receives exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our skilled professionals bring decades of combined experience to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Flawless Difference
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to see why so many customers trust us with their vehicles? Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:(555)123-4567"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;