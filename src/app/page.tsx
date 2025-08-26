import ThemeToggle from "./ThemeToggle";

export default function Page() {
  return (
  <div className="max-w-screen-lg mx-auto py-8 px-4 sm:px-8 flex flex-col gap-12 text-[#1c1c1c]">
      {/* About Me */}
      <section id="about" className="flex justify-between items-center gap-8 text-center">
  <div className="flex flex-col items-start">
    <h1 className="text-5xl font-extrabold text-[#1c1c1c] mb-2">Aniketh Bharadwaj</h1>
    <p className="text-xl text-[#1c1c1c]">Test Engineering @ Honeywell | MSCS @ Georgia Institute of Technology</p>
    <div className="flex gap-4 mt-4">
      <a href="mailto:aniketh.bharadwaj@gmail.com" className="text-[#1c1c1c] hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12 13.5l-12-9h24l-12 9zm0 2.5l-12-9v12h24v-12l-12 9z" />
        </svg>
      </a>
      <a href="https://github.com/anikbharadwaj129" className="text-[#1c1c1c] hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M12 .5c-6.6 0-12 5.4-12 12 0 5.3 3.4 9.8 8.1 11.4.6.1.8-.3.8-.6v-2.3c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 1.6-.7.1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.3.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.4-2.7 5.4-5.3 5.7.4.3.7.9.7 1.8v2.7c0 .3.2.7.8.6 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.4-12-12-12z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/aniketh-bharadwaj/" className="text-[#1c1c1c] hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M22.2 0h-20.4c-1 0-1.8.8-1.8 1.8v20.4c0 1 .8 1.8 1.8 1.8h20.4c1 0 1.8-.8 1.8-1.8v-20.4c0-1-.8-1.8-1.8-1.8zm-14.7 20.4h-3.6v-10.8h3.6v10.8zm-1.8-12.3c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1 2.1.9 2.1 2.1-.9 2.1-2.1 2.1zm14.7 12.3h-3.6v-5.4c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.2-.1.2-.1.5-.1.8v5.6h-3.6v-10.8h3.6v1.5c.5-.8 1.3-1.5 2.7-1.5 2 0 3.3 1.3 3.3 4.1v6.7z" />
        </svg>
      </a>
    </div>
  </div>
  <img
    src="/Bharadwaj_Aniketh.jpg"
    alt="Aniketh Bharadwaj"
    className="w-[200px] h-[200px] rounded-full object-cover object-top"
  />
</section>

      {/* Description */}
      <section id="description">
  <h2 className="text-2xl font-semibold mb-6 -mt-6 text-[#1c1c1c] underline">About Me</h2>
  <p className="mb-4 text-[#1c1c1c]">
    Hey! I'm Aniketh Bharadwaj. I'm a Software Engineer focused on Systems, Test, and Automation Engineering.
  </p>
  <p className="mb-4 text-[#1c1c1c]">
    I graduated with a Bachelor of Science in Electrical Engineering from Texas A&M University and am currently pursuing a Master of Science in Computer Science at Georgia Tech, specializing in Artificial Intelligence.
  </p>
  <p className="mb-4 text-[#1c1c1c]">
    I'm passionate about System and Process automation, CI/CD pipelines, and increasing cost savings and efficiency through Software Engineering.
  </p>
  <p className="mb-4 text-[#1c1c1c]">
    I currently work as a Software Test Engineer at <a href="https://www.kcnsc.doe.gov/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-800">Honeywell</a>, focusing on automating test processes and developing robust testing frameworks to ensure product quality and reliability.
    Previously, I interned at <a href="https://www.tesla.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-800">Tesla</a> and <a href="https://www.kcnsc.doe.gov/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-800">Honeywell</a>, where I contributed to various projects involving real-time monitoring dashboards, automation scripts, and modernizing legacy systems.
  </p>
  <p className="mb-4 text-[#1c1c1c]">
    You can find my <a href="/Aniketh_Bharadwaj_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-800">resume</a> here, and feel free to reach out via <a href="mailto:aniketh.bharadwaj@gmail.com" className="text-orange-600 underline hover:text-orange-800">email</a> or <a href="https://www.linkedin.com/in/aniketh-bharadwaj/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-800">LinkedIn</a>!
  </p>
  <hr className="border-t border-dotted border-black-300 mt-8" />
</section>
      <section id="experience">
  <h2 className="text-2xl font-semibold mb-6 -mt-6 text-[#1c1c1c] underline">Experience</h2>
  <ul className="space-y-8">
    <li>
      <h3 className="text-xl font-bold">Honeywell</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between">
            <p className="italic">Software Engineer I</p>
            <p className="text-black-500">February 2025 - Present</p>
          </div>
          <p className="text-gray-600">Led automation initiatives and deployed FPGA drivers in C#/.NET, streamlining cross-department systems and driving $45K+ annual savings while accelerating hardware–software integration.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">C#</span>
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">.NET</span>
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">FPGA</span>
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">Automation</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="italic">Software Engineering Intern III</p>
            <p className="text-black-500">June 2024 - August 2024</p>
          </div>
          <p className="text-gray-600">Engineered and integrated a C# application for IVI-compatible instruments, reducing test station qualification time by 25% while ensuring backwards compatibility and enabling modular CI/CD maintenance.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">C#</span>
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">IVI</span>
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">CI/CD</span>
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">Instrumentation</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="italic">Software Engineering Intern II</p>
            <p className="text-black-500">June 2023 - August 2023</p>
          </div>
          <p className="text-gray-600">Developed and modernized a Temperature Chamber interface by converting legacy Visual Basic code to a streamlined C#/.NET solution, delivering cross-functional accessibility and improved code quality through a custom installer and QA plan.</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">C#</span>
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">Visual Basic</span>
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">QA</span>
            <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">Installer</span>
          </div>
        </div>
      </div>
    </li>
    <li>
      <h3 className="text-xl font-bold">Tesla</h3>
      <div className="flex justify-between">
        <p className="italic">Software Engineering Intern</p>
        <p className="text-black-500">October 2022 - January 2023</p>
      </div>
      <p className="text-gray-600">Designed and deployed real-time monitoring dashboards and automation scripts using Python, InfluxDB, and Grafana, streamlining energy storage test station operations, enabling cross-division scalability, and integrating live alerts via Microsoft Teams.</p>
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">Python</span>
        <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">InfluxDB</span>
        <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">Grafana</span>
        <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">Automation</span>
      </div>
    </li>
  </ul>
  <hr className="border-t border-dotted border-black-300 mt-8" />
</section>

    {/* Projects */}
      <section id="projects">
  <h2 className="text-2xl font-semibold mb-6 -mt-6 text-[#1c1c1c] underline">Projects</h2>
        <div className="space-y-6">
          
            <h3 className="text-xl font-bold mb-2">Crop D.O.C</h3>
            <div className="space-y-4">
              <p className="text-gray-600">Developed Crop D.O.C., a full-stack mobile application using React Native, Firebase, and Flask that enables farmers to upload crop images and receive instant AI-based disease diagnoses. The model achieved a 95% accuracy rate, providing reliable insights for real-world agricultural use. Integrated Firebase Storage and Firestore to securely manage user-submitted images, custom crop names, and geolocation metadata, ensuring both scalability and data integrity.</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">React Native</span>
                <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">Python</span>
                <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">Flask</span>
                <span className="bg-gray-200 dark:bg-gray-800 px-3 py-1 rounded text-white text-sm">Firebase</span>
              </div>
            </div>
          
          {/* Add more projects as needed */}
        </div>
        <hr className="border-t border-dotted border-black-300 mt-8" />
      </section>

      {/* Contact */}
<section id="contact">
  <h2 className="text-2xl font-semibold mb-6 -mt-6 text-[#1c1c1c] underline">Contact</h2>
  <p className="mb-4">Feel free to reach out to me via <a href="mailto:aniketh.bharadwaj@gmail.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-800">email</a> or connect with me on <a href="https://www.linkedin.com/in/aniketh-bharadwaj/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline hover:text-orange-800">LinkedIn</a>!</p>
  <div className="flex justify-center gap-4">
  </div>
</section>
<footer className="-mt-2 text-center text-sm text-gray-500">
  Created by Aniketh Bharadwaj using Next.js and Tailwind CSS. 2025.
</footer>
    </div>
  );
}