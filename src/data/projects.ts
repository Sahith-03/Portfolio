export interface Project {
    id: string;
    image: string;
    title: string;
    tech: string;
    description: string;
    url: string;
}

export const projectsData: Project[] = [
    {
        id: "auth",
        image: "",
        title: "Authentication",
        tech: "Python, FastAPI",
        description: "Authentication System using FastAPI and JWT",
        url: "https://github.com/Sahith-03/fastapi-auth-service"
    },
    {
        id: "jam",
        image: "",
        title: "Browser Jam",
        tech: "Node.js, Express, PostgreSQL, Socket.IO",
        description: "An extension that turns any webpage into a real-time collaborative workspace for shared browsing, highlighting, and interaction.",
        url: "https://github.com/Sahith-03/Browser-Jam"
    },
    {
        id: "broadcast-server",
        image: "",
        title: "Broadcast-Server",
        tech: "Spring Boot, Spring WebSocket",
        description: "A simple yet powerful real-time broadcast server built with Spring Boot and WebSockets.",
        url: "https://github.com/Sahith-03/Broadcast-Server"
    },
    {
        id: "Scribble",
        image: "./images/scribble.svg",
        title: "Scribble",
        tech: "NextJS, Konva.js, TailwindCSS",
        description: "Interactive Whiteboard Application.(Canvas based)",
        url: "https://github.com/Sahith-03/Scribble"
    },
    {
        id: "Forms",
        image: "./images/forms.svg",
        title: "Dynamic Forms",
        tech: "Sveltekit,MySQL, PrismaORM, Node.js,Express.js",
        description: "Create online forms and surveys with multiple question types.",
        url: "https://github.com/Sahith-03/Forms"
    },
    {
        id: "eSign",
        image: "./images/signature.svg",
        title: "eSignature Maker",
        tech: "JavaScript,CSS,HTML",
        description: "Draw,edit,download your e-signature. Based on CanvasAPI",
        url: "https://sahith-03.github.io/e-Signature/"
    },
    {
        id: "Github",
        image: "./images/github.svg",
        title: "Github Profile Fetcher",
        tech: "Angular, TailwindCSS, Github REST API",
        description: "Fetches Github details like bio,repositories,tech used for each project of a user",
        url: "https://github-profile-fetcher-nine.vercel.app/"
    },
    {
        id: "Pong",
        image: "./images/pong.svg",
        title: "Pong Game",
        tech: "Python",
        description: "Multiplayer Pong game based on turtle module and OOPs concept",
        url: "https://github.com/Sahith-03/Pong-Game"
    },
    {
        id: "Snake",
        image: "./images/snake.svg",
        title: "Snake Game",
        tech: "Python",
        description: "Classic snake game based on turtle module and OOPs concept",
        url: "https://github.com/Sahith-03/Snake-Game/"
    },
    {
        id: "Login",
        image: "./images/Auth.svg",
        title: "Login-Signup Page",
        tech: "NextJS, Firebase, TailwindCSS",
        description: "Allows users to login and signup using GoogleAuth,Email/Password",
        url: "https://authentication-sahith-03s-projects.vercel.app/"
    },
    {
        id: "dict",
        image: "./images/dictionary.svg",
        title: "Dictionary",
        tech: "HTML,CSS,JavaScript.",
        description: "Uses real-time data as Free Dictionary API is used",
        url: "https://sahith-03.github.io/Dictionary/"
    },
    {
        id: "drum",
        image: "./images/drum-icon.svg",
        title: "Drum-Kit",
        tech: "HTML,CSS,JavaScript.",
        description: "Allows users to play drum sounds by clicking on buttons.",
        url: "https://sahith-03.github.io/Drum-Kit/"
    },
    {
        id: "Leave-Pred",
        image: "./images/avatar-icon.svg",
        title: "Leave Prediction",
        tech: "Pandas,Seaborn,Scikit-learn libraries of Python.",
        description: "I predicted student leave based on date, nearby festival, weekend proximity, distance from university, and leave option in the given data.",
        url: "https://colab.research.google.com/drive/12jNYTGaNeJ4tLRnITweQDOlL5KdTyU9W#scrollTo=e3ccd219"
    }
];

export const fetchGithubProjects = async (tag: string = 'project'): Promise<Project[]> => {
    try {
        const response = await fetch('https://api.github.com/users/Sahith-03/repos?per_page=100&sort=created&direction=desc', { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('Failed to fetch from GitHub API');
        }
        const repos = await response.json();

        const filteredRepos = repos.filter((repo: any) => repo.topics && repo.topics.includes(tag));

        // If no repositories have the required tag, fallback to static data
        if (filteredRepos.length === 0) {
            console.warn(`No GitHub projects found with tag "${tag}". Falling back to static data.`);
            return projectsData;
        }

        return filteredRepos.map((repo: any) => {
            // Built with: Combine main language with other topics
            const techArray = [];
            if (repo.language) techArray.push(repo.language);
            if (repo.topics) {
                const otherTopics = repo.topics.filter((t: string) => t !== tag && t !== repo.language?.toLowerCase());
                techArray.push(...otherTopics);
            }
            const tech = techArray.length > 0 ? techArray.join(', ') : 'Various';

            // Format title (replace hyphens and underscores with spaces, capitalize)
            const title = repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());

            return {
                id: repo.id.toString(),
                image: '', // Use default blank or map specific icons here
                title: title,
                tech: tech, // This goes to the "built with" section
                description: repo.description || 'No description provided.', // This maps the short description
                url: repo.homepage || repo.html_url // Use homepage if available, else repo URL
            };
        });
    } catch (error) {
        console.error("Error fetching GitHub projects:", error);
        return projectsData; // Fallback to static data on error
    }
};
