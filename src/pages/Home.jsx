// import React, { useRef } from 'react';
// import Footer from './Footer';
// import Header from './Header';

// const Home = () => {
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const contactRef = useRef(null);
//   const workRef = useRef(null);
//   const involvedRef = useRef(null);

//   const scrollToSection = (ref) => {
//     if (ref?.current) {
//       window.scrollTo({
//         top: ref.current.offsetTop - 80,
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <>
//       <Header
//         scrollToSection={scrollToSection}
//         homeRef={homeRef}
//         aboutRef={aboutRef}
//         contactRef={contactRef}
//         workRef={workRef}
//         involvedRef={involvedRef}
//       />

//       {/* Home Section */}
//       <section
//         ref={homeRef}
//         className="pt-24 min-h-screen bg-green-50 flex items-center justify-center px-4"
//       >
//         <div className="text-center max-w-3xl">
//           <h2 className="text-5xl font-bold text-orange-600 mb-4">Together, We Can Make a Difference</h2>
//           <p className="text-lg text-gray-700">
//             Bhumi empowers youth and volunteers to build a better India through education,
//             environment, and equality initiatives.
//           </p>
//         </div>
//       </section>

//       {/* About Us */}
//       <section
//         ref={aboutRef}
//         className="py-32 px-6 bg-white text-center border-t border-orange-100"
//       >
//         <h2 className="text-4xl font-semibold text-green-700 mb-6">About Us</h2>
//         <p className="text-gray-700 text-lg max-w-3xl mx-auto">
//           Bhumi is one of India’s largest youth volunteering organisations.
//           Through consistent efforts, we aim to bring about change in the fields of education,
//           environment, and civic welfare. With over 20,000 volunteers nationwide, our impact is growing every year.
//         </p>
//       </section>

