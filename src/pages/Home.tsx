// src/pages/Home.tsx
import React, { type JSX } from 'react';

export default function Home(): JSX.Element {
  return (
    <>
      {/* Hero Section (responsive, no external carousel needed) */}
      <section className="relative w-full overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-between">
            {/* Left Text */}
            <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-right" data-aos-duration="1500">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-700 leading-tight">
                Caring for your mind<br />
                is just as important<br />
                as caring for your body
              </h1>
              <button
                className="mt-6 w-full md:w-auto px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="1000"
              >
                Find Therapist
              </button>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-duration="1500">
              {/* Use a max width for large screens, full width on mobile */}
              <img
                src="src/assets/images/testing.jpg"
                alt="Colorful Mental Health Head"
                className="w-full max-w-md mx-auto block object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Find therapist hero section (background image with overlay / fully responsive) */}
      <section className="relative w-full">
        {/* Background Image */}
        <img
          src="src/assets/images/therapist-hero.jpg"
          alt="MindCare Background"
          className="w-full h-[50vh] md:h-[70vh] object-cover"
          loading="lazy"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-between px-4 py-10 text-center">
          {/* Heading at the Top */}
          <div className="text-gray-700 font-bold space-y-4 mt-2" data-aos="fade-down">
            <h2 className="text-2xl md:text-4xl font-bold text-purple-700">
              Empowering <span className="text-pink-500">Your Mind</span> Every Step of the Way
            </h2>
            <p className="mx-auto max-w-3xl text-sm md:text-base">
              Support that fits your life — anytime, anywhere. Start your journey to a better you, one session at a time.
              No waiting rooms. No pressure. Just care when and where you need it.
            </p>
          </div>

          {/* Middle block */}
          <div className="text-gray-700 font-bold space-y-4 mt-2" data-aos="fade-up">
            <h2 className="text-2xl md:text-4xl font-bold text-purple-700">
              Your <span className="text-pink-500">Mental Health.</span> Your Pace. Your Space.
            </h2>
            <p className="mx-auto max-w-3xl text-sm md:text-base">
              No stigma. No schedule stress. Just real support, when you need it. Talk, heal, grow — all from the comfort
              of your couch, your car, or even your chaos. Because taking care of your mind shouldn’t feel like a burden —
              it should feel like a beginning.
            </p>
          </div>

          {/* CTA Block at Bottom */}
          <div
            className="mx-auto w-full max-w-3xl bg-white/90 p-4 md:p-6 rounded-md shadow-md flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 mt-6"
            data-aos="fade-up"
          >
            <span
              className="text-black text-sm md:text-base text-center md:text-left md:w-2/3"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Want to know more about MindCare?
              <br />
              Get to know the mission behind our movement and the people making mental health more human, one session at a
              time.
            </span>
            <a href="/about" className="md:w-auto w-full text-center">
              <button
                className="bg-purple-600 text-white px-5 md:px-6 py-3 rounded hover:bg-purple-700 transition duration-300 w-full md:w-auto"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Read Our Story
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Founders Cards Section */}
      <section className="py-12 bg-gray-100">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-purple-800" data-aos="fade-up">
            Our Founders
          </h2>

          {/* Make it truly responsive: 1 / 2 / 3 / 5 columns gracefully */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-4 text-center" data-aos="zoom-in" data-aos-delay="100">
              <img
                src="src/assets/images/founder1.jpg"
                alt="Founder 1"
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                loading="lazy"
              />
              <p className="text-gray-700 italic text-sm">
                "Mental health? Not the foundation of success caffeine and panic are. Throw in a few breakdowns between
                meetings and boom: thriving."
              </p>
              <h4 className="mt-2 font-semibold text-gray-900">Mr. Shanaka Rathmalgoda</h4>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-4 text-center" data-aos="zoom-in" data-aos-delay="200">
              <img
                src="src/assets/images/founder3.jpg"
                alt="Founder 2"
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                loading="lazy"
              />
              <p className="text-gray-700 italic text-sm">
                "We firmly believe therapy should remain an exclusive club. Sorry, no entry. Unless you have a platinum
                membership, three referrals, and a verified trauma."
              </p>
              <h4 className="mt-2 font-semibold text-gray-900">Mr. Ansy Pieris</h4>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-4 text-center" data-aos="zoom-in" data-aos-delay="300">
              <img
                src="src/assets/images/founder4.jpg"
                alt="Founder 3"
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                loading="lazy"
              />
              <p className="text-gray-700 italic text-sm">
                "Technology bridging the mental health gap? Please, it can barely bridge my Wi‑Fi connection. But hey, at
                least my meditation app reminds me I’m anxious three times a day."
              </p>
              <h4 className="mt-2 font-semibold text-gray-900">Mr. Sachira Demein</h4>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-md p-4 text-center" data-aos="zoom-in" data-aos-delay="400">
              <img
                src="src/assets/images/founder2.jpg"
                alt="Founder 4"
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                loading="lazy"
              />
              <p className="text-gray-700 italic text-sm">
                "Healing starts with understanding? Nah, try denial and a good meme first. Nothing says emotional growth
                like laughing at your pain in the group chat."
              </p>
              <h4 className="mt-2 font-semibold text-gray-900">Ms. Diyanjani Jayamanne</h4>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg shadow-md p-4 text-center" data-aos="zoom-in" data-aos-delay="500">
              <img
                src="src/assets/images/blog3.avif"
                alt="Founder 5"
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                loading="lazy"
              />
              <p className="text-gray-700 italic text-sm">
                "And no, we’re not here to listen to your emotional TED Talk. Not always, anyway. Unless there’s popcorn,
                dramatic pauses, and a shocking twist ending."
              </p>
              <h4 className="mt-2 font-semibold text-gray-900">Dr. Tharushi Pathirana</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-gray-100 py-12 md:py-16 px-4">
        <div className="text-center mb-10 md:mb-12" data-aos="zoom-in" data-aos-delay="150">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800">
            Mind <span className="text-pink-500">Care</span> makes mental health support easy.
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            From finding your therapist to attending sessions, everything happens in one secure, easy-to-use platform.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white p-5 md:p-6 rounded-lg shadow-md text-center" data-aos="zoom-in" data-aos-delay="200">
            <span className="text-xs md:text-sm font-bold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">01</span>
            <h3 className="mt-3 md:mt-4 font-bold text-base md:text-lg text-purple-700">Discover Your Match</h3>
            <p className="mt-2 text-gray-600 text-xs md:text-sm">
              Browse through a diverse list of verified therapists based on your needs, preferences, and language.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-5 md:p-6 rounded-lg shadow-md text-center" data-aos="zoom-in" data-aos-delay="300">
            <span className="text-xs md:text-sm font-bold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">02</span>
            <h3 className="mt-3 md:mt-4 font-bold text-base md:text-lg text-purple-700">Pick Your Plan</h3>
            <p className="mt-2 text-gray-600 text-xs md:text-sm">
              Select a one-time session or subscribe for ongoing care flexibility that fits your journey.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-5 md:p-6 rounded-lg shadow-md text-center" data-aos="zoom-in" data-aos-delay="400">
            <span className="text-xs md:text-sm font-bold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">03</span>
            <h3 className="mt-3 md:mt-4 font-bold text-base md:text-lg text-purple-700">Book with Ease</h3>
            <p className="mt-2 text-gray-600 text-xs md:text-sm">
              Choose a time from your therapist’s calendar and confirm your appointment in seconds.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-5 md:p-6 rounded-lg shadow-md text-center" data-aos="zoom-in" data-aos-delay="500">
            <span className="text-xs md:text-sm font-bold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">04</span>
            <h3 className="mt-3 md:mt-4 font-bold text-base md:text-lg text-purple-700">Begin Your Session</h3>
            <p className="mt-2 text-gray-600 text-xs md:text-sm">
              Join a secure session with your therapist — right from the comfort of your home.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
