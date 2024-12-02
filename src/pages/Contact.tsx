import React from "react";
import styled from "styled-components";

// Styled container to take full width of the screen
const ContactContainer = styled.div`
  width: 100vw; /* Set width to 100% of the viewport width */
  padding: 20px;
  box-sizing: border-box; /* Include padding in the width */
  background-color: #f8f9fa; /* Optional: background color */
`;

const ContactSection = styled.section`
  margin: 0;
  padding: 20px;
`;

const SectionHeading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto; /* Center the form on the page */
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Optional: shadow effect */
`;

const FormLabel = styled.label`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #34495e;
`;

const FormInput = styled.input`
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const FormTextarea = styled.textarea`
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  padding: 12px 20px;
  font-size: 1.2em;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <ContactSection>
        <SectionHeading>Contact Me</SectionHeading>
        <ContactForm>
          <FormLabel htmlFor="name">Your Name</FormLabel>
          <FormInput type="text" id="name" name="name" placeholder="Enter your name" />

          <FormLabel htmlFor="email">Your Email</FormLabel>
          <FormInput type="email" id="email" name="email" placeholder="Enter your email" />

          <FormLabel htmlFor="message">Your Message</FormLabel>
          <FormTextarea id="message" name="message" rows={6} placeholder="Enter your message" />

          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact;
