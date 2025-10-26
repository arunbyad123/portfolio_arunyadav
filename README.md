🚀 Personal Portfolio Website
A modern, interactive, and visually stunning portfolio website built with React. Features include a 3D skills galaxy, animated education timeline, project showcase, and a functional contact form.

Features:
3D Skills Galaxy - Interactive solar system visualization of technical skills
Animated Education Timeline - Flip cards with beautiful transitions
Project Showcase - Dynamic project cards with hover effects
Certificates Section - Achievement showcase with celebration modals
Working Contact Form - Integrated with EmailJS for real-time email notifications
Smooth Animations - Custom animations throughout the site
Fully Responsive - Works seamlessly on all devices

Tech Stack:
Frontend: React.js
Styling: CSS3 with custom animations
Email Service: EmailJS
Hosting: Vercel / Netlify (recommended)

📦 Installation
Prerequisites

Node.js (v14 or higher)
npm or yarn
Git

Step 1: Clone the Repository
bashgit clone https://github.com/yourusername/portfolio.git
cd portfolio

Step 2: Install Dependencies
bashnpm install
Or if you use yarn:
bashyarn install

Step 3: Set Up EmailJS
Create an EmailJS Account

Go to EmailJS
Sign up for a free account


Add Email Service:
Go to Email Services in the dashboard
Click Add New Service
Choose Gmail (recommended) or any other provider
Follow the connection steps
Copy your Service ID (e.g., service_xxxxx)


Create Email Template

Go to Email Templates
Click Create New Template
Use this template structure:

Subject: New Message from {{from_name}}
You have received a new message from your portfolio contact form:
Name: {{from_name}}
Email: {{from_email}}
Message:
   {{message}}
   This email was sent from your portfolio contact form.
Save the template and copy your Template ID (e.g., template_xxxxx)


Get Your Public Key
Go to Account → General
Copy your Public Key (e.g., U-xxxxxxxxxx)


Update Contact Component

Open src/components/Contact.jsx
Replace the EmailJS credentials:



javascript   const result = await emailjs.send(
     'YOUR_SERVICE_ID',        // Replace with your Service ID
     'YOUR_TEMPLATE_ID',       // Replace with your Template ID
     {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message,
       to_email: 'your-email@gmail.com'  // Your email address
     },
     'YOUR_PUBLIC_KEY'         // Replace with your Public Key
   );

   
Step 4: Customize Content
Update Personal Information

Hero Section (src/components/Hero.jsx)

Update name, title, and skills


About Section (src/components/About.jsx)

Add your profile image to src/assets/
Update description and stats


Skills Section (src/components/Skills.jsx)

Modify skills array with your technologies
Update projects for each skill


Projects Section (src/components/Projects.jsx)

Add your projects with live links and GitHub repos


Education Section (src/components/Education.jsx)

Update with your educational background


Certificates Section (src/components/Certificates.jsx)

Add your certificates with verification links


Contact Section (src/components/Contact.jsx)

Update contact information (email, phone, location)
Update social media links


Footer (src/components/Footer.jsx)

Update copyright and social links



Step 5: Run Development Server
bashnpm run dev
Or with yarn:
bashyarn dev
The site will be available at http://localhost:5173
🚀 Deployment
Deploy to Vercel (Recommended)

Push your code to GitHub
Go to Vercel
Click New Project
Import your GitHub repository
Configure build settings:

Framework Preset: Vite
Build Command: npm run build
Output Directory: dist


Click Deploy

Deploy to Netlify

Push your code to GitHub
Go to Netlify
Click Add new site → Import an existing project
Connect your GitHub repository
Configure build settings:

Build Command: npm run build
Publish Directory: dist


Click Deploy site

📧 EmailJS Configuration Details
Service Configuration

Service ID: Found in Email Services section
Template ID: Found in Email Templates section
Public Key: Found in Account → General

Template Variables
Make sure your EmailJS template includes these variables:

{{from_name}} - Sender's name
{{from_email}} - Sender's email
{{message}} - Message content
{{to_email}} - Your email (optional, can be set in service)

Testing Email Functionality

Run the development server
Navigate to the Contact section
Fill out the form with test data
Click "Send Message"
Check your email inbox for the test message

Troubleshooting Email Issues
Problem: Emails not sending

Verify all EmailJS credentials are correct
Check browser console for error messages
Ensure EmailJS service is properly connected
Check spam folder for test emails

Problem: CORS errors

Make sure you're using the correct Public Key
Verify your domain is authorized in EmailJS settings