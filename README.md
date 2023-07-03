### My_Movie_api ###


![Static Badge](https://img.shields.io/badge/Learn-Backend-green)
![Static Badge](https://img.shields.io/badge/Learn-MongoDB-yellow)
![Static Badge](https://img.shields.io/badge/MERN-FullStack%20Development-blue)


#Overview

This project is a full-stack JavaScript application developed as part of CareerFoundry's Full-Stack Web Development Course. It demonstrates mastery of full-stack JavaScript development using the MERN stack.

This README provides technical and content-related details about both the server-side and client-side components of the myMovie application. The server-side consists of a REST API, business logic, and a database architecture built using JavaScript, Node.js, Express, and MongoDB.

The myMovie REST API is hosted on Heroku and provides authenticated users with access to movie, director, and genre information. The API supports common HTTP methods (GET, POST, PUT, DELETE) to perform CRUD operations on the database.

#Server-side

##Features
The server-side component of the myMovie application includes the following features:

* Allows users to retrieve a list of all movies in the database
* Provides detailed information about a specific movie by its title
* Offers detailed information about a genre based on its name
* Provides detailed information about a director based on their name
* Enables new users to create user accounts
* Allows existing users to update their user information or delete their account
* Allows users to add or remove movies from their list of favorites

##Dependencies

The server-side component of myMovie relies on the following dependencies:

* bcrypt
* body-parser
* cors
* express
* express-validator
* jsonwebtoken
* mongoose
* morgan
* passport
* passport-jwt
* passport-local
* uuid

##Endpoints
The myMovie API provides the following endpoints:

### GET /movies: 
Retrieves a list of all movies in the database.

### GET /movies/[Title]: 
Retrieves detailed information about a specific movie based on its title.


### GET /movies/genres/[Name]
 Retrieves detailed information about a genre based on its name.

### GET /movies/directors/[Name]: 
Retrieves detailed information about a director based on their name.

### GET /users: 
Retrieves a list of all users.

### GET /users/[Username]: 
Retrieves information about a specific user based on their username.

### POST /users: 
Creates a new user account.


### PUT /users/[Username]: 
Updates user information based on their username.


### POST /users/[Username]/Movies/[MovieID]: 
Adds a movie to a user's list of favorites.

### DELETE /users/[Username]/Movies/[MovieID]:
Removes a movie from a user's list of favorites.

### DELETE /users/[Username]: 
Deletes a user account based on their username.


###### Deployed API on Heroku
[myMovie API](https://my-movie-api.herokuapp.com/)
