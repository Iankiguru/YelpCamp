# YelpCamp Portfolio Project

## Overview

YelpCamp is a comprehensive web application that allows users to discover, share, and review campgrounds. This project was developed as part of a portfolio project by a team comprising Ian Kiguru and Humphrey. The application is built using Node.js, Express, MongoDB, and Bootstrap for a seamless user experience.

## Features

- **Campground Management:** Users can create, edit, and remove campgrounds, providing detailed information and images.
  
- **Campground Reviews:** Leave and edit reviews for campgrounds, fostering a community-driven platform for camping enthusiasts.

- **User Profiles:** User profiles include essential information, showcasing the campgrounds they've shared and the option to edit their profile or delete their account.

- **Search and Sorting:** Search campgrounds by name or location, and sort them based on rating, reviews, and pricing.

## Project Structure

- **Front-end:** Built with Bootstrap for responsive design and a user-friendly interface.
  
- **Back-end:** Utilizes Node.js and Express to handle server-side logic, with MongoDB as the database.

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-username/yelpcamp.git
   ```
2. Navigate to the project directory:
   ```
   cd yelpcamp
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add the following:
   ```
   DATABASEURL='<your-mongodb-url>'
   API_KEY='<your-cloudinary-api-key>'
   API_SECRET='<your-cloudinary-api-secret>'
   ```
5. Start the application:
   ```
   node app.js
   ```
6. Open your web browser and go to `http://localhost:3000`.

## API Routes

- `/api/campgrounds`
  - `GET`: Retrieve a list of campgrounds.
  - `POST`: Create a new campground.
- `/api/campgrounds/:id`
  - `GET`: Retrieve details of a specific campground.
  - `PUT`: Update information for a specific campground.
  - `DELETE`: Delete a specific campground.
- `/api/reviews`
  - `GET`: Retrieve a list of reviews.
  - `POST`: Create a new review.
- `/api/users`
  - `GET`: Retrieve user profiles.
  - `POST`: Create a new user profile.
- `/api/register`
  - `POST`: Register a new user account.
- `/api/login`
  - `POST`: Log in to an existing user account.

## Data Model

![Data Model Diagram](insert-link-to-data-model-diagram)

- **Campgrounds Collection:** Stores information about campgrounds.
- **Reviews Collection:** Contains user reviews for campgrounds.
- **Users Collection:** Stores user profiles.

## User Stories

1. **User Registration:**
   - As a user, I want to register an account on YelpCamp.

2. **User Authentication:**
   - As a registered user, I want to log in to my account.

3. **View Campgrounds:**
   - As a visitor, I want to view a list of campgrounds.

4. **View Campground Details:**
   - As a visitor, I want to view the details of a specific campground.

5. **View Reviews:**
   - As a visitor, I want to see reviews for a campground.

## Contributors

- Ian Kiguru

## Acknowledgments

Special thanks to Colt Steele for the inspiration from the web development course on Udemy.

---

*This README provides an overview of the YelpCamp Portfolio Project, its features, installation guide, API routes, data model, user stories, and mockups. For a more detailed view, refer to the project repository and associated documents.*
