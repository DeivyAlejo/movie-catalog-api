# Movie Catalog API

A RESTful API for managing movies, directors, and genres. Movies can be associated with multiple genres and directors and can be filtered by these relationships.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [Movies](#movies)
  - [Genres](#genres)
  - [Directors](#directors)
- [Filtering Movies](#filtering-movies)
- [Example Request/Response](#example-requestresponse)
- [Notes](#notes)

---

## Features

- Add, edit, delete, and list movies, genres, and directors
- Filter movies by genre or director
- Data stored in MongoDB
- Simple JSON REST API

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 
- [MongoDB](https://www.mongodb.com/) *(local or Atlas)*
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```
   git clone https:https://github.com/DeivyAlejo/movie-catalog-api.git
   cd "to the repositoty"
   ```
2. **Install dependecies**
   ```
   npm install
   ```
3. ***Create a `.env` file in the root directory with your MongoDB URI:***
  ```
  MONGO_URI=mongodb://localhost:27017/moviedb
  PORT=5000
  ```

4. ***Start the server:***
  ```
  npm start server
  ```
## API Endpoints

### Movies
- `GET /api/movies` Get a list of all movies.

  Supports query parameters:
  `genre` (Genre ID): filter movies by genre
  `director` (Director ID): filter movies by director

- `GET /api/movies/:id` Get details for a specific movie by movie ID.

- `POST /api/movies` Create a new movie.
  Request Body
  ```json
  {
    "title": "Movie Title",
    "description": "Movie description",
    "releaseYear": 2023,
    "genres": ["<GENRE_ID>"],
    "directors": ["<DIRECTOR_ID>"]
  }
  ```
  `title` is required.
  `genres` and `directors` are arrays of IDs referencing Genre and Director.

- `PUT /api/movies/:id` Update an existing movie by ID.

- `DELETE /api/movies/:id` Delete a movie by ID.

### Genres

- `GET /api/genres` List all genres.

- `POST /api/genres` Create a new genre.
  Request Body
  ```json
  {
    "name": "Genre Name"
  }
  ```

- `PUT /api/genres/:id` Update a genre by ID.

- `DELETE /api/genres/:id` Delete a genre by ID.

### Directors

- `GET /directors` List all directors.

- `POST /directors` Create a new director.

  Request body:
  ```json
  {
    "name": "Director Name",
    "bod": "YYYY-MM-DD",
    "bio": "Brief biography"
  }
  ```
  `name` is required.
  `bod` is the date of birth.

- `PUT /directors/:id` Update a director by ID.

- `DELETE /directors/:id` Delete a director by ID.

## Filtering Movies
To filter movies by genre or director, use query parameters in the `/api/movies` endpoint:

- By genre:
  ```
  GET /api/movies?genre=<GENRE_ID>
  ```
- By director:
  ```
  GET /api/movies?director=<DIRECTOR_ID>
  ```
- By both:
  ```
  GET /api/movies?genre=<GENRE_ID>&director=<DIRECTOR_ID>
  ```
Both `genre` and `director` should be existing MongoDB ObjectIds from your genres or directors collections.

## Example Request/Response

**Create a new movie**

Request:
```
curl -X POST http://localhost:5000/api/movies -H "Content-Type: application/json" -d '{
  "title": "Inception",
  "description": "A mind-bending thriller",
  "releaseYear": 2010,
  "genres": ["<GENRE_ID>"],
  "directors": ["<DIRECTOR_ID>"]
}'
```

Response:
```json
{
  "_id": "64bb...",
  "title": "Inception",
  "description": "A mind-bending thriller",
  "releaseYear": 2010,
  "genres": [ { "_id": "<GENRE_ID>", "name": "Sci-Fi" } ],
  "directors": [ { "_id": "<DIRECTOR_ID>", "name": "Christopher Nolan", "bod": "1970-07-30", "bio": "..." } ],
  "createdAt": "2023-07-20T13:08:37.953Z"
}
```

## Notes
- All request and response bodies are in JSON.
- Movies can have multiple genres and directors.
- All endpoints are public (no authentication required).
- Replace <GENRE_ID> and <DIRECTOR_ID> with actual IDs from your database.
