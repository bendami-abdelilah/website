import React from 'react';
import styled from 'styled-components';
import background from '../assets/GIS.jpg';
import tourism from '../assets/tour.png';
import social from '../assets/soc.png';
import environmet from '../assets/env.png';
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams, Navigate } from "react-router-dom";


const HomeContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroText = styled.p`
  font-size: 1.5em;
  margin: 10px 0 0;
`;


const Section = styled.section`
  width: 100%;
  max-width: 1200px; /* Optional max-width to constrain text on larger screens */
  padding: 40px 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SectionHeading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #34495e;
`;

const GISExplanation = styled.div`
  background-color: #ecf0f1;
  border-left: 4px solid #3498db;
  padding: 15px;
  margin: 20px 0;
`;

const HeroSection = styled.section`
  width: 100%;
  height: 80vh; /* Increase the height to make it larger */
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative; /* Needed for overlay positioning */

  /* Optional: Add a gradient overlay for better text contrast */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Black overlay with transparency */
    z-index: 1; /* Place overlay behind text */
  }

  /* Adjust text styling */
  h1 {
    font-size: 3rem; /* Increase font size for the main heading */
    font-weight: bold; /* Make the font bold */
    margin: 0; /* Remove default margin */
    z-index: 2; /* Bring the text in front of the overlay */
  }

  p {
    font-size: 1.5rem; /* Adjust font size for description */
    margin-top: 10px; /* Space between heading and paragraph */
    z-index: 2; /* Bring the text in front of the overlay */
  }

  /* Add padding to the section */
  padding: 20px; /* Optional padding for better spacing */
`;


const HeroHeading = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
  margin: 0;
`;

const HeroDescription = styled.p`
  font-size: 1.3rem;
  color: #fff;  // White color
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
`;


const CTAButton = styled.a`
  padding: 1rem 2.5rem;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectsSection = styled.section`
  padding: 80px 20px;
  background-color: #fff;
  text-align: center;
`;

const ProjectsHeading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const ProjectCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #ffffff; /* Changed to white for a cleaner look */
  border-radius: 12px; /* Slightly increased border radius for a softer appearance */
  padding: 24px; /* Increased padding for more content space */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Enhanced shadow for better depth */
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Added transition for interactivity */
  
  &:hover {
    transform: translateY(-5px); /* Slight upward movement on hover for emphasis */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    padding: 20px; /* Adjust padding for smaller screens */
  }
`;


const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem; /* Increased font size for better readability */
  color: #4a4a4a; /* Darker shade for improved contrast and professionalism */
  line-height: 1.7; /* Slightly increased line height for better readability */
  margin: 0; /* Reset margin for a cleaner layout */
  padding: 0.5rem 0; /* Added padding for spacing */
  transition: color 0.3s ease; /* Smooth transition for hover effects */

  &:hover {
    color: #2980b9; /* Change color on hover for interactivity */
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for smaller screens */
  }
`;


const ProjectLink = styled.a`
  color: #007bff; /* Primary link color */
  font-weight: 600; /* Slightly less bold for a more sophisticated look */
  text-decoration: none; /* Remove underline */
  transition: color 0.3s ease, text-shadow 0.3s ease; /* Add transition for text shadow effect */

  /* Hover state */
  &:hover {
    color: #0056b3; /* Darker color on hover */
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* Subtle text shadow for depth */
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    font-size: 1rem; /* Adjust font size for smaller screens */
  }
`;

const AboutSection = styled.section`
  padding: 80px 20px; /* Generous padding for spacious layout */
  background-color: #f7f9fc; /* Soft background color for a calming effect */
  text-align: center; /* Centered heading for a cohesive look */
  border-radius: 10px; /* Slight rounding for a modern feel */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const AboutHeading = styled.h2`
  font-size: 2.5rem; /* Prominent heading size for emphasis */
  color: #333; /* Dark color for high contrast */
  margin-bottom: 1rem; /* Space below the heading */
  font-weight: 600; /* Semi-bold for better visibility */
`;

const AboutText = styled.p`
  font-size: 1.2rem; /* Readable font size */
  color: #4a4a4a; /* Darker shade for improved readability */
  max-width: 700px; /* Restrict width for improved text flow */
  margin: 0 auto 2rem; /* Centered with bottom margin for spacing */
  line-height: 1.6; /* Adjusted line height for better text density */
  padding: 0 15px; /* Added horizontal padding for small screens */
  text-align: justify; /* Justify text for a cleaner look */
  
  @media (max-width: 768px) {
    font-size: 1rem; /* Responsive font size for smaller screens */
    line-height: 1.5; /* Slightly tighter line height for mobile */
  }
`;


const SkillsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  padding: 0;
`;

const Skill = styled.li`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
`;

const SkillsSection = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;
`;

const SkillsHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const SkillIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const MapSection = styled.section`
  padding: 60px 20px;
  background-color: #f0f4f8;
  text-align: center;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 20px;
