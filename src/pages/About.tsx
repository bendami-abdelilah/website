import React from "react";
import styled from "styled-components";

// Styled container to take full width of the screen
const AboutContainer = styled.div`
  width: 100vw; /* Full width of the viewport */
  padding: 20px;
  box-sizing: border-box;
  background-color: #f0f0f0; /* Optional background color */
`;

const Section = styled.section`
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px; /* Optional max-width to constrain text on larger screens */
`;

const SectionHeading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const BioParagraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #34495e;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const Skill = styled.span`
  background-color: #3498db;
  color: white;
  padding: 10px 15px;
  border-radius: 20px;
  margin: 5px;
  font-size: 1em;
`;

const ProjectOverview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

const ProjectCard = styled.div`
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ProjectLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Testimonial = styled.blockquote`
  font-style: italic;
  margin: 20px 0;
  padding-left: 20px;
  border-left: 4px solid #3498db;
  color: #7f8c8d;
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Section>
        <SectionHeading>About Me</SectionHeading>
        <BioParagraph>
        I am a Master's degree student specializing in Geographic Information Systems and Territory Management (SIGGT) at the Faculty of Sciences of Casablanca (FSAC). With a solid foundation in environmental studies and spatial data analysis, I am dedicated to leveraging GIS technology to address challenges in the social, environmental, and tourism sectors.
My academic journey has provided me with a diverse skill set in data collection, analysis, and visualization. I have successfully completed projects focused on optimizing school site selection, developing efficient wastewater treatment strategies, and creating interactive tourism maps for Essaouira. Through these initiatives, I aim to contribute positively to my community and promote sustainable practices.
My background has equipped me to make informed decisions and effectively tackle complex issues in my work.
        </BioParagraph>

        <BioParagraph>
          I have a background in renewable energy and a deep interest in
          geospatial data analysis, combining my skills in React, HTML5, CSS3,
          and GIS tools to create meaningful applications.
        </BioParagraph>

        <SectionHeading>Skills and Expertise</SectionHeading>
        <SkillsContainer>
          <Skill>React.js</Skill>
          <Skill>HTML5</Skill>
          <Skill>CSS3</Skill>
          <Skill>GIS Tools</Skill>
          <Skill>Web Mapping</Skill>
          <Skill>UI/UX Design</Skill>
          <Skill>JavaScript</Skill>
        </SkillsContainer>

        <SectionHeading>Key Projects</SectionHeading>
        <ProjectOverview>
          <ProjectCard>
            <h3>Tourism Project</h3>
            <p>
              Built an interactive tourism circuit map for Essaouira, helping
              tourists plan their itineraries efficiently.
            </p>
            <ProjectLink href="#tourism-project">View Project</ProjectLink>
          </ProjectCard>

          <ProjectCard>
            <h3>Social project</h3>
            <p>
              select a suitable site for a new school in Essaouira city.
            </p>
            <ProjectLink href="#social-project">View Project</ProjectLink>
          </ProjectCard>

          <ProjectCard>
            <h3>Environmental project</h3>
            <p>
              locate a suitable site for a new waste water traitement staion in essaouira city.
            </p>
            <ProjectLink href="#environmental-project">
              View Project
            </ProjectLink>
          </ProjectCard>
        </ProjectOverview>

        <SectionHeading>Mission and Values</SectionHeading>
        <BioParagraph>
          I believe in the power of technology to create meaningful change. My
          goal is to use my skills in web development and GIS to contribute to
          projects that promote sustainability, community engagement, and
          tourism.
        </BioParagraph>

        <SectionHeading>Testimonials</SectionHeading>
        <Testimonial>
          "Working with this developer was a fantastic experience! Their
          dedication to creating high-quality solutions for social and
          environmental projects is truly admirable."
        </Testimonial>

        <Testimonial>
          "Their attention to detail and passion for leveraging GIS in web
          applications made a real impact on our environmental project."
        </Testimonial>
      </Section>
    </AboutContainer>
  );
};

export default About;
