const projectsData = [
    {
        id:"Scribble",
        image:"./images/scribble.svg",
        title: "Scribble",
        tech: "Built using NextJS, Konva.js, TailwindCSS",
        description: "Interactive Whiteboard Application.(Canvas based)",
        url: "https://github.com/Sahith-03/Scribble"
    },
    {
        id:"Forms",
        image:"./images/forms.svg",
        title: "Dynamic Forms",
        tech: "Built using Sveltekit,MySQL, PrismaORM, Node.js,Express.js",
        description: "Create online forms and surveys with multiple question types.",
        url: "https://github.com/Sahith-03/Forms"
    },
    {
        id: "eSign",
        image: "./images/signature.svg",
        title: "eSignature Maker",
        tech: "Built using JavaScript,CSS,HTML",
        description: "Draw,edit,download your e-signature. Based on CanvasAPI",
        url: "https://sahith-03.github.io/e-Signature/"
    },
    {
        id:"Github",
        image:"./images/github.svg",
        title: "Github Profile Fetcher",
        tech: "Built using Angular, TailwindCSS, Github REST API",
        description: "Fetches Github details like bio,repositories,tech used for each project of a user",
        url: "https://github-profile-fetcher-nine.vercel.app/"
    },
    {
        id: "Pong",
        image: "./images/pong.svg",
        title: "Pong Game",
        tech: "Built using Python",
        description: "Multiplayer Pong game based on turtle module and OOPs concept",
        url: "https://github.com/Sahith-03/Pong-Game"
    },
    {
        id: "Snake",
        image: "./images/snake.svg",
        title: "Snake Game",
        tech: "Built using Python",
        description: "Classic snake game based on turtle module and OOPs concept",
        url: "https://github.com/Sahith-03/Snake-Game/"
    },
    {
      id: "Login",
      image: "./images/Auth.svg",
      title: "Login-Signup Page",
      tech: "Built using NextJS, Firebase, TailwindCSS",
      description: "Allows users to login and signup using GoogleAuth,Email/Password",
      url: "https://authentication-sahith-03s-projects.vercel.app/"
    },
    {
      id: "dict",
      image: "./images/dictionary.svg",
      title: "Dictionary",
      tech: "Built using HTML,CSS,JavaScript.",
      description: "Uses real-time data as Free Dictionary API is used",
      url: "https://sahith-03.github.io/Dictionary/"
    },
    {
      id: "drum",
      image: "./images/drum-icon.svg",
      title: "Drum-Kit",
      tech: "Built using HTML,CSS,JavaScript.",
      description: "Allows users to play drum sounds by clicking on buttons.",
      url: "https://sahith-03.github.io/Drum-Kit/"
    },
    {
      id: "Leave-Pred",
      image: "./images/avatar-icon.svg",
      title: "Leave Prediction",
      tech: "Built using Pandas,Seaborn,Scikit-learn libraries of Python.",
      description: "I predicted student leave based on date, nearby festival, weekend proximity, distance from university, and leave option in the given data.",
      url: "https://colab.research.google.com/drive/12jNYTGaNeJ4tLRnITweQDOlL5KdTyU9W#scrollTo=e3ccd219"
    }
];
  
// Function to generate HTML for projects
function generateProjectsHTML() {
    const projectsContainer = document.querySelector('.projects');
    
    projectsData.forEach(project => {
      const projectHTML = `
        <div id="${project.id}" class="project" onclick="window.open('${project.url}', '_blank')">
          <img src="${project.image}" alt="${project.title} icon">
          <div>
            <h2>${project.title}</h2>
            <p><span>${project.tech}</span><br>
              ${project.description}
            </p>
          </div>
          <img src="./images/arrow.svg" alt="" class="arrow">
        </div>
      `;
      projectsContainer.innerHTML += projectHTML;
    });
}
  
document.addEventListener('DOMContentLoaded', generateProjectsHTML);