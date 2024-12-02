import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tourism from '../assets/tour.png';
import social from '../assets/soc.png';
import environmet from '../assets/env.png';

// Styled container to take full width of the screen
const ProjectsContainer = styled.div`
  width: 100vw; /* Set width to 100% of the viewport width */
  padding: 20px;
  box-sizing: border-box; /* Include padding in the width */
  background-color: #f0f0f0; /* Optional: background color for the container */
`;

const ProjectSection = styled.section`
  margin: 0; /* Remove margins to stretch the section */
  padding: 20px; /* Optional: add padding for visual spacing */
`;

const SectionHeading = styled.h2`
  font-size: 2.5em; /* Font size for the heading */
  margin-bottom: 30px; /* Increased margin for better spacing below */
  color: #2c3e50; /* Dark blue color for the text */
  font-weight: 600; /* Slightly bolder font for emphasis */
  text-align: center; /* Center align the heading for a balanced look */
  text-transform: uppercase; /* Uppercase text for a more formal style */
  letter-spacing: 0.05em; /* Add letter spacing for improved readability */
  
  /* Optional: Add a subtle text shadow for depth */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  
  /* Responsive design adjustments */
  @media (max-width: 768px) {
    font-size: 2em; /* Slightly smaller font size for mobile */
    margin-bottom: 20px; /* Adjust margin for mobile */
  }
`;


const ProjectCard = styled.div`
  border: 1px solid #e0e0e0; /* Lighter border for a softer look */
  border-radius: 12px; /* Slightly larger border-radius for modern appeal */
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ffffff; /* White background for project cards */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  display: flex; /* Use flexbox for layout */
  justify-content: space-between; /* Space between text and image */
  align-items: center; /* Center align items vertically */
  transition: transform 0.2s, box-shadow 0.2s; /* Smooth transition for hover effect */
  
  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2); /* Darker shadow on hover for depth */
  }
`;



const ProjectLink = styled.a`
  color: #2980b9; /* A slightly darker blue for better contrast */
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em; /* Slightly increased font size for prominence */
  transition: color 0.3s ease, text-decoration 0.3s ease; /* Smooth transition for color and decoration changes */

  &:hover {
    color: #1abc9c; /* Change color on hover for a more engaging effect */
    text-decoration: underline; /* Add underline on hover */
  }

  &:active {
    color: #16a085; /* Darker shade when the link is active */
  }
`;


const Projects: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id: string) => {
    navigate(`/projectdetails/${id}`);
  }
  return (
    <ProjectsContainer>
      <ProjectSection>
        <SectionHeading>Projects Overview</SectionHeading>
        <ProjectCard>
          <h3>Tourism Project</h3>
          <p>
          The project creates a GIS map to boost Essaouira's tourism and support the local economy.
          </p>
          <ProjectLink onClick={() => handleProjectClick("1")}>View Project</ProjectLink>
          <img src={tourism} alt="tourism" style={{ width: '100%', height: 'auto', maxWidth: '150px', borderRadius: '8px', objectFit: 'cover', marginLeft: '20px' }} />


        </ProjectCard>

        <ProjectCard>
          <h3>School project</h3>
          <p>
          The project aims to ensure accessible and safe educational infrastructure in Essaouira amid rapid urbanization.
          </p>
          <ProjectLink onClick={() => handleProjectClick("2")}>View Project</ProjectLink>
          <img src={social} alt="social" style={{ width: '100%', height: 'auto', maxWidth: '150px', borderRadius: '8px', objectFit: 'cover' }} />
          </ProjectCard>

        <ProjectCard>
          <h3>WWTP project</h3>
          <p>
          Essaouira needs a new wastewater treatment plant to address urban expansion and prevent environmental degradation.
          </p>
          <ProjectLink onClick={() => handleProjectClick("3")}>View Project</ProjectLink>
          <img src={environmet} alt="environment" style={{ width: '100%', height: 'auto', maxWidth: '150px', borderRadius: '8px', objectFit: 'cover' }} />
          </ProjectCard>
      </ProjectSection>
    </ProjectsContainer>
  );
};

export default Projects;
