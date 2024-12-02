type ProjectProps = {
    title: string;
    description: string;
    imageUrl: string;
    demoLink: string;
    codeLink: string;
  };
  
  const ProjectCard: React.FC<ProjectProps> = ({ title, description, imageUrl, demoLink, codeLink }) => (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
      <a href={codeLink} target="_blank" rel="noopener noreferrer">Source Code</a>
    </div>
  );
  
  export default ProjectCard;
  