`;

const ProjectShowcaseSection = styled.section`
  padding: 80px 20px;
  background-color: #fff;
  text-align: center;
`;

const ProjectShowcaseHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const ProjectShowcaseCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectShowcaseCard = styled.div`
  background-color: #f7f9fc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TestimonialsSection = styled.section`
  padding: 80px 20px;
  background-color: #f7f9fc;
  text-align: center;
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const ContactSection = styled.section`
  padding: 80px 20px;
  background-color: #fff;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Footer = styled.footer`
  padding: 40px 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id: string) => {
    navigate(`/projectdetails/${id}`);
  }
  return (
    <>
      <HeroSection>
        <HeroHeading>
        SPECIALIZED MASTER DEGREE GIS AND MANAGEMENT TERRITORY
        </HeroHeading>
        <HeroDescription>
Join us to explore more of my innovative and purpose-driven work!
        </HeroDescription>
        <CTAButton href="#projects">Explore My Work</CTAButton>
      </HeroSection>
      <HomeContainer>
      <Section>
        <SectionHeading>Introduction</SectionHeading>
        <Paragraph>
        Welcome! I am currently pursuing a Master's degree in Geographic Information Systems and Territory Management (SIGGT) at the Faculty of Sciences of Casablanca (FSAC). This website showcases my dedication to utilizing GIS methodologies to create impactful solutions for communities.
        </Paragraph>
      <Paragraph>
      My key projects include optimizing school site selection, determining suitable locations for a wastewater treatment station, and developing a comprehensive tourist map for Essaouira. Through these initiatives, I aim to enhance educational accessibility, promote sustainable waste management, and boost tourism in the region.
      </Paragraph>
      <Paragraph>
      I invite you to explore my innovative, purpose-driven projects and discover how I leverage technology to address real-world challenges.      </Paragraph>
        <SectionHeading>What is GIS?</SectionHeading>
        <GISExplanation>
          <Paragraph>
            Geographic Information Systems (GIS) are powerful tools that enable
            us to visualize, analyze, and interpret spatial data. GIS helps in
            understanding relationships, patterns, and trends in various
            geographical contexts.
          </Paragraph>
          <Paragraph>
            With GIS, we can overlay different types of data, such as
            demographics, infrastructure, and environmental factors, to make
            informed decisions. It's widely used in urban planning, resource
            management, environmental protection, and many other fields.
          </Paragraph>
          <Paragraph>
            In my projects, I use GIS to create interactive maps and data
            visualizations that help stakeholders make better decisions and
            promote sustainable practices.
          </Paragraph>
        </GISExplanation>

        <SectionHeading>Key Projects</SectionHeading>
        <Paragraph>
        GIS, Remote sensing, Environment, Social, Tourism.
        </Paragraph>
      </Section>
    </HomeContainer>
      <ProjectsSection id="projects">
        <ProjectsHeading>Project Highlights</ProjectsHeading>
        <ProjectCardsContainer>
          <ProjectCard>
            <ProjectTitle>Tourism Project</ProjectTitle>
            <ProjectDescription>
            The purpose of this study is to create a suitable plan for visiting tourist sites for tourism.
            </ProjectDescription>
            <ProjectLink onClick={() => handleProjectClick("1")}>View Details</ProjectLink>
            <img src={tourism} alt="tourism" style={{ backgroundImage: `url(${tourism})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '45%', height: '200px' }} />
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Social Project</ProjectTitle>
            <ProjectDescription>
            The purpose of this study is to locate the optimal site to provide and build new schools of a new school.
            </ProjectDescription>
            <ProjectLink onClick={() => handleProjectClick("2")}>View Details</ProjectLink>
            <img src={social} alt="social" style={{ backgroundImage: `url(${social})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '45%', height: '200px' }} />
          </ProjectCard>
          <ProjectCard>
            <ProjectTitle>Environmental Project</ProjectTitle>
            <ProjectDescription>
            The purpose of this study is to locate the optimal site for the construction of a Waste Water Treatment Plant (WWTP).
            </ProjectDescription>
            <ProjectLink onClick={() => handleProjectClick("3")}>View Details</ProjectLink>
            <img src={environmet} alt="environment" style={{ backgroundImage: `url(${environmet})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '45%', height: 'px' }} />

          </ProjectCard>
        </ProjectCardsContainer>
      </ProjectsSection>

      <AboutSection>
        <AboutHeading>About Me</AboutHeading>
        <AboutText>
        I am a Master's degree student specializing in Geographic Information Systems and Territory Management (SIGGT) at the Faculty of Sciences of Casablanca (FSAC). With a solid foundation in environmental studies and spatial data analysis, I am passionate about leveraging GIS technology to create meaningful solutions for various challenges in social, environmental, and tourism sectors.
        </AboutText>
        <AboutText>
        My academic journey has equipped me with a diverse skill set in data collection, analysis, and visualization. I have successfully undertaken projects focused on optimizing school site selection, developing efficient wastewater treatment strategies, and creating interactive tourism maps for Essaouira. Through these projects, I aim to contribute positively to my community and promote sustainable practices.
        </AboutText>
        <AboutText>
        I have a background that has helped me make informed decisions and effectively tackle complex issues in my work.
        </AboutText>
        <SkillsList>
          <Skill>React.js</Skill>
          <Skill>HTML5</Skill>
          <Skill>CSS3</Skill>
          <Skill>GIS Tools</Skill>
          <Skill>Web Mapping</Skill>
          <Skill>UI/UX Design</Skill>
          <Skill>JavaScript</Skill>
        </SkillsList>
      </AboutSection>

      <SkillsSection>
        <SkillsHeading>Key Skills and Tools
        </SkillsHeading>
        <SkillIconsContainer>
          <Skill>QGIS</Skill>
          <Skill>ArcGIS Pro</Skill>
          <Skill>sketchup</Skill>
          <Skill>Figma</Skill>
          <Skill>Git</Skill>
          <Skill>Visual Studio Code</Skill>
        </SkillIconsContainer>
      </SkillsSection>

      <MapSection>
  <h2>Interactive Map/Visualization</h2>
  <MapContainer>
    <iframe
      title="Interactive Map of Essaouira"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27211.849372510762!2d-9.783141767481972!3d31.51094189993495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9a4e9f588ccf%3A0x57421a176d5d7d30!2sEssaouira!5e0!3m2!1sen!2sma!4v1729473624172!5m2!1sen!2sma"
      width="100%" // Set width to 100% for responsiveness
      height="500" // You can adjust this height as needed
      style={{ border: "none" }} // Keep the style for the iframe border
      allowFullScreen // Added allowFullscreen for better usability
      loading="lazy" // Optimizes loading
      referrerPolicy="no-referrer-when-downgrade" // Ensure safe navigation
    />
  </MapContainer>
</MapSection>


      <ProjectShowcaseSection>
        <ProjectShowcaseHeading>Project Showcase</ProjectShowcaseHeading>
        <ProjectShowcaseCards>
          <ProjectShowcaseCard>
            <ProjectTitle>Tourism Circuit</ProjectTitle>
            <ProjectDescription>
            The Tourism Circuit project aims to enhance the visitor experience in Essaouira by creating an interactive map that highlights key tourist sites. By showcasing the city’s rich cultural heritage and natural beauty, the project promotes local tourism and encourages exploration of lesser-known attractions.
            </ProjectDescription>
            <ProjectTitle>Tools:</ProjectTitle>
            <ProjectDescription>
            leaflet,OpenStreetMap, GIS,JavaScript, HTML5, CSS3
            </ProjectDescription>
          </ProjectShowcaseCard>
          <ProjectShowcaseCard>
            <ProjectTitle>School project</ProjectTitle>
            <ProjectDescription>
            The School Project focuses on identifying optimal locations for new educational facilities in Essaouira. Utilizing GIS methodologies, this project aims to enhance access to quality education by considering demographic factors, accessibility, and environmental impacts.
            </ProjectDescription>
            <ProjectTitle>Tools:</ProjectTitle>
            <ProjectDescription>
              Qgis, ArcGIS Pro, sketchup, google maps, open street map, Google earth engine, 
            </ProjectDescription>
          </ProjectShowcaseCard>
          <ProjectShowcaseCard>
            <ProjectTitle>Environmental project</ProjectTitle>
            <ProjectDescription>
            The Environmental Visualization project leverages GIS data to create compelling visual representations of environmental factors in Essaouira. By providing insights into land use and pollution levels, this project aims to support informed decision-making for local authorities and the community.
            </ProjectDescription>
            <ProjectTitle>Tools:</ProjectTitle>
            <ProjectDescription>
            Qgis, google maps, open street map, Google earth engine,
            </ProjectDescription>
          </ProjectShowcaseCard>
        </ProjectShowcaseCards>
      </ProjectShowcaseSection>

      <TestimonialsSection>
        <h2>Testimonials</h2>
        <TestimonialCard>
          <TestimonialText>
            "Their work on the community platform has been transformative for our initiatives."
          </TestimonialText>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>
            "The tourism project greatly enhanced visitor engagement in our region."
          </TestimonialText>
        </TestimonialCard>
      </TestimonialsSection>

      <ContactSection>
        <h2>Get in Touch</h2>
        <ContactForm>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Textarea placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactSection>

      <Footer>
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <SocialIcons>
          <SocialIcon href="https://github.com/yourusername" target="_blank">GitHub</SocialIcon>
          <SocialIcon href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</SocialIcon>
          <SocialIcon href="https://twitter.com/yourusername" target="_blank">Twitter</SocialIcon>
        </SocialIcons>
      </Footer>
    </>
  );
};

export default Home
