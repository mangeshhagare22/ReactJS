# React Dynamic Login with JSON Server

This project demonstrates how to implement a dynamic login form in a React application using JSON Server to simulate a backend. It showcases the use of async/await for making HTTP requests and validating user credentials.

## Features

- **Dynamic Login**: Validate user credentials by making HTTP requests to a JSON Server.
- **Async/Await**: Simplifies the syntax for handling promises in JavaScript.
- **JSON Server**: Simulate a backend server using a JSON file as a database.
- **Fetch API**: Use the Fetch API to make HTTP requests and handle responses.
- **Conditional Rendering**: Display success or error messages based on the login response.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:

   git clone <repository>
   Navigate to the project directory:
   ex: cd react-shopping-cart
   Install dependencies:
   npm install
   Setting Up JSON Server
   Install JSON Server globally:

   ```

   ```

npm install -g json-server
Create a JSON file to act as a database:

Create a folder named data in the project directory.
Inside the data folder, create a file named react-db.json.
Add the following content to react-db.json:
{
"products": [
{ "id": 1, "productName": "iPhone", "price": 8900, "quantity": 0 },
{ "id": 2, "productName": "Sony Camera", "price": 4500, "quantity": 0 },
{ "id": 3, "productName": "Samsung QLED TV", "price": 7745, "quantity": 0 },
{ "id": 4, "productName": "iPad Pro", "price": 12400, "quantity": 0 },
{ "id": 5, "productName": "Xbox", "price": 7780, "quantity": 0 },
{ "id": 6, "productName": "Dell Monitor", "price": 880, "quantity": 0 }
],
"users": [
{ "id": 1, "email": "mangesh@test.com", "password": "mangesh123" },
{ "id": 2, "email": "allen@test.com", "password": "allen123" }
]
}
Start JSON Server:

npx json-server react-db.json --watch --port=5000
Running the Application
Start the development server:
npm start
Open your browser and navigate to http://localhost:3000.
Project Structure
src/: Contains the source code.
components/: Contains React components.
Login.jsx: Login component that validates user credentials.
App.jsx: Main application component.
index.js: Entry point of the application.
Implementation Details
Dynamic Login with Async/Await
Using async/await simplifies the syntax for handling promises in JavaScript. Here's how it's implemented in this project:

Setup JSON Server: JSON Server is used to simulate a backend server. It uses a JSON file as a database.
Fetch Data: The Login component makes an HTTP GET request to validate user credentials using async/await.
Update State: Based on the response, the component's state is updated to display success or error messages.
Example Code
In the Login.jsx file:

import React, { Component } from "react";

export default class Login extends Component {
constructor(props) {
super(props);
this.state = { email: "", password: "", message: "" };
}

render() {
return (

<div className="col-lg-9">
<h4 className="m-1 p-2 border-bottom">Login</h4>

        {/* Email starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Email:</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        {/* Email ends */}

        {/* Password starts */}
        <div className="form-group form-row">
          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          />
        </div>
        {/* Password ends */}

        <div className="text-right">
          {this.state.message}

          <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );

} //end of render

//Executes when the user clicks on Login
onLoginClick = async () => {
console.log(this.state);

    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );

    var body = await response.json();
    console.log(body);

    if (body.length > 0) {
      //success
      this.setState({
        message: <span className="text-success">Successfully Logged-in</span>,
      });
    } else {
      //error
      this.setState({
        message: (
          <span className="text-danger">Invalid login, please try again</span>
        ),
      });
    }

};
}

Output Screenshots
please check src/asset folder
o/p msg:
Successful Login
!Successful Login

Invalid Login
!Invalid Login

License
This project is licensed under the MIT License.

Author
Developed by Mangesh Hagare.
