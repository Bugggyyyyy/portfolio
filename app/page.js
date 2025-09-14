"use client";
import Image from "next/image";
import IDCard from "../components/IDCard";
import Card from "../components/Card";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 1,
          x: "-50%", // center horizontally
          y: "-50%", // center vertically
          scale: 1,
          position: "absolute",
          top: "50%",
          left: "50%",}}
        animate={{ top: "0.5vh",   // floats a little from top
        left: "2vw",  // floats a little from left
        x: 0,
        y: 0,
        scale: 0.6,}}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
        className="absolute z-50"   // 👈 keeps Hey above cards
  style={{ top: "50%", left: "50%" }} // set position outside animation
      >
        <Image
          src="/Hey,.svg"
          alt="Hero"
          width={709}
          height={454}
          className="rounded-xl shadow-lg "
        />
      </motion.div>

      {/* Row: IDCard + Small Card */}
      <div className="pt-[45vh] flex flex-col items-center">
      <div className="flex justify-center items-start gap-5 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <IDCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Card width="328px" height="320px">
            <div className="flex flex-col items-start">
              <Card width="140px" height="50px">
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-white text-2xl">Experience</p>
                </div>
              </Card>
              <p className="text-white pt-[20px] text-xl">
                Intern – Front End Web Development (Virtual) – Edunet Foundation –
                AICTE — IBM SkillsBuild
              </p>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Big Centered Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="mt-10"
      >
        <Card width="1000px" height="250px">
          <div className="flex flex-col items-start">
            <Card width="120px" height="50px">
              <div className="flex items-center justify-center w-full h-full">
                <p className="text-white text-2xl">About</p>
              </div>
            </Card>
            <p className="text-white pt-[20px] text-xl">
              Passionate software engineer with hands-on experience in front-end
              and full-stack development, cloud computing, and DSA. Proven track
              record in hackathons and internships, building scalable,
              production-ready applications. Skilled in React, Next.js, Node.js,
              and AWS, with a strong focus on collaboration and problem-solving.
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Another Row of Cards */}
      <div className="flex flex-wrap gap-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          
        >
          <Card width="500px" height="500px">
            <div className="flex flex-col items-start">
              <Card width="150px" height="50px">
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-white text-2xl">Education</p>
                </div>
              </Card>
              <ul className="list-disc list-inside text-white pt-[20px] text-xl space-y-3">
      <li>
        <span className="font-semibold">MLR Institute of Technology</span> — Hyderabad, Telangana  
        B.Tech in Computer Science & Information Technology | Nov 2022 – May 2026  
        CGPA: 7.69
      </li>
      <li>
        <span className="font-semibold">Narayana Junior College</span> — Hyderabad, Telangana  
        MPC (Maths, Physics, Chemistry) | May 2020 – May 2022  
        Percentage: 90.6%
      </li>
      <li>
        <span className="font-semibold">Paramita Heritage School</span> — Karimnagar, Telangana  
        SSC | May 2020  
        GPA: 10
      </li>
    </ul>
              
            </div>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
          
        >
          <Card width="500px" height="500px">
            <div className="flex flex-col items-start">
              <Card width="100px" height="50px">
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-white text-2xl">Skills</p>
                </div>
              </Card>
              <ul className="list-disc list-inside text-white pt-[20px] text-lg space-y-3">
      <li>
        <span className="font-semibold text-xl">Languages:</span> Python, Java, C, JavaScript, SQL, Solidity
      </li>
      <li>
        <span className="font-semibold text-xl">Frontend:</span> ReactJS, Next.js, Redux, Flutter, HTML/CSS
      </li>
      <li>
        <span className="font-semibold text-xl">Backend:</span> NodeJS, ExpressJS, REST APIs
      </li>
      <li>
        <span className="font-semibold text-xl">Database:</span> MySQL, PostgreSQL, Firebase
      </li>
      <li>
        <span className="font-semibold text-xl">Tools & Platforms:</span> Git, GitHub, AWS, Linux, Android Studio, VS Code, IntelliJ, Webflow, Figma
      </li>
      <li>
        <span className="font-semibold text-xl">Concepts:</span> DSA, OOPS, OS, DBMS, Networking, Cloud Computing, Agile, CI/CD
      </li>
    </ul>
              
            </div>
          </Card>
        </motion.div>
      </div>
      
    </div>
  </div>
  );
}
