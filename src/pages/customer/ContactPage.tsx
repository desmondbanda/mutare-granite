import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import InquiryForm from '../../components/customer/InquiryForm';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get in touch with our team for inquiries, quotes, or support. We're here to help with all your granite needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-slate-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-slate-600">
                      123 Industrial Road<br />
                      Mutare, Zimbabwe
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-slate-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">+263 20 123 4567</p>
                    <p className="text-slate-600">+263 77 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-slate-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">info@mutaregaranite.co.zw</p>
                    <p className="text-slate-600">sales@mutaregaranite.co.zw</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-slate-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Business Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 8:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Location</h3>
              <div className="w-full h-64 bg-slate-200 rounded-lg flex items-center justify-center">
                <p className="text-slate-600">Interactive Map Would Go Here</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Send us a Message</h2>
            <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;