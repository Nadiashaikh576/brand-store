import React from 'react'

const About = () => {
  return (
    <div className='w-full bg-gradient-to-r from-yellow-500 to-gray-700 py-16'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8'>
        {/* Profile Section */}
        <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6'>
          {/* <img 
            src="/images/dp.jpeg" 
            alt="Author Images"
            className='w-32 h-32 rounded-full object-cover border-4 border-[#2A254B] transform transition duration-500 hover:scale-110' 
          /> */}
          <div>
            <h3 className='text-3xl font-extrabold text-[#2A254B]'>
              Nadia Shaikh
            </h3>
            <p className='text-lg text-slate-500 mt-2'>
              Programmar | Frontend Web Developer
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <p className='mt-6 text-xl text-gray-800 leading-relaxed'>
 I&apos;m Nadia Shaikh, a passionate front-end web developer and creative thinker with a flair for crafting engaging digital experiences. With a strong background in web development and a love for clean, efficient code, I specialize in building stunning, user-friendly websites that captivate audiences and drive results.
        </p>

        
        {/* Animation */}
        <div className='mt-10'>
          <h4 className='text-2xl text-[#2A254B] font-bold mb-4'>
            Let&apos;s Connect and Create Amazing Things Together!
          </h4>
          <p className='text-lg text-gray-700'>
          Have a project idea or just want to say hello? Feel free to reach out — I&apos;d love to collaborate and create something amazing with you!


          </p>
        </div>
      </div>
    </div>
  );
}

export default About;