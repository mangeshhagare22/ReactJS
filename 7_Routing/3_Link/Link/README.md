React Application with Navigation
This project demonstrates how to implement navigation links in a React application using React Router. It includes various pages such as Dashboard, Customers, and Shopping Cart, and allows navigation between these pages without making server requests, maintaining the single-page application (SPA) behavior.

Features
Navigation Links: Added navigation links for Dashboard, Customers, and Shopping Cart in the navbar.
React Router: Used React Router DOM for handling navigation and routing in the application.
SPA Behavior: Ensured navigation links do not trigger server requests, maintaining SPA behavior.
Styling: Styled navigation links to display horizontally using list items.

Getting Started
Prerequisites
Node.js
npm (Node Package Manager)
Installation
Set up the environment:

Install Node.js: Download and install Node.js from nodejs.org. Prefer using the LTS version for better compatibility.
Install Visual Studio Code: Download and install Visual Studio Code from code.visualstudio.com.

Install Create React App:

Open the command prompt or terminal on your machine.
Run the following command to install Create React App globally:
npm install create-react-app@3.4.1 -g
Create a new React application:

Create a new directory for your React applications:
mkdir c:\react
cd c:\react
Create a new React application:
create-react-app my-first-app
Navigate to the application directory:
cd my-first-app
Install project dependencies:

npm install
Setting Up JSON Server:

Install JSON Server globally:

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

json-server --watch data/react-db.json --port 5000
Running the Application
Start the development server:
npm start
Open your browser and navigate to http://localhost:3000.
Project Structure
src/: Contains the source code.
components/: Contains React components.
Login.jsx: Login component that validates user credentials.
Dashboard.jsx: Dashboard component.
Customers.jsx: Customers component.
Products.jsx: Products component.
NavBar.jsx: Added navigation links.
NoMatchPage.jsx: Component for handling non-existent routes.
App.jsx: Main application component.
index.js: Entry point of the application.
Implementation Details
Basic Routing with React Router
Routing is a mechanism that maps between a component and a URL. Here's how it's implemented in this project:

Setup React Router: Install React Router DOM to handle routing in the application.
npm install react-router-dom --save
Define Routes: Use the Route component to define routes for different components.
BrowserRouter: Wrap the application with BrowserRouter to enable routing.
404 Page: Implement a wildcard route to catch all unmatched URLs and display a custom 404 page.
Example Code
In the App.jsx file:

import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import NoMatchPage from "./NoMatchPage";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {
render() {
return (
<BrowserRouter>
<NavBar />
<Switch>
<Route path="/" exact component={Login} />
<Route path="/dashboard" exact component={Dashboard} />
<Route path="/customers" exact component={CustomersList} />
<Route path="/cart" exact component={ShoppingCart} />
<Route component={NoMatchPage} />
</Switch>
</BrowserRouter>
);
}
}
In the NavBar.jsx file:

import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
render() {
return (
<React.Fragment>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
<a className="navbar-brand" href="/#">
eCommerce
</a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/customers" className="nav-link">
                  Customers
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );

}
}

export default NavBar;
Points to Remember
Understanding Routing in React
Routing Mechanism: Routing maps between a component and a URL. For example, when the URL is /dashboard, the Dashboard component is displayed.
BrowserRouter: A router that uses the HTML5 history API to keep your UI in sync with the URL.
Route: A component that renders a UI component based on the URL path.
Switch: Renders the first child <Route> or <Redirect> that matches the location.
React Router
BrowserRouter: Wraps the entire application to enable routing.
Route: Defines a route that maps a URL path to a component.
Exact Prop: Ensures that the route matches exactly with the URL path.
Additional Notes
Nested Routes: Understand how to implement nested routes for more complex applications.
Route Parameters: Learn how to use route parameters to pass data through the URL.
Redirects: Know how to implement redirects to handle navigation programmatically.
Protected Routes: Implement protected routes to restrict access to certain parts of the application based on user authentication.
404 Page: Ensure a user-friendly experience by handling non-existent routes with a custom 404 page.
License
This project is licensed under the MIT License.

Author
Developed by Mangesh Hagare.