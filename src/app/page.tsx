import 'boxicons/css/boxicons.min.css';
import Image from "next/image";

export default function Page() {
  return (
    <div>
      {/* Introduction */}
      <div className="bg-blue-50 min-h-screen md:min-h-[82vh]">
        <div className="flex items-center justify-center md:justify-start text-3xl md:text-5xl gap-2 pt-4 px-8">
            <i className="bx bxl-baidu"></i>
            <span className="flex space-x-4">
                <span className="font-bold font-sans">PORTFOLIO</span>
                <span className="text-blue-500 font-bold font-sans">WEB</span>
            </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 px-8 lg:px-32">
          <div className="flex flex-col gap-3 lg:gap-4 font-sans font-bold text-center md:text-left pt-4 md:pt-0">
            <p className="text-3xl md:text-5xl">Hi, I am</p>
            <p className="text-5xl md:text-7xl">Hong Phong.</p>
            <p className="text-2xl md:text-4xl text-gray-500">I&rsquo;m A Web Developer</p>
            <button className="text-2xl p-[8px] bg-blue-600 w-[160px] text-white rounded-xl hover:scale-105
             hover:bg-blue-700 transition-all duration-300 will-change-transform
             mt-4 mx-auto md:ml-0">About Me</button>
          </div>
          <div className="flex justify-center">
            <Image src="/images/picture6.webp" 
               className="hover:scale-105 transition cover my-8"
               alt="Ảnh đại diện" 
               width={400} 
               height={400}
            />
          </div>
          
        </div>
      </div>

      {/* About Me */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center content-center min-h-screen md:min-h-[82vh] bg-gray-200 px-16 md:px-8 lg:px-32 gap-4 md:gap-8 lg:gap-16">
        <Image src="/images/picture8.jpg" 
              className="hover:scale-105 transition cover mx-auto lg:mx-0  pl-0 lg:pl-16 mt-8 lg:my-8" 
              alt="Ảnh đại diện"
              width={500} 
              height={500}
        />

        <div className="flex flex-col text-xl mb-4">
          <p className="text-4xl font-bold py-[28px] text-center md:text-left">About Me</p>
          <p className="pb-2">
            I am a Frontend developer passionate about building modern web interfaces and optimizing user experiences. 
            I continuously learn and improve to create smooth, refined, and user-friendly products.
          </p>
          <p className="pb-2">
            I enjoy turning complex ideas into intuitive and engaging interfaces. 
            With a keen eye for detail, I focus on performance, accessibility, and seamless interactions to enhance user satisfaction.
          </p>
          <p>Let’s create something amazing together!</p>
        </div>
      </div>


      {/* Skills */}
      <div className="min-h-screen md:min-h-[82vh] bg-gray-100">
          <div>
              <p className="font-sans font-bold text-4xl flex justify-center py-[30px] lg:py-[60px] tracking-widest"
              >S<span className="underline decoration-blue-500 underline-offset-8 decoration-4">kill</span>s</p>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 font-sans pb-4 lg:pb-0">
                  <div className="flex flex-col items-center gap-2 hover:scale-110 will-change-transform transition-all duration-200">
                      <i className="bx bxl-html5 text-8xl text-red-600"></i>
                      <p className="text-2xl">HTML5</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 hover:scale-110 will-change-transform transition-all duration-200">
                      <i className="bx bxl-css3 text-8xl text-blue-600"></i>
                      <p className="text-2xl">CSS3</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 hover:scale-110 will-change-transform transition-all duration-200">
                      <i className="bx bxl-javascript text-8xl text-yellow-600"></i>
                      <p className="text-2xl">JavaScript</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 hover:scale-110 will-change-transform transition-all duration-200">
                      <i className="bx bxl-react text-8xl text-blue-500"></i>
                      <p className="text-2xl">ReactJS</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 hover:scale-110 will-change-transform transition-all duration-200">
                      <i className="bx bxl-tailwind-css text-8xl text-blue-500"></i>
                      <p className="text-2xl">TailwindCSS</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 hover:scale-110 will-change-transform transition-all duration-200">
                      <i className="bx bxl-c-plus-plus text-8xl text-blue-600"></i>
                      <p className="text-2xl">C++</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 hover:scale-110 will-change-transform transition-all duration-200">
                      <Image src="python.svg" 
                              alt="Logo Python" 
                              width={450} 
                              height={450}                              
                              className="w-[95px] h-[95px]"
                      />
                      <p className="text-2xl">Python</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 hover:scale-110 will-change-transform transition-all duration-200">
                      <i className="bx bxl-git text-8xl text-red-600"></i>
                      <p className="text-2xl">Git</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 hover:scale-110 will-change-transform transition-all duration-200">
                      <Image src="nextjs.svg" 
                              alt="NextJS"  
                              width={450} 
                              height={450} 
                              className="w-[95px] h-[95px]"
                      />
                      <p className="text-2xl">NextJS</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 hover:scale-110 will-change-transform transition-all duration-200">
                      <i className="bx bxl-github text-8xl"></i>
                      <p className="text-2xl">Github</p>
                  </div>
              </div>
          </div>
      </div>

      {/* Project  */}
      <div className="min-h-screen md:min-h-[80vh] px-6 md:pb-10">
        <div className="font-bold text-4xl px-8 pt-8 pb-10 tracking-widest"><span className="underline decoration-blue-700 underline-offset-8 decoration-4">Proj</span>ect</div>
        <div className="shadow-[0_0_15px_5px_rgba(0,0,0,0.5)] md:shadow-none rounded-lg
                        md:grid grid-cols-5 gap-8 justify-center items-center">
          <div className="md:col-span-3">
            <a href="https://dongyongbut.com.vn/" target="_blank">
              <video className="w-full h-auto md:shadow-[0_0_15px_5px_rgba(0,0,0,0.5)]" autoPlay loop muted>
                <source src="/videos/Project.mp4" type="video/mp4"/>
              </video>
            </a>
            
          </div>
          
          <div className="md:col-span-2 p-4 flex flex-col gap-4">
            <p className="text-2xl md:text-3xl font-bold tracking-wide">Dong Y Ong But</p>
            <p className="text-xl font-sans">A website specializing in traditional medicine, providing users with access to herbal remedies and natural therapies. 
              Built with Next.js and Tailwind CSS, this project features a herbal remedy search, product ordering, online health consultations, and updates on traditional medicine news.</p>
          </div>

        </div>
      </div>

      {/* Contact  */}

      
      <div className="min-h-screen md:min-h-[82vh] bg-blue-200 grid grid-cols-1 md:grid-cols-2 items-center lg:px-1/9 mt-8">
      {/* Contact Info  */}
        <div className="flex flex-col gap-4 p-8 lg:px-[100px] xl:px-[180px] md:h-full md:pt-[70px] lg:py-[50px]">
          <p className="font-bold text-3xl md:text-4xl tracking-wider md:mt-9">Contact Info</p>
          <p className="text-lg"><span><i className='bx bxs-map'></i></span> Address: Ha Noi City, Viet Nam</p>
          <p className="text-lg"><span><i className='bx bxs-envelope'></i></span> Email: chuhongphongk25@gmail.com</p>
          <p className="text-lg"><span><i className='bx bxs-phone'></i></span> Phone: 0328.999.752</p>
        </div>

        {/* Contact Me  */}
        <div className="bg-white p-8 rounded-2xl shadow-xl  w-[430px] md:w-[90%] lg:w-[500px] m-auto lg:mt-auto mb-8 lg:mb-auto">
          <h2 className="text-4xl font-bold text-center text-blue-600">Contact Me</h2>
          <p className="text-center text-gray-500 mt-2">Let’s create something amazing together!</p>

          <form className="mt-6 space-y-4">
            
            <div className="relative">
              <input
                type="text"
                required
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 text-lg"
                placeholder="Your Name"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                required
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 py-2 text-lg"
                placeholder="Your Email"
              />
            </div>

            <div className="relative">
              <textarea
                rows={4}
                required
                className="w-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 p-2 text-lg rounded-lg resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-bold hover:bg-blue-700 transition-all duration-300 hover:scale-105 will-change-transform"
              >
              Send Message
            </button>
          </form>
        </div>
      </div>


      {/* Footer  */}
      <div className="text-gray-500 bg-gray-900 text-center py-4">
        © 2025 MyPortfolio. All rights reserved.
      </div>  
    </div>
  );
}
