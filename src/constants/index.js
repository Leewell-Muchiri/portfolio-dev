import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    // mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    shuleni,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Engineer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "Ruby",
    //   icon: ruby,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
   
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Code City",
      date: "March 2023 - April 2023",
      points: [
        "Developing and maintaining web applications using React.js and Ruby on Rails.",
        "Collaborating with a team to create high-quality educational platform",
        "Implementing responsive dashboard for both the educators and the students.",
        "Implementing a postgresql as the database for the project.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "My-Duka",
      date: "Jan 2023 - Jan 2023",
      points: [
        "Developing a web app using React.js and sinatra.",
        "Collaborating with a team to offer simple app achieving desired functionality.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but the Code-city team proved me wrong.",
      name: "Leila Jean",
      designation: "Chief Engineer",
      company: "WellCent io",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Shuleni",
      description:
        "Web-based platform for schools.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ruby",
          color: "red-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: shuleni,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };