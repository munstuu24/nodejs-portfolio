const express = require("express");
const path = require("path");

const app = express();

// ====================================
// EDIT YOUR PERSONAL INFORMATION HERE
// ====================================

const profile = {
  name: "Munachi chikeka",
  initials: "Mc",
  title: "Creative Web Developer",
  location: "Nigeria",
  email: "munachichikeka@gmail.com",

  headline: "Building digital experiences that are different.",

  introduction:
    "I'm a passionate developer who enjoys transforming ideas into beautiful, functional and responsive websites.",

  about:
    "I am a web developer interested in modern technology, creative design and solving real-world problems through code. I enjoy learning new technologies and building projects that improve my programming skills.",

  github: "https://github.com/",
  linkedin: "https://linkedin.com/",

  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Node.js",
    "Express.js",
    "EJS",
    "React",
    "Git & GitHub",
    "Responsive Design"
  ],

  projects: [
    {
      number: "01",
      title: "Cineverse",
      category: "Movie Platform",
      description:
        "A modern movie discovery website with an attractive interface, movie collections and detailed content pages.",
      technologies: ["Next.js", "CSS", "JavaScript"],
      link: "#"
    },
    {
      number: "02",
      title: "Personal Portfolio",
      category: "Web Development",
      description:
        "A responsive personal website showcasing my development skills, projects and professional information.",
      technologies: ["Node.js", "Express", "EJS"],
      link: "#"
    },
    {
      number: "03",
      title: "AI Chat Interface",
      category: "JavaScript Project",
      description:
        "An interactive chatbot interface built to practise JavaScript, DOM manipulation and user interaction.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#"
    }
  ]
};

// ====================================
// EXPRESS CONFIGURATION
// ====================================

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { profile });
});

app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

// Run locally
if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(
      `Portfolio running at http://localhost:${PORT}`
    );
  });
}

// Export for Vercel
module.exports = app;  