
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import imagemethod1 from '../assets/metho_env.png';
import imagemethod2 from '../assets/metho_school.png';
import imagemethod3 from '../assets/metho_sircuit.png';
import imagemethod4 from '../assets/metho_3d.png';
import cretirea1 from '../assets/criteria_env.png';
import cretirea2 from '../assets/cretirea_school.png';
import cretirea3 from '../assets/criteria_tourist.png';
import spatial1Img from '../assets/spatial1.png';
import spatial2Img from '../assets/spatial2.png';
import spatial3Img from '../assets/spatial3.png';
import spatial4Img from '../assets/spatial3.png';
import results3 from '../assets/results3.png';
import results2 from '../assets/result_school.png';
import results1 from '../assets/result_env.png';
import results4 from '../assets/3dresults.png';

// Styled components for Projects Page
const ProjectsContainer = styled.div`
  width: 100vw; 
  padding: 20px;
  box-sizing: border-box;
  background-color: #f0f0f0;
`;

const ProjectSection = styled.section`
  margin: 0;
  padding: 20px;
`;

const SectionHeading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const ProjectCard = styled.div`
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ProjectLink = styled.button`
  color: #3498db;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// ProjectDetails Styled Components
const DetailsContainer = styled.div`
  padding: 50px;
  background-color: #f8f9fa;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsCard = styled.div`
  background-color: white;
  padding: 80px;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  width: 100%; /* Change this to 100% to use the full width of the parent */
  max-width: none; /* Remove any max-width constraint */
  box-sizing: border-box; /* Ensure padding is included in width */
`;

const ProjectTitle = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const ProjectDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #7f8c8d;
`;

const BackButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 1em;
  color: white;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
`;

// ProblematicSection styled component
const ProblematicSection = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #e6f7ff;
  border-left: 5px solid #3498db;
`;

// MethodologySection styled component
const MethodologySection = styled.div`
  margin-top: 20px;
  text-align: center;

  h3 {
    font-size: 3em; /* Larger and more eye-catching */
    color: #2c3e50; /* Deep blue for a bold appearance */
    font-family: 'Roboto Slab', serif; /* Use a more unique serif font for creativity */
    font-weight: 700; /* Bold for strong emphasis */
    text-transform: uppercase; /* Make the title uppercase */
    letter-spacing: 2px; /* Add spacing between letters for impact */
    background: linear-gradient(to right, #3498db, #2ecc71); /* Gradient background for modern look */
    -webkit-background-clip: text; /* Make the gradient apply to the text */
    -webkit-text-fill-color: transparent; /* Make the text color transparent so gradient shows */
    margin-bottom: 10px; /* Adjust spacing below */
  }

  img {
    width: 100%;
    max-width: 800px;
    height: auto;
  }
`;


// CriteriaSection styled component
const CriteriaSection = styled.div`
  margin-top: 20px;
  text-align: center;

  h3 {
    font-size: 3em; /* Larger and more eye-catching */
    color: #2c3e50; /* Deep blue for a bold appearance */
    font-family: 'Roboto Slab', serif; /* Use a more unique serif font for creativity */
    font-weight: 700; /* Bold for strong emphasis */
    text-transform: uppercase; /* Make the title uppercase */
    letter-spacing: 2px; /* Add spacing between letters for impact */
    background: linear-gradient(to right, #f39c12, #e74c3c); /* Gradient background for modern look */
    -webkit-background-clip: text; /* Make the gradient apply to the text */
    -webkit-text-fill-color: transparent; /* Make the text color transparent so gradient shows */
    margin-bottom: 10px; /* Adjust spacing below */
  }

  img {
    width: 70%;
    max-width: 800px;
    height: auto;
  }
`;


// SpatialAnalysisSection styled component
const SpatialAnalysisSection = styled.div`
  margin-top: 20px;
  text-align: center;

  h3 {
    font-size: 3em; /* Bigger font size for emphasis */
    color: #34495e; /* Darker shade for contrast */
    font-family: 'Merriweather', serif; /* Unique serif font for elegance */
    font-weight: 700; /* Bold style */
    text-transform: uppercase; /* Uppercase to stand out */
    letter-spacing: 1.5px; /* Slightly wider letter spacing */
    background: linear-gradient(to right, #16a085, #2980b9); /* Cool gradient from green to blue */
    -webkit-background-clip: text; /* Clip gradient to text */
    -webkit-text-fill-color: transparent; /* Transparent text fill for gradient effect */
    margin-bottom: 10px; /* Add margin below */
  }

  img {
    width: 100%;
    max-width: 800px;
    height: auto;
  }
`;


// FinalResultsSection styled component
const FinalResultsSection = styled.div`
  margin-top: 20px;
  text-align: center;

  h3 {
    font-size: 3em; /* Bigger font size for emphasis */
    color: #34495e; /* Darker shade for contrast */
    font-family: 'Merriweather', serif; /* Unique serif font for elegance */
    font-weight: 700; /* Bold style */
    text-transform: uppercase; /* Uppercase to stand out */
    letter-spacing: 1.5px; /* Slightly wider letter spacing */
    background: linear-gradient(to right, #16a085, #2980b9); /* Cool gradient from green to blue */
    -webkit-background-clip: text; /* Clip gradient to text */
    -webkit-text-fill-color: transparent; /* Transparent text fill for gradient effect */
    margin-bottom: 10px; /* Add margin below */
  }

  img {
    width: 100%;
    max-width: 800px;
    height: auto;
  }
`;


