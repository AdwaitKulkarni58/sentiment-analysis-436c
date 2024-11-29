# Sentiment Analysis Rate UBC Courses

This project is an end-to-end solution designed for UBC Computer Science students. It collects user reviews, analyzes their sentiments, and summarizes each course's feedback using visualizations and modern machine learning models. The application provides an intuitive interface for real-time sentiment visualization, detailed analytics, and summary generation.  
<hr></hr>  

# Table of Contents:  
[Team Members](#Team%20Members)  
[Features](#Features)    
[Architecture](#Architecture)  
[Setup](#Setup)  
[Usage](#Usage)  
[Technologies](#Technologies)  
[Future Enhancements](#Future%20Enhancements)  
[Contributing](#Contributing)  
[License](#License)  

[Jump to Bottom ↓](#License)  
<hr></hr>

# Team Members:  
- Adwait Kulkarni
- Rebecca Lee
- Dominic Lo
- Sana Al-Jumaily
- Zackarya Hamza
<hr></hr>
  
# Features:  
### Sentiment Analysis:  
AWS Comprehend, a cloud-based sentiment analysis service, classifies reviews into Positive, Negative, Neutral, or Mixed sentiments.  
### Summarization:  
Generates concise, accurate summaries of all reviews for each course using a fine-tuned Hugging Face summarization model hosted on AWS SageMaker.  
### Data Visualization:  
- Overall sentiment score out of 5 for each course, with 5 being positive and 1 being negative.  
- Word cloud representation of common terms used in reviews.
- Pie chart showing the count distributions of each sentiment label.  
- Bar chart showing the confidence level of sentiment labels.  
- Real-time updates of sentiment metrics.
<hr></hr>  
  
# Architecture:   
![436c_architecture_diagram](https://github.com/user-attachments/assets/55e0ac06-d43f-4a47-8c49-8471c979ef8b)  
### Frontend:  
- Developed using React, using Recharts for visualization and user interaction.
### Backend:
- A serverless architecture using AWS Lambda functions to handle requests, trigger actions that include sending visualization data from the API Gateway to the front end, and perform database operations.
### Database:  
- Amazon RDS for structured storage of sentiment data, review data, and analysis results.
### Sentiment:  
- AWS Comprehend to analyze sentiment according to 4 sentiment labels and get the confidence level for each label.
### Machine Learning:  
- Review summarization models hosted on AWS SageMaker using text-generation models like Hugging-Face.
<hr></hr>  
  
# Setup:  
### Prerequisites:  
- Node.js (v16 or higher)  
- AWS account with access to S3, Lambda, RDS, Comprehend, and SageMaker  
- Python (v3.9 or higher)
### Steps to follow:  
1) Clone the repository
   ```
   git clone https://github.com/AdwaitKulkarni58/sentiment-analysis-436c  
   cd sentiment-analysis-436c  
   ```
2) Install the dependencies
   ```
   npm install .
   ```
3) Set up AWS services
   - Set up an S3 bucket and RDS database.  
   - Deploy the summarization model to SageMaker.
   - Create necessary IAM roles for Lambda functions.
4) Run the application
   ```
   npm run dev
   ```
<hr></hr>

# Usage:  
1) Submit Reviews:  
- Navigate to the web application and submit reviews for a course.  
2) View Analytics:
- Access sentiment distribution charts and word clouds for comprehensive feedback on a course.  
3) Generate Summaries:  
- Summarized reviews appear on the course details page, providing concise insights into user feedback.
<hr></hr>  

# Technologies:  
### Front-end:  
- React.js, D3.js, React Bootstrap, Recharts  
### Back-end:  
- AWS Lambda, S3 Bucket Storage
### Database:  
- AWS RDS  
### Machine Learning:  
- AWS SageMaker, Hugging-Face  
### Cloud Services:  
- AWS Comprehend, AWS Internet Gateway, Virtual Private Cloud (VPC), AWS Key Management Service, AWS Secrets Manager, AWS Identity and Access Management
<hr></hr>

# Future Enhancements:  
- Integration of additional complex machine learning models for better summary results of individual courses.  
- Provide a more holistic overview of the entire department by looking at all courses and creating a combined faculty result.  
- Ability to register for courses directly from the dashboard, eliminating the need to go to Workday, search for courses separately, and register individually.
<hr></hr>

# Contributing:  
To contribute a new feature to the project or submit a bug:  
1) Fork the repository.
2) Create a feature branch (``` git checkout -b feature-name ```).
3) Commit your changes (``` git commit -m "Add feature-name" ```).
4) Push to the branch (``` git push origin feature-name ```).
5) Submit a Pull Request (PR).
<hr></hr>

# License:  
This project is licensed under the MIT License.  

[Go to Top ↑](##Team%20Members)
