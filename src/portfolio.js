/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji"

const illustration = {
  animated: true, // set to false to use static SVG
}

const greeting = {
  username: "Haejin Green",
  title: "Hi all, I'm Haejin",
  subTitle: emoji(
    "Self-motivated learner who has passionate to become a devloper. \
    A student of software engineering at Kenzie Academy, fast learner, detail-oriented person who is ready to change a journey to tech industry.\
    Wiling to develop my experience with new skill"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1a6MCVLiO0VoOWUQCQ5GaWpS3ubgCCW3mi8Jg3YG38Rk/edit#",
  displayGreeting: true, // Set false to hide this section, defaults to true
}

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/green0930",
  linkedin: "https://www.linkedin.com/in/haejin-green-08ba5515b/",
  gmail: "clee8501@gmail.com",
  gitlab: "https://gitlab.com/green0930",
  facebook: "https://www.facebook.com/haejin.lee.7528/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: "https://www.instagram.com/hgreen_mom/",
  twitter: "https://twitter.com/chloelee85",
  display: true, // Set true to display this section, defaults to false
}

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "efficient Full Stack Software developer who wants to learn all tech skills",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA )"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Digital Ocean"
    ),
    emoji("⚡ Develop fully functional backend and database systems"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "non-sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
}

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Kenzie Academy",
      logo: require("./assets/images/kenzielogo.webp"),
      subHeader: "Full-Stack Software Engineering Program",
      duration: "July 2020 - Present(Graduate on July 2021)",
      desc: "Project based program to get cerify as a software engineer",
      descBullets: [
        "Front-End: HTML/CSS/JS/MERN STACK",
        "Back-End: PYTHON/DJANGO",
      ],
    },
    {
      schoolName: "Dankook University in South Korea",
      logo: require("./assets/images/dkulogo.png"),
      subHeader: "Bachelor of Art",
      duration: "March 2003 - Feburary 2008",
      desc: "Major: English Literature",
    },
  ],
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
}

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Opertation Manager",
      company: "Samho Tour",
      companylogo: require("./assets/images/samhologo.webp"),
      date: "July 2018 – March 2020",
      desc:
        "Manage a merchandise of $5M+ of tour programs in booked revenue per Quarter across Asia(Korean)clients.",
      descBullets: ["Management", "Organization", "Estimated", "Develpoment"],
    },
    {
      role: "Assistant General Manager",
      company: "Joun World Travel",
      companylogo: require("./assets/images/jounlogo.webp"),
      date: "Feb 2017 – June 2018",
      desc:
        "Responsible for communicating with executives, internal team and all external business contact with professionalism",
    },
    {
      role: "Operation Manager",
      company: "Samho Tour",
      companylogo: require("./assets/images/samhologo.webp"),
      date: "August 2012 – January 2017",
      desc:
        "Estimated quotation, assisted in revenue tracking date entry and provided marketing support",
    },
  ],
}

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "green0930", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
}

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Capston project with MERN Stack at Kenzie Academy",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Omni Cloud",
      projectDesc:
        "Social App for any people who has own passion of their life",
      footerLink: [
        {
          name: "Omni Cloud",
          url: "fa",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
}

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "",
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "",
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "",
    //     },
    //   ],
    // },
    {
      title: "Complete Python Developer 2021, Zero To Mastery",
      subtitle: " Completed Certification Python from Zero To Mastery Academy",
      image: require("./assets/images/zmtlogo.png"),
      footerLink: [
        {
          name: "Certificate Of Completion",
          url:
            "https://www.udemy.com/certificate/UC-48ae985f-384d-4004-8e51-3796ad884375/",
        },
      ],
    },

    {
      title: "Front-end Web development",
      subtitle:
        "Completed Certifcation from Kenzie Academy for Front-end Web Development",
      image: require("./assets/images/kenzielogo.webp"),
      footerLink: [
        {
          name: "Certificate of Front-End Web Development",
          url:
            "https://drive.google.com/file/d/1tQ11Wk5-ffsoNcrepwgKugGoWOKOvAyh/view?usp=sharing",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
}

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
}

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
}

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
}

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "CONTACT ME AND HELP ME ACHIEVE MY GOALS AS A SOFTWARE DEVELOPER.",
  number: "(213) 265 6609",
  email_address: "atom82@hotmail.com",
}

// Twitter Section

const twitterDetails = {
  userName: "chloelee85", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
}

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
}
