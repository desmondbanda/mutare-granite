import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Truck, Users } from 'lucide-react';
import { categories } from '../../data/mockData';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6782347/pexels-photo-6782347.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Premium Granite Solutions for Every Project
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200">
              Zimbabwe's trusted granite supplier for over 20 years. Quality, craftsmanship, and excellence in every piece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From elegant countertops to durable flooring, we offer premium granite solutions for every need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.name}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{category.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center text-slate-700 group-hover:text-slate-900 transition-colors">
                    <span className="text-sm font-medium">View Products</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Mutare Granite?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our commitment to quality and customer satisfaction sets us apart in the granite industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-lg">
                <Award className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Premium Quality</h3>
              <p className="text-slate-600">
                Hand-selected granite from the finest quarries, ensuring exceptional quality in every piece.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Guaranteed Durability</h3>
              <p className="text-slate-600">
                Built to last with industry-leading warranties and comprehensive after-sales support.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-lg">
                <Truck className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Fast Delivery</h3>
              <p className="text-slate-600">
                Efficient logistics and nationwide delivery network for timely project completion.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-lg">
                <Users className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Expert Support</h3>
              <p className="text-slate-600">
                Professional consultation and installation services from our experienced team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 text-slate-300">
            Get in touch with our experts for a personalized consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200"
            >
              Get Free Quote
            </Link>
            <Link
              to="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-200"
            >
              View Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;