import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate junior developer studying at the Faculty of Informatics and Information Technologies in Bratislava, with a knack for crafting robust and efficient solutions in software development and data science. My interests lie in computer vision, artificial intelligence, and full-stack development, where I constantly explore innovative ways to solve real-world problems.

I enjoy working on challenging projects that push the boundaries of technology, whether it's developing intelligent vehicle systems, enhancing medication delivery platforms, or optimizing data pipelines. My approach is hands-on, driven by curiosity, and always backed by a strong foundation in software engineering principles, algorithms, and data structures. `;

export const ABOUT_TEXT = `Passionate Data Science student with a strong foundation in statistical analysis, machine learning, and data visualization. Currently sharpenig my skills in Python, R, and SQL. Special interest what I have is with deep learning and neural networks 

I have gained experience building, training, and fine-tuning neural network models for tasks such as image recognition, natural language processing, and predictive analytics.I'm always looking for new ways to use deep learning to tackle challenging issues; from working with basic feedforward networks to more sophisticated structures like convolutional neural networks (CNNs) and recurrent neural networks (RNNs). 

With hands-on projects utilizing frameworks like TensorFlow and PyTorch, I'm eager to contribute to innovative projects that push the boundaries of AI. My goal is to apply neural networks in areas such as healthcare, finance, and natural language understanding, unlocking new insights from data. `;

export const EXPERIENCES = [
    {
        year: "2024 - Present",
        role: "Junior Data Scientist",
        company: "Dôvera Zdravotná Poisťovňa",
        description: `As a Junior Data Scientist at Dôvera Zdravotná Poisťovňa, I use data science and machine learning to extract insights and improve healthcare solutions. My work involves developing predictive models to enhance patient care and insurance processes, analyzing large-scale healthcare data to identify trends, and optimizing decision-making. I also write SQL queries and Python scripts to process, clean, and visualize medical data. Additionally, I collaborate with cross-functional teams to create data-driven solutions that contribute to more efficient healthcare analytics.`,
        technologies: ["Data Science", "Python", "SQL", "Machine Learning"],
    },
    {
        year: "2023 - Present",
        role: "Freelance Web Developer",
        company: "Self Employed",
        description: `As a Freelance Web Developer, I design and develop user-friendly web interfaces, ensuring seamless user experiences. My work involves building dynamic applications using Next.js, React, and Vue.js, integrating frontend components with Node.js APIs, and optimizing performance for scalability. I focus on creating responsive and visually appealing designs, collaborating with clients and backend developers to deliver high-quality, efficient solutions.`,
        technologies: ["HTML", "CSS", "Vue.js", "React", "Node.js"],
    },
    {
        year: "2023 - 2023",
        role: "Internship IT Support specialist",
        company: "Lidl Slovenská Republika",
        description: `As an IT Support Specialist Intern at Lidl Slovenská Republika, I provided technical support to employees, troubleshooting hardware and software issues, and resolving network connectivity problems. I also assisted in setting up new workstations, installing software updates, and maintaining IT inventory. Additionally, I documented support tickets, tracked issues, and communicated with the IT team to ensure timely resolution of technical problems.`,
        technologies: ["OracleSQL", "SQL", "Python", "MySQL"],
    },
    // {
    //     year: "2020 - 2021",
    //     role: "Software Engineer",
    //     company: "Paypal",
    //     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    //     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
    // },
];

export const PROJECTS = [
    {
        title: "VitaPeak - Healthcare Delivery Platform",
        image: project1,
        description:
            "VitaPeak is a healthcare delivery platform designed to connect patients, pharmacies, and couriers for efficient and secure medication delivery. The system enables users to search for medical supplies, verify prescriptions, track orders in real time, and opt for contactless pickup points. Built using Python for backend logic, Enterprise Architect for system modeling, and CustomTkinter for a user-friendly interface, VitaPeak ensures a seamless and reliable experience in the healthcare delivery ecosystem.",
        technologies: ["Python", "Enterprise Architect", "CustomTkinter"],
        githubUrl: "https://github.com/K1ko/VitaPeak?tab=readme-ov-file",
    },
    {
        title: "VeinsUnleashed - Preworkout Supplement",
        image: project2,
        description:
            "VeinsUnleashed is an e-commerce platform designed for selling premium pre-workout supplements. The platform provides a seamless shopping experience with features such as product browsing, secure checkout, user authentication, and order management. Built with HTML, CSS, and JavaScript for an interactive frontend, Laravel for a robust backend, and PostgreSQL for secure and scalable data storage, VeinsUnleashed ensures a smooth and efficient online shopping experience.",
        technologies: ["HTML", "CSS", "JavaScript", "Laravel", "PostgreSQL"],
        githubUrl: "https://github.com/K1ko/VeinsUnleashed",
    },
    {
        title: "Portfolio Website",
        image: project4,
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
        githubUrl: "www.google.com",
    },
    {
        title: "Nexis - The Slack Clone",
        image: project3,
        description:
            "A real-time messaging platform inspired by Slack, allowing users to create and manage channels, send messages, and collaborate efficiently. The application includes features such as real-time messaging, user authentication, and channel management. Built with Vue.js for a dynamic frontend, AdonisJS for a robust backend, and SQLite for lightweight data storage, this project demonstrates expertise in building interactive, full-stack web applications.",
        technologies: ["HTML", "CSS", "Vue.js", "AdonisJS", "SQLite"],
        githubUrl: "https://github.com/PasekRastislav/NEXIS-VPWA",
    },
];

export const CONTACT = {
    address: 'More in CV',
    phoneNo: "+421 944 204 828 ",
    email: "kristian.cervenka@gmail.com",
};
