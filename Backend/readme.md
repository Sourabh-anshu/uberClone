# API Documentation

## Endpoint: `/users/register`

### Description
This endpoint is used to register a new user in the system. It validates the input data and creates a new user record in the database.

### Method
`POST`

### Request Body
The following fields are required in the request body:

- `email` (string): Must be a valid email address.
- `password` (string): Must be at least 6 characters long.
- `fullname` (object):
  - `firstname` (string): Must be at least 3 characters long.
  - `lastname` (string): Optional, but if provided, must be at least 3 characters long.

#### Example Request Body
```json
{
  "email": "example@example.com",
  "password": "securepassword",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  }
}
```

### Response Status Codes
- `201 Created`: User successfully registered.
- `400 Bad Request`: Validation error or missing required fields.
- `500 Internal Server Error`: Server encountered an error while processing the request.

### Example Response
- `user` (object):
  - `fullname` (object):
    - `firstname` (string): Must be at least 3 characters long.
    - `lastname` (string): Optional, but if provided, must be at least 3 characters long.
  - `email` (string): Must be a valid email address.
  - `password` (string): Must be at least 6 characters long.
- `token` (String): JWT token

#### Success (201 Created)
```json
{
  "message": "User registered successfully.",
  "user": {
    "id": "unique_user_id",
    "email": "example@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    }
  }
}
```

#### Error (400 Bad Request)
```json
{
  "error": "Invalid Email"
}
```

#### Error (500 Internal Server Error)
```json
{
  "error": "An unexpected error occurred. Please try again later."
}
```

## Endpoint: `/users/login`

### Description
This endpoint is used to authenticate a user and provide a JWT token upon successful login.

### Method
`POST`

### Request Body
The following fields are required in the request body:

- `email` (string): Must be a valid email address.
- `password` (string): Must be at least 6 characters long.

#### Example Request Body
```json
{
  "email": "example@example.com",
  "password": "securepassword"
}
```

### Response Status Codes
- `200 OK`: User successfully authenticated.
- `400 Bad Request`: Validation error or missing required fields.
- `401 Unauthorized`: Invalid email or password.
- `500 Internal Server Error`: Server encountered an error while processing the request.

### Example Response
- `user` (object):
  - `fullname` (object):
    - `firstname` (string): Must be at least 3 characters long.
    - `lastname` (string): Optional, but if provided, must be at least 3 characters long.
  - `email` (string): Must be a valid email address.
  - `password` (string): Must be at least 6 characters long.
- `token` (String): JWT token

#### Success (200 OK)
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "unique_user_id",
    "email": "example@example.com",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    }
  }
}
```

#### Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Error (401 Unauthorized)
```json
{
  "message": "Invalid email or password"
}
```

#### Error (500 Internal Server Error)
```json
{
  "error": "An unexpected error occurred. Please try again later."
}
```

## Endpoint: `/users/profile`

### Description
This endpoint is used to retrieve the profile of the currently authenticated user.

### Method
`GET`

### Headers
- `Authorization` (string): Bearer token for authentication.

### Response Status Codes
- `200 OK`: Successfully retrieved user profile.
- `401 Unauthorized`: User is not authenticated.
- `500 Internal Server Error`: Server encountered an error while processing the request.

### Example Response
- `user` (object):
  - `fullname` (object):
    - `firstname` (string): Must be at least 3 characters long.
    - `lastname` (string): Optional, but if provided, must be at least 3 characters long.
  - `email` (string): Must be a valid email address.

#### Success (200 OK)
```json
{
  "id": "unique_user_id",
  "email": "example@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  }
}
```

#### Error (401 Unauthorized)
```json
{
  "message": "Unauthorized"
}
```

#### Error (500 Internal Server Error)
```json
{
  "error": "An unexpected error occurred. Please try again later."
}
```

## Endpoint: `/users/logout`

### Description
This endpoint is used to log out the currently authenticated user by invalidating their token.

### Method
`GET`

### Headers
- `Authorization` (string): Bearer token for authentication.

### Response Status Codes
- `200 OK`: Successfully logged out.
- `401 Unauthorized`: User is not authenticated.
- `500 Internal Server Error`: Server encountered an error while processing the request.

#### Success (200 OK)
```json
{
  "message": "Logged out"
}
```

#### Error (401 Unauthorized)
```json
{
  "message": "Unauthorized"
}
```

#### Error (500 Internal Server Error)
```json
{
  "error": "An unexpected error occurred. Please try again later."
}
```

## Endpoint: `/captains/register`

### Description
This endpoint is used to register a new captain in the system. It validates the input data and creates a new captain record in the database.

### Method
`POST`

### Request Body
The following fields are required in the request body:

- `email` (string): Must be a valid email address.
- `password` (string): Must be at least 6 characters long.
- `fullname` (object):
  - `firstname` (string): Must be at least 3 characters long.
  - `lastname` (string): Optional, but if provided, must be at least 3 characters long.
- `vehicle` (object):
  - `color` (string): Must be at least 3 characters long.
  - `plate` (string): Must be at least 3 characters long.
  - `capacity` (number): Must be at least 1.
  - `vehicleType` (string): Must be one of `car`, `motorcycle`, or `auto`.

#### Example Request Body
```json
{
  "email": "captain@example.com",
  "password": "securepassword",
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response Status Codes
- `201 Created`: Captain successfully registered.
- `400 Bad Request`: Validation error or missing required fields.
- `500 Internal Server Error`: Server encountered an error while processing the request.

### Example Response
- `captain` (object):
  - `fullname` (object):
    - `firstname` (string): Must be at least 3 characters long.
    - `lastname` (string): Optional, but if provided, must be at least 3 characters long.
  - `email` (string): Must be a valid email address.
  - `vehicle` (object):
    - `color` (string): Must be at least 3 characters long.
    - `plate` (string): Must be at least 3 characters long.
    - `capacity` (number): Must be at least 1.
    - `vehicleType` (string): Must be one of `car`, `motorcycle`, or `auto`.
- `token` (String): JWT token

#### Success (201 Created)
```json
{
  "token": "jwt_token_here",
  "captain": {
    "id": "unique_captain_id",
    "email": "captain@example.com",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

#### Error (500 Internal Server Error)
```json
{
  "error": "An unexpected error occurred. Please try again later."
}
```
