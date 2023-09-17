# Learning Management System (LMS) Platform

This project provides the backend APIs and services for a Learning Management System (LMS), designed to cater to educational institutions and e-learning platforms. The system supports course management, user management, assignments, quizzes, internship and other essential LMS features.

This repository the backend APIs for an LMS (Learning Management System) platform built using Express, MongoDB, and Node.js. These APIs provide the necessary functionality to manage courses, enrollments, users, and other related resources within the LMS platform.

## Features

* **User Management** : Register, login, and manage user profiles.
* **Course Management** : Create, update, delete, and view courses.
* **Assignment Management** : Assign and grade assignments.
* **Quiz Management** : Create quizzes, manage questions, and grade student responses.
* **Enrollment** : Students can enroll in courses.
* **Notifications** : Notify students about upcoming assignments and quizzes.
* Support for multimedia content (videos, slideshows).
* Real-time chat and forums for student discussions.

## Prerequisites

Before you can run the LMS Platform APIs, make sure you have the following prerequisites installed on your system:

* Node.js v14 or above.
* MongoDB v4.4 or above.
* Redis v6.0 or above (for caching and sessions).

To get started with the LMS Platform APIs, follow these steps:

## Setup & Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/ochosteve08/EdTech-API.git
   ```
2. Navigate to the project directory:

   ```shell
   cd edTech-API
   ```
3. Install the dependencies:

   ```shell
   npm install
   ```
4. Create a `.env` file in the root of the project and provide the following configuration:

   ```plaintext
   DATABASE_URL=mongodb://localhost:27017/lms
   REDIS_URL=redis://127.0.0.1:6379
   JWT_SECRET=your_jwt_secret
   PORT = 3500
   ```

   Note: Adjust the values according to your desired configuration.
5. Start the server:

   ```shell
   npm run dev
   ```

   The server should now be running at `http://localhost:3500`.

## API Documentation

The LMS Platform APIs follow RESTful principles and provide the following endpoints:

- **GET /courses**: Retrieve a list of all courses.
- **GET /courses/:id**: Retrieve a specific course by its ID.
- **POST /courses**: Create a new course.
- **PUT /courses/:id**: Update an existing course.
- **DELETE /courses/:Id**: Delete a course.
- **GET /enrollments**: Retrieve a list of all enrollments.
- **GET /enrollments/:id**: Retrieve a specific enrollment by its ID.
- **POST /enrollments**: Create a new enrollment.
- **PUT /enrollments/:Id**: Update an existing enrollment.
- **DELETE /enrollments/:Id**: Delete an enrollment.
- **GET /users**: Retrieve a list of all users.
- **GET /users/:id**: Retrieve a specific user by their ID.
- **POST /users**: Create a new user.
- **PUT /users/:id**: Update an existing user.
- **DELETE /users/:Id**: Delete a user.
- **GET /internships**: Retrieve a list of all internships.
- **GET /internships/:id**: Retrieve a specific internship by its ID.
- **POST /internships**: Create a new internship.
- **PUT /internships/:Id**: Update an existing internship.
- **DELETE /internships/:id**: Delete an internship.
- **GET /assignments**: Retrieve a list of all assignments.
- **GET /assignments/:id**: Retrieve a specific assignment by its ID.
- **POST /assignments**: Create a new assignment.
- **PUT /assignments/:id**: Update an existing assignment.
- **DELETE /assignments/:id**: Delete an assignment.
- **GET /assignment-feedbacks**: Retrieve a list of all assignment feedbacks.
- **GET /assignment-feedbacks/:id**: Retrieve a specific assignment feedback by its ID.
- **POST /assignment-feedbacks**: Create a new assignment feedback.
- **PUT /assignment-feedbacks/:id**: Update an existing assignment feedback.
- **DELETE /assignment-feedbacks/:id**: Delete an assignment feedback.
- **GET /course-assignments**: Retrieve a list of all course assignments.
- **GET /course-assignments/:id


## License

[MIT](https://choosealicense.com/licenses/mit/)
