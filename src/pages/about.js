import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const About = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
      <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Manoveda: AI-Based Mental Health Project for Students
      </Typography>

      <Typography variant="h5" gutterBottom>
        Introduction
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manoveda is a pioneering AI-based mental health project developed by Intouch AI in association with Manoveda. This initiative is designed to address the growing mental health challenges faced by students. Recognizing the pressures of academic performance, social dynamics, and personal challenges, Manoveda aims to provide innovative solutions for mental well-being.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Understanding the Landscape
      </Typography>
      <Typography variant="body1" gutterBottom>
        Mental health issues among students have reached alarming levels, with high rates of stress, anxiety, depression, and suicidal ideation. Traditional mental health services often struggle to meet the growing demand due to stigma, accessibility issues, and limited resources. Manoveda leverages AI technology to overcome these challenges, offering personalized support and scaling mental health services to meet students needs effectively.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Key Features of Manoveda
      </Typography>

      <Typography variant="h6" gutterBottom>
        1. Accessibility
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manoveda enhances accessibility through mobile apps and online platforms, allowing students to access support anytime and anywhere. AI-powered chatbots engage students in natural language conversations, providing immediate support and resources without the need for face-to-face appointments.
      </Typography>

      <Typography variant="h6" gutterBottom>
        2. Personalization
      </Typography>
      <Typography variant="body1" gutterBottom>
        Using machine learning algorithms, Manoveda analyzes data to tailor interventions to individual students needs. This personalization involves tracking patterns in behavior, mood, and preferences to offer personalized recommendations, coping strategies, and resources, fostering a sense of empowerment and engagement.
      </Typography>

      <Typography variant="h6" gutterBottom>
        3. Early Intervention
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manoveda emphasizes early detection and intervention. AI tools analyze data to identify students at risk based on changes in behavior, language, or social interactions. This proactive approach enables timely intervention, providing support and resources before issues escalate.
      </Typography>

      <Typography variant="h6" gutterBottom>
        4. Continuous Improvement
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manoveda continuously improves its effectiveness through an iterative process of analyzing user feedback, outcomes data, and evolving research. This ensures that interventions remain relevant, evidence-based, and responsive to students evolving needs.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Components of Manoveda
      </Typography>

      <Typography variant="h6" gutterBottom>
        Awareness Building
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manoveda conducts educational workshops and materials to raise awareness about mental health among students and parents. These sessions cover common disorders, symptoms, and coping strategies, fostering a supportive environment.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Self-Assessment and Educational Modules
      </Typography>
      <Typography variant="body1" gutterBottom>
        Students can perform self-assessments to evaluate their mental and emotional well-being. Educational modules provide knowledge on managing emotions, recognizing signs and symptoms, and implementing coping strategies.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Chat-Based Therapy
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manoveda offers a chat-based therapy platform where students can anonymously connect with licensed therapists. Interactive mental health exercises and self-help tools are available to manage stress, anxiety, and other common mental health challenges.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Feedback and Support
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manoveda provides monthly feedback to counselors and parents, summarizing students mental health status. Urgent feedback is given for critical conditions, ensuring timely intervention and support.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Impact and Reach
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manoveda has significantly impacted the mental health landscape in educational institutions. By reducing diagnosis time and providing timely support, it has helped universities and schools manage their mental health workload effectively, resulting in cost savings and improved student well-being.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Conclusion
      </Typography>
      <Typography variant="body1" gutterBottom>
        Manoveda represents a groundbreaking approach to addressing student mental health challenges. Through AI-powered tools, personalized support, and continuous improvement, Manoveda is transforming how mental health services are delivered in educational settings, making mental health support accessible, timely, and effective for all students.
      </Typography>
    </div>
      </Box>  
    </Container>
  );
};

export default About;