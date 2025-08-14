// src/pages/ContactUs.tsx
import React, { type JSX } from 'react';

export default function ContactUs(): JSX.Element {
  return (
    <>
      {/* Header Band */}
      <div className="bg-gradient-to-r from-purple-500 to-cyan-200 rounded-lg p-6 mb-6 px-4 py-8 mx-4 sm:mx-8 md:mx-16 lg:mx-4 mt-6">
        <h2
          className="text-2xl md:text-3xl font-bold text-purple-800 text-center"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1500"
        >
          Contact Us
        </h2>
        <p
          className="mt-4 text-black-800 text-center"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          If you have questions, feedback, or need assistance, we’re here to help.
        </p>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* General Support */}
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-duration="1200"
          >
            <h3
              className="text-xl font-bold text-teal-700 mb-2"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              General Support
            </h3>
            <p
              className="text-gray-700 mb-4"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              Browse our resources or submit a ticket to our support team.
            </p>
            <button
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1200"
            >
              Contact
            </button>
          </div>

          {/* Suggest an Integration */}
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <h3
              className="text-xl font-bold text-teal-700 mb-2"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              Suggest an Integration
            </h3>
            <p
              className="text-gray-700 mb-4"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              Recommend a new feature or tool for MindCare.
            </p>
            <button
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              Suggest
            </button>
          </div>

          {/* Technical Support */}
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="1200"
          >
            <h3
              className="text-xl font-bold text-teal-700 mb-2"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              Technical Support
            </h3>
            <p
              className="text-gray-700 mb-4"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              Facing an issue? Submit a technical support ticket.
            </p>
            <button
              className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
              data-aos="zoom-in"
              data-aos-delay="400"
              data-aos-duration="1200"
            >
              Get Help
            </button>
          </div>
        </div>

        {/* Contact Form Section */}
        <section
          className="bg-gradient-to-br from-purple-400 to-emerald-500 py-12 md:py-16 px-4 rounded-xl"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1200"
        >
          <div className="max-w-3xl mx-auto bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-14 space-y-8 border border-gray-200">
            {/* Form Heading */}
            <div className="text-center">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-purple-700 mb-2"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                Get in <span className="text-pink-500">Touch</span>
              </h2>
              <p
                className="text-black-600 font-semi-bold"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                We’d love to hear from you. Fill out the form below and we’ll get back to you shortly.
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                >
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="How can we help you?"
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition resize-none"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-400 to-cyan-400 text-black font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:from-purple-500 hover:to-cyan-500 transition duration-300"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
