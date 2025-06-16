import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Award, Wrench, Palette, Car } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Collision Repair',
      description: 'Expert restoration of accident damage with precision and care.',
    },
    {
      icon: Palette,
      title: 'Custom Paint Jobs',
      description: 'Professional automotive painting and color matching services.',
    },
    {
      icon: Car,
      title: 'Body Work',
      description: 'Comprehensive bodywork including dent repair and panel replacement.',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'We stand behind our work with comprehensive warranties.',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick and efficient service to get you back on the road.',
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Trusted expertise in automotive refinishing and repair.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 dark:from-blue-950 dark:via-blue-900 dark:to-blue-950 text-white overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg"
            alt="Auto body shop"
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Restore Your Vehicle to
                <span className="text-orange-400 dark:text-orange-300 block">Flawless Condition</span>
              </h1>
              <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 leading-relaxed">
                Professional auto body repair, collision damage restoration, and custom paint services. 
                Your trusted partner for quality automotive refinishing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-orange-500 dark:bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-600 dark:hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 dark:hover:text-blue-950 transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg"
                alt="Professional auto refinishing"
                className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Expert Auto Body Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From minor touch-ups to major collision repairs, we handle every job with precision and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:bg-white dark:hover:bg-gray-700 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="bg-blue-100 dark:bg-blue-900/50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 bg-blue-900 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Flawless Auto?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experience the difference that quality workmanship makes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 dark:bg-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-950 dark:to-blue-900 text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Restore Your Vehicle?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate. Our expert team is ready to bring your vehicle back to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 dark:bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-600 dark:hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:(555)123-4567"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 dark:hover:text-blue-950 transition-all duration-300"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;