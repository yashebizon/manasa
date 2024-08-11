import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

function PrivacyPolicy() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Privacy Policy for Manoveda
      </Typography>

      <Typography variant="h5" gutterBottom>
        Introduction
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to Manoveda, an AI-Based Mental Health Project for Students developed by Intouch AI in association with Manoveda. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines our practices regarding the collection, use, and protection of your information.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Information We Collect
      </Typography>
      <Typography variant="h6" gutterBottom>
        1. Personal Information
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Name" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Age" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Contact details (email address, phone number)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Educational institution details" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        2. Mental Health Data
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Self-assessment results" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Chat-based therapy interactions" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Feedback from counselors and therapists" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        3. Usage Data
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Device information (IP address, browser type, operating system)" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Access times and dates" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Pages viewed and actions taken on the platform" />
        </ListItem>
      </List>

      <Typography variant="h5" gutterBottom>
        How We Use Your Information
      </Typography>
      <Typography variant="h6" gutterBottom>
        1. Provide and Improve Services
      </Typography>
      <Typography variant="body1" paragraph>
        To personalize the user experience and tailor mental health support to individual needs.
      </Typography>
      <Typography variant="body1" paragraph>
        To analyze usage patterns and improve the functionality and performance of our platform.
      </Typography>

      <Typography variant="h6" gutterBottom>
        2. Communication
      </Typography>
      <Typography variant="body1" paragraph>
        To send notifications about updates, new features, and other relevant information.
      </Typography>
      <Typography variant="body1" paragraph>
        To respond to inquiries and provide customer support.
      </Typography>

      <Typography variant="h6" gutterBottom>
        3. Research and Development
      </Typography>
      <Typography variant="body1" paragraph>
        To conduct research and analysis to improve our AI algorithms and mental health interventions.
      </Typography>
      <Typography variant="body1" paragraph>
        To publish anonymized data for academic and clinical research purposes.
      </Typography>

      <Typography variant="h6" gutterBottom>
        4. Legal Compliance
      </Typography>
      <Typography variant="body1" paragraph>
        To comply with legal obligations and respond to lawful requests from public authorities.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Sharing Your Information
      </Typography>
      <Typography variant="h6" gutterBottom>
        1. With Consent
      </Typography>
      <Typography variant="body1" paragraph>
        We will share your personal information with third parties only when we have your explicit consent.
      </Typography>

      <Typography variant="h6" gutterBottom>
        2. Service Providers
      </Typography>
      <Typography variant="body1" paragraph>
        We may share your information with trusted service providers who assist us in operating our platform and delivering services.
      </Typography>

      <Typography variant="h6" gutterBottom>
        3. Legal Requirements
      </Typography>
      <Typography variant="body1" paragraph>
        We may disclose your information to comply with legal obligations or to protect the rights, property, or safety of our users and others.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Data Security
      </Typography>
      <Typography variant="body1" paragraph>
        We implement a variety of security measures to protect your personal information from unauthorized access, use, or disclosure. These measures include encryption, secure socket layer (SSL) technology, and regular security assessments.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Your Rights
      </Typography>
      <Typography variant="h6" gutterBottom>
        1. Access and Update
      </Typography>
      <Typography variant="body1" paragraph>
        You have the right to access and update your personal information at any time through your account settings.
      </Typography>

      <Typography variant="h6" gutterBottom>
        2. Deletion
      </Typography>
      <Typography variant="body1" paragraph>
        You may request the deletion of your personal information by contacting us at privacy@manoveda.com.
      </Typography>

      <Typography variant="h6" gutterBottom>
        3. Restriction
      </Typography>
      <Typography variant="body1" paragraph>
        You have the right to restrict the processing of your personal information under certain conditions.
      </Typography>

      <Typography variant="h6" gutterBottom>
        4. Data Portability
      </Typography>
      <Typography variant="body1" paragraph>
        You have the right to receive a copy of your personal data in a structured, commonly used, and machine-readable format.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Changes to This Policy
      </Typography>
      <Typography variant="body1" paragraph>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our platform. You are advised to review this Privacy Policy periodically for any changes.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </Typography>
      <Typography variant="body1" paragraph>
        Email: <a href="mailto:privacy@manoveda.com">privacy@manoveda.com</a>
      </Typography>
      <Typography variant="body1" paragraph>
        Phone: +91 9717729970
      </Typography>
      <Typography variant="body1" paragraph>
        Address: PLOT NO 25, Phase I, Udyog Vihar, Gurugram 122016, India
      </Typography>
    </Container>
  );
}

export default PrivacyPolicy;