// Define the type for project data
type ProjectData = {
  [key: string]: {
    name: string;
    description: string;
    problematic: string;
    methodology: string | JSX.Element;
    cretirea: string | JSX.Element;
    spatial1: string | JSX.Element | undefined;
    spatial2: string | JSX.Element | undefined;
    results: string | JSX.Element;
    methodology2: string | JSX.Element | undefined;
    results2 : string | JSX.Element | undefined;
  };
};

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projectsData: ProjectData = {
    1: { 
      name: "Tourism Development and Circuit Map Creation, study case ESSAOUIRA, MOROCCO", 
      description: "This part will offer an overview of the creation of the Essaouira tourism circuit, and implementation of our project solution.", 
      problematic: "Essaouira's tourism potential is limited by the lack of a well-organized tourist circuit, causing visitors to miss key attractions and reducing economic benefits for locals. My project addresses this by creating a comprehensive circuit map using GIS, guiding tourists through the city's landmarks and hidden gems.",
      methodology: <img src={imagemethod3} alt="Methodology icon" />, 
      cretirea: <img src={cretirea3} alt="Criteria icon" />,
      spatial1: undefined,
      spatial2: undefined,
      results : <img src={results3} alt="Results icon" />,
      methodology2: undefined,
      results2: undefined,

    },
    2: { 
      name: "Locating the appropriate site for a new school, study case ESSAOUIRA, MOROCCO", 
      description: "This part will offer an overview of the working environment essential for the successful development and implementation of our project solution.", 
      problematic: "Essaouira is confronted with a critical need for quality educational infrastructure due to rapid urbanization. The challenge lies in ensuring that the site chosen for the new school is accessible, safe, and meets both current and future needs.",
      methodology: <img src={imagemethod2} alt="Methodology icon" />,
      cretirea: <img src={cretirea2} alt="Criteria icon" />,
      spatial1: <img src={spatial3Img} alt="Spatial 3 icon" />,
      spatial2: <img src={spatial4Img} alt="Spatial 4 icon" />,
      results : <img src={results2} alt="Results icon" />,
      methodology2: <img src={imagemethod4} alt="Results icon" />,
      results2: <img src={results4} alt="Results icon" />,

    },
    3: { 
      name: "Locating the appropriate site for a new wastewater treatment station, study case ESSAOUIRA, MOROCCO", 
      description: "This part will focus on the selection of the most suitable site for the wastewater treatment plant (WWTP) in Essaouira.", 
      problematic: "Essaouira faces challenges in wastewater management due to urban expansion. A suitable location for a new treatment plant is needed to avoid environmental degradation and public health risks.",
      methodology: <img src={imagemethod1} alt="Methodology icon" />,
      cretirea: <img src={cretirea1} alt="Criteria icon" />,
      spatial1: <img src={spatial1Img} alt="Spatial 1 icon" />,
      spatial2: <img src={spatial2Img} alt="Spatial 2 icon" />,
      results : <img src={results1} alt="Results icon" />,
      methodology2: undefined,
      results2: undefined,

    },
  };

  const project = projectsData[id as keyof ProjectData];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <DetailsContainer>
      <DetailsCard>
        <ProjectTitle>{project.name}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        
        {/* Display the problematic section */}
        <ProblematicSection>
          <h3>Problematic</h3>
          <p>{project.problematic}</p>
        </ProblematicSection>
        
        {/* Display the methodology section */}
        <MethodologySection>
          <h3>Methodology</h3>
          {typeof project.methodology === 'string' ? (
            <img src={project.methodology} alt="Methodology icon" />
          ) : (
            project.methodology
          )}
        </MethodologySection>

        {/* Display the criteria section */}
        <CriteriaSection>
          <h3>Criteria</h3>
          {typeof project.cretirea === 'string' ? (
            <img src={project.cretirea} alt="Criteria icon" />
          ) : (
            project.cretirea
          )}
        </CriteriaSection>

        {/* Display the spatial analysis section */}
        { project.spatial1 && project.spatial2 ? (
          <div>
        <SpatialAnalysisSection>
  <h3>Spatial Analysis</h3>
  {typeof project.spatial1 === 'string' ? (
    <img src={project.spatial1} alt="Spatial Analysis 1 icon" />
  ) : (
    project.spatial1
  )}
  {typeof project.spatial2 === 'string' ? (
    <img src={project.spatial2} alt="Spatial Analysis 2 icon" />
  ) : (
    project.spatial2
  )}
</SpatialAnalysisSection>
</div>
) : null}

{/* Display the final results section */}
<FinalResultsSection>
  <h3>Final Results</h3>
  {typeof project.results === 'string' ? (
    <img src={project.results} alt="Results icon" />
  ) : (
    project.results
  )}
</FinalResultsSection>

{/* Display 3D school methodology if available */}
{project.methodology2 && (
  <MethodologySection>
    <h3>3D School Methodology</h3>
    {typeof project.methodology2 === 'string' ? (
      <img src={project.methodology2} alt="3D School Methodology icon" />
    ) : (
      project.methodology2
    )}
  </MethodologySection>
)}

{/* Display 3D school results if available */}
{project.results2 && (
  <FinalResultsSection>
    <h3>3D School Results</h3>
    {typeof project.results2 === 'string' ? (
      <img src={project.results2} alt="3D School Results icon" />
    ) : (
      project.results2
    )}
  </FinalResultsSection>
)}

{/* Back button to return to projects list */}
<BackButton onClick={() => navigate(-1)}>Back to Projects</BackButton>
</DetailsCard>
</DetailsContainer>
);

};





export default ProjectDetails;
