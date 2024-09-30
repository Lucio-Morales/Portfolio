import { ProjectsSection } from './styles';
import image from '../../../public/image.jpg';

const projects = [
  {
    title: 'Project 1',
    description:
      "This is a description of project 1. It's a web application built with React.",

    codeLink: 'https://github.com/project1',
    demoLink: 'https://project1-demo.com',
  },
  {
    title: 'Project 2',
    description:
      "This is a description of project 2. It's a mobile application built with React Native.",

    codeLink: 'https://github.com/project2',
    demoLink: 'https://project2-demo.com',
  },
  {
    title: 'Project 3',
    description:
      "This is a description of project 3. It's a fullstack application with Node.js and MongoDB.",

    codeLink: 'https://github.com/project3',
    demoLink: 'https://project3-demo.com',
  },
];

const Projects = () => {
  return (
    <ProjectsSection>
      <h1>Projects section</h1>
    </ProjectsSection>
  );
};

export default Projects;
