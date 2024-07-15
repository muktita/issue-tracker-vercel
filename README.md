# Issue Tracker App

A comprehensive Issue Tracker application designed to help teams efficiently manage their projects and tasks.

## Table of Contents

- [Summary](#summary)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)

## Summary

The Issue Tracker App is a powerful tool that enables teams to track, manage, and resolve issues within their projects. With features like issue assignment, progress tracking, and real-time notifications, it streamlines project management and enhances team collaboration.

## Features

- **User Authentication:** Secure user registration and login.
- **Issue Management:** Create, update, delete, and assign issues.
- **Project Tracking:** Monitor the progress of projects and tasks.
- **Real-Time Notifications:** Stay updated with instant notifications.
- **Commenting System:** Collaborate by discussing issues within the app.
- **Search Functionality:** Easily find issues and projects.
- **Responsive Design:** Optimized for use on any device.

## Technologies
- **Frontend:** React.js, Redux
- **Backend**: Node.js, Express.js
- **Database**: MySQL with Prisma
- **Authentication**: JGoolge Cloud, JWT
- **Styling**: RadixUI, CSS, Bootstrap


## Installation

To set up the project locally, follow these steps:

### Prerequisites

- Node.js and npm installed
- MySQL database

### Steps

1. Clone the repository
   ```sh
   git clone https://github.com/muktita/issue-tracker-app.git
   cd issue-tracker-app
2. Install dependencies
   ```sh
   npm i
3. Set up environment variables by creating a .env file in the root directory
   ```sh
   DATABASE_URL=mysql://user:password@localhost:3306/issue-tracker
   JWT_SECRET=your_jwt_secret
4. Set up the database using Prisma
   ```sh
   npx prisma migrate dev --name init
   npx prisma db seed
5. Start the application
   ```sh
   npm start

   
