// src/pages/AboutUs.tsx
import React, { type JSX } from 'react';

export default function AboutUs(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cyan-200 text-black">
        <img
          src="src/assets/images/mental-health-head.jpg"
          alt="About MindCare"
          className="w-full h-[50vh] md:h-[650px] object-cover opacity-70"
          loading="lazy"
        />

        <div className="absolute inset-0 flex items-center justify-start">
          <div className="px-4 md:pl-16 max-w-2xl text-left">
            <h1
              className="text-3xl md:text-4xl font-bold mb-4 text-purple-800"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1200"
            >
              Welcome to <span className="text-pink-500">MindCare</span>
            </h1>
            <p
              className="text-base md:text-lg text-black mb-8"
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-duration="1200"
            >
              At MindCare, we’re reimagining mental health for the modern world. As a digital platform dedicated to
              emotional wellbeing, we connect individuals with accessible, compassionate, and personalized support anytime,
              anywhere.
              <br />
              <br />
              Whether you're navigating stress, seeking balance, or simply need someone to talk to, MindCare is here to
              walk with you every step of the way. Discover who we are, what we stand for, and how we’re making mental
              wellness a priority one conversation at a time.
            </p>

            {/* News / Updates Block */}
            <div
              className="bg-white/90 p-4 md:p-6 rounded-md shadow-md flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-6"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <span
                className="text-black text-base md:text-lg text-center md:text-left md:w-2/3"
                data-aos="zoom-in"
                data-aos-delay="1200"
                data-aos-duration="2000"
              >
                Want to stay informed with MindCare?
                <br />
                Explore our latest updates, news, and insights on mental health
              </span>
              <a href="/blog-news" className="md:w-auto w-full text-center">
                <button
                  className="bg-purple-600 text-white px-5 md:px-6 py-3 rounded hover:bg-purple-700 transition duration-300 w-full md:w-auto font-bold"
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                  data-aos-duration="2000"
                >
                  Blog &amp; News
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Who We Are */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Who We Are
              </h2>
              <p
                className="text-gray-700 text-base md:text-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                MindCare isn’t just a mental health platform — we’re a passionate team committed to transforming how people
                experience emotional wellbeing in Sri Lanka. Built on compassion, innovation, and accessibility, we connect
                individuals with trusted mental health support that fits their lives. Whether you're seeking everyday
                balance or navigating deeper challenges, MindCare is here to provide care that’s personal, reliable, and
                stigma-free. We stand for empathy, empowerment, and a future where mental health is treated with the
                importance it truly deserves.
              </p>
            </div>
            <div>
              <img
                src="src/assets/images/logo.png"
                alt="Team at work"
                className="rounded-lg shadow-lg w-40 h-40 md:w-48 md:h-48 object-contain mx-auto"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1200"
                loading="lazy"
              />
            </div>
          </div>

          {/* Our Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
            <div>
              <img
                src="src/assets/images/logo.png"
                alt="Team at work"
                className="rounded-lg shadow-lg w-40 h-40 md:w-48 md:h-48 object-contain mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
                loading="lazy"
              />
            </div>
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                Our Story
              </h2>
              <p
                className="text-gray-700 text-base md:text-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                MindCare was founded by a group of university students with a shared passion for mental health and
                technology. What began as a group project for our university coursework quickly grew into something much
                more meaningful — a platform with the potential to make a real difference. Driven by a desire to support
                emotional wellbeing and bridge the mental health gap in Sri Lanka, we combined our diverse skills in
                psychology, design, and tech to create a safe, accessible space for anyone seeking support. From classroom
                brainstorms to a growing digital initiative our journey has always been rooted in empathy, innovation, and
                the belief that mental health care should be within reach for all.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Our Mission
              </h2>
              <p
                className="text-gray-700 text-base md:text-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                To transform the way mental health support is experienced and accessed. At MindCare, our mission is to
                provide compassionate, affordable, and stigma-free mental health services that fit seamlessly into everyday
                life. We’re committed to creating a safe, inclusive space where individuals can find support feel heard,
                and take steps toward healing — all through the power of technology, empathy, and innovation. Our goal is
                to break down barriers, build emotional resilience, and make mental wellbeing a priority for everyone.
              </p>
            </div>
            <div>
              <img
                src="src/assets/images/logo.png"
                alt="Team at work"
                className="rounded-lg shadow-lg w-40 h-40 md:w-48 md:h-48 object-contain mx-auto"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1200"
                loading="lazy"
              />
            </div>
          </div>

          {/* Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
            <div>
              <img
                src="src/assets/images/logo.png"
                alt="Team at work"
                className="rounded-lg shadow-lg w-40 h-40 md:w-48 md:h-48 object-contain mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
                loading="lazy"
              />
            </div>
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                Our Vision
              </h2>
              <p
                className="text-gray-700 text-base md:text-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                To become the most trusted and innovative digital mental health platform in Sri Lanka and beyond — reshaping
                how individuals access care, build resilience, and connect with support. Our vision is a future where
                mental wellbeing is prioritized, stigma is replaced with understanding, and everyone has access to
                compassionate, inclusive, and technology-driven mental health solutions anytime, anywhere.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 items-center">
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                Core Values
              </h2>
              <ul
                className="text-gray-700 text-base md:text-lg list-disc pl-6"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                <li className="mb-2">
                  Integrity &amp; Trust – We uphold honesty, confidentiality, and build trust in every interaction.
                </li>
                <li className="mb-2">
                  Innovation – Embracing technology to make mental health care more accessible, efficient, and user-friendly.
                </li>
                <li className="mb-2">
                  People-First – Every decision we make centers around compassion, care, and the wellbeing of those we serve.
                </li>
                <li className="mb-2">
                  Empathy – We listen with understanding and act with compassion, always meeting people where they are.
                </li>
                <li className="mb-2">
                  Collaboration – Working together with professionals, communities, and individuals to improve lives through
                  shared knowledge and support.
                </li>
              </ul>
            </div>
            <div>
              <img
                src="src/assets/images/logo.png"
                alt="Team at work"
                className="rounded-lg shadow-lg w-40 h-40 md:w-48 md:h-48 object-contain mx-auto"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1200"
                loading="lazy"
              />
            </div>
          </div>

          {/* Founders' Message */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="src/assets/images/group.jpg"
                alt="Team at work"
                className="rounded-lg shadow-lg w-full max-w-xl object-cover mx-auto"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
                loading="lazy"
              />
            </div>
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                From Our Founders
              </h2>
              <p
                className="text-gray-700 text-base md:text-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                “MindCare began as a university project — a simple idea born from a shared passion for mental wellbeing and
                a desire to make a difference. What started in a classroom has grown into something far more meaningful: a
                platform that empowers people to take control of their mental health with care, compassion, and dignity.
                We’re not just creating a service we’re building a community where healing is accessible, support is
                stigma-free, and every voice matters. This journey is just beginning, and we’re honored to walk it with
                you.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
