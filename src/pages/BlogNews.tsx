// src/pages/BlogNews.tsx
import React, { type JSX } from 'react';

export default function BlogNews(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-500 to-cyan-200 rounded-lg p-6 mb-6">
        <h2
          className="text-2xl md:text-3xl font-bold text-purple-800 text-center"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1500"
        >
          Mental Health Blogs &amp; News
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 1 */}
        <article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="0"
          data-aos-duration="1500"
        >
          <img
            src="src/assets/images/blog1.jpg"
            alt="Mental Health Image 1"
            className="w-full h-48 object-contain bg-white"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2">
              Breaking the Stigma: Why Mental Health Matters
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Mental health is just as important as physical health, yet stigma often prevents people from seeking help.
              By normalizing mental health discussions, we create a safer space for individuals to express struggles
              without fear or shame.
            </p>
          </div>
        </article>

        {/* 2 */}
        <article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1500"
        >
          <img
            src="src/assets/images/blog2.jpg"
            alt="Mental Health Image 2"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2">Mindfulness in the Modern World</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Practicing mindfulness can help reduce anxiety, increase focus, and improve emotional regulation. In today’s
              fast-paced world, pausing to stay present is a powerful tool for overall well-being.
            </p>
          </div>
        </article>

        {/* 3 */}
        <article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          <img
            src="src/assets/images/blog3.avif"
            alt="Mental Health Image 3"
            className="w-full h-48 object-contain bg-white"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2">
              The Power of Routine in Mental Health Recovery
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Consistent daily routines provide structure and predictability, especially for those recovering from
              depression or anxiety. Small, manageable habits can create a strong foundation for emotional resilience.
            </p>
          </div>
        </article>

        {/* 4 */}
        <article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <img
            src="src/assets/images/blog4.jpg"
            alt="Mental Health Image 4"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2">
              Youth and Mental Health: The Hidden Crisis
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Adolescents face mounting academic, social, and digital pressures. Early intervention, open communication,
              and mental health education in schools are vital in supporting young minds during these formative years.
            </p>
          </div>
        </article>

        {/* 5 */}
        <article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1500"
        >
          <img
            src="src/assets/images/blog5.jpg"
            alt="Mental Health Image 5"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2">
              Digital Detox: Reclaiming Your Mental Space
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Constant screen time and social media can contribute to stress, low self-esteem, and burnout. Taking regular
              breaks from digital devices can significantly improve focus, sleep, and mental clarity.
            </p>
          </div>
        </article>

        {/* 6 */}
        <article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <img
            src="src/assets/images/blog6.jpg"
            alt="Mental Health Image 6"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2">
              Men and Mental Health: It&apos;s Okay to Ask for Help
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Cultural expectations often discourage men from expressing vulnerability. Encouraging open dialogue and
              reshaping definitions of strength can help more men access the support they need.
            </p>
          </div>
        </article>

        {/* 7 */}
        <article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1500"
        >
          <img
            src="src/assets/images/blog7.jpg"
            alt="Mental Health Image 7"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2">
              Workplace Wellness: Supporting Employee Mental Health
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              A healthy work environment includes more than just ergonomic chairs. Employers who prioritize mental
              well-being through flexible hours, counseling, and check-ins see increased productivity and reduced burnout.
            </p>
          </div>
        </article>

        {/* 8 */}
        <article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="700"
          data-aos-duration="1500"
        >
          <img
            src="src/assets/images/blog8.jpg"
            alt="Mental Health Image 8"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2">
              The Link Between Nutrition and Mental Wellness
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              What we eat affects how we feel. Diets rich in whole foods, omega-3s, and probiotics can improve mood and
              cognitive function, proving that a balanced plate supports a balanced mind.
            </p>
          </div>
        </article>

        {/* 9 */}
        <article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-duration="1500"
        >
          <img
            src="src/assets/images/blog9.jpg"
            alt="Mental Health Image 9"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2">
              Post-Pandemic Mental Health: Healing Together
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              The global pandemic disrupted lives and triggered a rise in anxiety and depression. As we move forward,
              community support and mental health services will be key to collective healing.
            </p>
          </div>
        </article>

        {/* 10 */}
        <article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="900"
          data-aos-duration="1500"
        >
          <img
            src="src/assets/images/blog10.jpg"
            alt="Mental Health Image 10"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2">
              Therapy 101: What to Expect on Your First Visit
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Starting therapy can feel intimidating, but it’s a courageous step toward self-discovery and healing.
              Therapists provide a judgment-free space to explore emotions, challenges, and goals.
            </p>
          </div>
        </article>

        {/* 11 */}
        <article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="1000"
          data-aos-duration="1500"
        >
          <img
            src="src/assets/images/blog11.jpg"
            alt="Mental Health Image 11"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2">
              The Importance of Sleep for Mental Health
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Quality sleep is essential for emotional regulation, memory, and stress management. Establishing a consistent
              sleep schedule and limiting screen time before bed can boost your mental resilience.
            </p>
          </div>
        </article>

        {/* 12 */}
        <article
          className="bg-white rounded-lg shadow-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="1100"
          data-aos-duration="1500"
        >
          <img
            src="src/assets/images/blog12.jpg"
            alt="Mental Health Image 12"
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="p-4">
            <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2">
              Art and Expression as Healing Tools
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Creative outlets like painting, writing, or music offer a way to process emotions and relieve stress.
              Expressive therapies have shown great potential in supporting those with trauma or anxiety disorders.
            </p>
          </div>
        </article>

      </div>
    </main>
  );
}
