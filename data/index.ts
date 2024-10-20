import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about",  },
    { name: "Projects", link: "#project" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "Strong Mathematical Foundation and Analytical Skills",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/math.svg", // Image representing mathematical concepts
      spareImg: "", // Added spare image
    },
    {
      id: 2,
      title: "Commitment to Client Collaboration and Communication",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "w-full h-auto",
      titleClassName: "justify-start",
      img: "", 
      spareImg: "", 
    },
    {
      id: 3,
      title: "Continuous Improvement of My Tech Stack",
      description: "I am dedicated to expanding my technical expertise by continuously improving my tech stack.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "w-full h-auto",
      titleClassName: "justify-center",
      img: "", // Image representing tech stack
      spareImg: "", // Added spare image
    },
    {
      id: 4,
      title: "Passionate Tech Enthusiast with a Focus on Development",
      description: "As a tech enthusiast, I am driven by a desire to innovate and improve my development skills.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "w-full h-auto",
      titleClassName: "justify-start",
      img: "", // Image representing tech enthusiasm
      spareImg: "", // Added spare image
    },
  
    {
      id: 5,
      title: "Currently building a Financial Assistant IA",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Get To Know Me More",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "A Landing Page For A Opinion Sharing Platform",
      des: "Share You Opinion With This Simple React Typescript Platform .",
      img: "/pro1.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "",
    },
    {
      id: 2,
      title: "ADHD Task Manager",
      des: "Simplify your Every Day Tasks experience with FocusFuse. Seamlessly connect with colleagues and friends.",
      img: "/pro2.png",
      iconLists: [ "/tail.svg", "/ts.svg", "/git.svg", "/c.svg"],
      link: "",
    },
    {
      id: 3,
      title: "A Process/Asset Management App with React js and Flask",
      des: "Process/Asset Management App using React.js on the frontend and Flask for the backend. This app will allow users to manage assets related to processes, monitor risks, and visualize related data.",
      img: "/asset.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/flask.svg"],
      link: "",
    },
   
  ];
  
  export const testimonials = [
    {
      quote:
        "Anis is a talented and disciplined computer science student with a passion for learning and problem-solving. His quick ability to master complex concepts, coupled with his creativity and teamwork, makes him a valuable asset in both academic and personal settings. I've seen his exceptional skills firsthand in hackathons and daily life, where he consistently delivers high-quality work and fosters a positive environment. Anis is highly recommended for any team or project looking for a motivated and collaborative individual.",
      name: "Talel Galai",
      title: "Computer science student @ ISIMA | Full Stack Developer",
      img: "/talel.jpeg",
    },
    {
      quote:
        "I’ve had the pleasure of knowing Anis for over six years. We started as study partners, working together to earn our baccalaureate diploma, and his analytical mindset has always stood out. Anis has a remarkable ability to break down complex concepts,  never turning down a request for help Throughout the years, we’ve collaborated on numerous projects, starting from high school and continuing to this day. Anis has been instrumental in helping me develop my skills in computer science and data. His dedication to teamwork is unmatched—he is serious when the situation calls for it, yet knows how to keep the atmosphere light with his sense of humor. I couldn’t ask for a better collaborator and friend.",
      name: "Ela Boudaya",
      title: "Mathematics and Computer Science Student Aspiring Data Scientist",
      img: "/ELA.jpg",
    },
 
    
  ];
  
  export const companies = [
    {
      id: 1,
      name: "Azure",
      img: "/azure.svg",
      nameImg: "/azurename.svg",
    },
    {
      id: 2,
      name: "react",
      img: "/re.svg",
      nameImg: "/reactname.png",
    },
    {
      id: 3,
      name: "tailwind",
      img: "/tail.svg",
      nameImg: "/tailName1.png",
    },
    {
      id: 4,
      name: "typescript",
      img: "/ts.svg",
      nameImg: "/ts1.png",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Developer Intern at Tunis Stock Exchange",
      desc: "Tunis Stock Exchange provided me with invaluable experience in applying my technical skills to realworld challenges in financial markets. Developing the web application for processes, risks, and assets management not only contributed to BVMT’s operational efficiency but also enriched my understanding of the complexities and importance of financial market infrastructure.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "3rd place  @ CodingMoonChallenge-Microsoft",
      desc: "Collaborated with a team to develop an e-commerce website integrated with Open Banking API. Presented innovative solutions to streamline financial transactions and enhance user experience.",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "2nd Place @ Youth Speak Hackathon",
      desc: "Implemented innovative strategies to tackle challenges related to water management and economic empowerment.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "AZ-900 Certification",
      desc: "Earned the Azure Fundamentals certification from Microsoft",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link : "https://github.com/AnisTT"
    },
    
    {
      id: 2,
      img: "/link.svg",
      link : "https://in/anis-tarhouni-trabelsi-3710b4269/"
    },
  ];