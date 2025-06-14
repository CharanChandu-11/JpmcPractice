import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'Empowering Through Education',
    image: 'https://blog.abroaderview.org/wp-content/uploads/2023/07/education-empowering-communities-1024x574.png',
    excerpt: 'Discover how Bhumi’s education programs are transforming the lives of children across India through volunteer-led initiatives.',
    date: 'June 1, 2025',
  },
  {
    title: 'Planting a Greener Future',
    image: 'https://tse1.mm.bing.net/th?id=OIP.TNtKzPEx0pOpYfW73CZmaAHaE7&pid=Api&P=0&h=180',
    excerpt: 'Read about our recent environmental drives, from massive plantation programs to eco-awareness campaigns.',
    date: 'May 20, 2025',
  },
  {
    title: 'Youth Driving Civic Change',
    image: 'https://tse2.mm.bing.net/th?id=OIP.3sYnY2Sx-8lGFW6isknPjAHaEM&pid=Api&P=0&h=180',
    excerpt: 'Explore how youth volunteers are leading civic initiatives and improving public infrastructure in their communities.',
    date: 'May 10, 2025',
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
  }),
};

function Blogs() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 bg-gradient-to-tr from-white via-green-50 to-white">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-orange-600 drop-shadow-md"
        >
          Our Blog
        </motion.h1>
        <p className="text-lg text-gray-600 mt-4 max-w-xl mx-auto">
          Stay updated with stories, impact reports, and volunteer experiences from Bhumi’s initiatives.
        </p>
      </div>

      <div className="flex flex-col space-y-20 max-w-5xl mx-auto">
        {blogPosts.map((post, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-2xl overflow-hidden transition-all duration-300"
          >
            {/* Image on the left */}
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full md:w-1/2 h-64 object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />

            {/* Content on the right */}
            <div className="w-full md:w-1/2 p-6 text-left">
              <h3 className="text-2xl font-semibold text-green-700 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{post.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