//       {/* Our Work */}
//       <section
//         ref={workRef}
//         className="py-32 px-6 bg-gray-100 text-center"
//       >
//         <h2 className="text-4xl font-semibold text-orange-600 mb-10">Our Work</h2>
//         <div className="flex flex-wrap justify-center gap-10">
//           {[
//             {
//               title: 'Education for All',
//               image: 'https://static.vecteezy.com/system/resources/previews/000/462/348/original/education-tree-concept-vector.jpg',
//               desc: 'We provide quality education to underprivileged children through community teaching programs.',
//             },
//             {
//               title: 'Environmental Action',
//               image: 'https://tse4.mm.bing.net/th?id=OIP.qRNYEKRNZq9EOiFN1kBswAHaE7&pid=Api&P=0&h=180',
//               desc: 'Bhumi leads green initiatives including tree planting, waste management, and eco-awareness drives.',
//             },
//             {
//               title: 'Civic Engagement',
//               image: 'https://tse3.mm.bing.net/th?id=OIP.smQsGBJmlBKQ4PSIE2Vv9gHaEK&pid=Api&P=0&h=180',
//               desc: 'We run cleanliness campaigns, infrastructure improvement drives, and public engagement programs.',
//             },
//           ].map(({ title, image, desc }, i) => (
//             <div key={i} className="bg-white rounded-xl shadow-md p-6 w-80 text-left">
//               <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />
//               <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
//               <p className="text-gray-600">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Get Involved */}
//       <section
//         ref={involvedRef}
//         className="py-32 px-6 bg-white text-center"
//       >
//         <h2 className="text-4xl font-semibold text-green-700 mb-10">Get Involved</h2>
//         <div className="flex flex-wrap justify-center gap-10">
//           {[
//             {
//               title: 'Volunteer',
//               image: 'https://tse4.mm.bing.net/th?id=OIP.SM5oNf-hgxIeYxDVpIq2mQHaE8&pid=Api&P=0&h=180',
//               desc: 'Join our team of passionate volunteers and contribute to education, environment, and civic change.',
//             },
//             {
//               title: 'Donate',
//               image: 'https://tse2.mm.bing.net/th?id=OIP.gIU1qbjkwcNNCkJ6bd9-aAHaHf&pid=Api&P=0&h=180',
//               desc: 'Support our causes financially. Every contribution brings us closer to a better tomorrow.',
//             },
//             {
//               title: 'Partner With Us',
//               image: 'https://tse3.mm.bing.net/th?id=OIP.SrQgmN7npCm4SfwXCiFW9QHaE8&pid=Api&P=0&h=180',
//               desc: 'We collaborate with institutions and corporates to amplify our impact. Partner with Bhumi today.',
//             },
//           ].map(({ title, image, desc }, i) => (
//             <div key={i} className="bg-gray-100 rounded-xl shadow-md p-6 w-80 text-left">
//               <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />
//               <h3 className="text-xl font-semibold text-orange-600 mb-2">{title}</h3>
//               <p className="text-gray-700">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section
//         ref={contactRef}
//         className="py-32 px-6 bg-green-50 text-center border-t border-green-200"
//       >
//         <h2 className="text-4xl font-semibold text-orange-600 mb-6">Contact Us</h2>
//         <p className="text-gray-700 text-lg mb-10">
//           Reach out to join our mission or collaborate with us!
//         </p>
//         <div className="flex flex-wrap justify-center gap-10">
//           {[
//             { title: '📞 Phone', info: '+91 90000 12345' },
//             { title: '📧 Email', info: 'contact@bhumi.ngo' },
//             { title: '📍 Location', info: 'Chennai / Hyderabad, India' },
//           ].map(({ title, info }, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 w-64"
//             >
//               <h4 className="text-lg font-semibold mb-2 text-green-800">{title}</h4>
//               <p className="text-gray-600">{info}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default Home;
import React, { useRef } from 'react';
import Footer from './Footer';
import Header from './Header';
import { motion } from 'framer-motion';

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const workRef = useRef(null);
  const involvedRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref?.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        workRef={workRef}
        involvedRef={involvedRef}
      />

      {/* Home Section */}
      <section
        ref={homeRef}
        className="pt-32 min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-4"
      >
        <motion.div
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-orange-600 mb-6 drop-shadow-sm">Together, We Can Make a Difference</h2>
          <p className="text-lg text-gray-700">
            Bhumi empowers youth and volunteers to build a better India through education,
            environment, and equality initiatives.
          </p>
        </motion.div>
      </section>

      {/* About Us */}
      <section
        ref={aboutRef}
        className="py-32 px-6 bg-white text-center border-t border-orange-100"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-green-700 mb-6">About Us</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Bhumi is one of India’s largest youth volunteering organisations. Through consistent efforts,
            we aim to bring about change in the fields of education, environment, and civic welfare.
            With over 20,000 volunteers nationwide, our impact is growing every year.
          </p>
        </motion.div>
      </section>

      {/* Our Work */}
      <section
        ref={workRef}
        className="py-32 px-6 bg-gray-50 text-center"
      >
        <h2 className="text-4xl font-semibold text-orange-600 mb-12">Our Work</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[{
            title: 'Education for All',
            image: 'https://static.vecteezy.com/system/resources/previews/000/462/348/original/education-tree-concept-vector.jpg',
            desc: 'We provide quality education to underprivileged children through community teaching programs.',
          }, {
            title: 'Environmental Action',
            image: 'https://tse4.mm.bing.net/th?id=OIP.qRNYEKRNZq9EOiFN1kBswAHaE7&pid=Api&P=0&h=180',
            desc: 'Bhumi leads green initiatives including tree planting, waste management, and eco-awareness drives.',
          }, {
            title: 'Civic Engagement',
            image: 'https://tse3.mm.bing.net/th?id=OIP.smQsGBJmlBKQ4PSIE2Vv9gHaEK&pid=Api&P=0&h=180',
            desc: 'We run cleanliness campaigns, infrastructure improvement drives, and public engagement programs.',
          }].map(({ title, image, desc }, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-xl p-6 w-80 text-left border border-gray-200 hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4 shadow-md" />
              <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Get Involved */}
      <section
        ref={involvedRef}
        className="py-32 px-6 bg-white text-center"
      >
        <h2 className="text-4xl font-semibold text-green-700 mb-12">Get Involved</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[{
            title: 'Volunteer',
            image: 'https://tse4.mm.bing.net/th?id=OIP.SM5oNf-hgxIeYxDVpIq2mQHaE8&pid=Api&P=0&h=180',
            desc: 'Join our team of passionate volunteers and contribute to education, environment, and civic change.',
          }, {
            title: 'Donate',
            image: 'https://tse2.mm.bing.net/th?id=OIP.gIU1qbjkwcNNCkJ6bd9-aAHaHf&pid=Api&P=0&h=180',
            desc: 'Support our causes financially. Every contribution brings us closer to a better tomorrow.',
          }, {
            title: 'Partner With Us',
            image: 'https://tse3.mm.bing.net/th?id=OIP.SrQgmN7npCm4SfwXCiFW9QHaE8&pid=Api&P=0&h=180',
            desc: 'We collaborate with institutions and corporates to amplify our impact. Partner with Bhumi today.',
          }].map(({ title, image, desc }, i) => (
            <motion.div
              key={i}
              className="bg-green-50 rounded-xl shadow-xl p-6 w-80 text-left hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4 shadow-md" />
              <h3 className="text-xl font-semibold text-orange-600 mb-2">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="py-32 px-6 bg-green-100 text-center border-t border-green-300"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-semibold text-orange-600 mb-6">Contact Us</h2>
          <p className="text-gray-700 text-lg mb-10">
            Reach out to join our mission or collaborate with us!
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-10">
          {[{
            title: '📞 Phone', info: '+91 90000 12345'
          }, {
            title: '📧 Email', info: 'contact@bhumi.ngo'
          }, {
            title: '📍 Location', info: 'Chennai / Hyderabad, India'
          }].map(({ title, info }, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 w-64"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-2 text-green-800">{title}</h4>
              <p className="text-gray-600">{info}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;