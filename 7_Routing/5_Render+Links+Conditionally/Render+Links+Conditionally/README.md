# React Application with Navigation

This project demonstrates Conditional Rendering of Navigation Links & Displayed navigation links based on the user's login status. It includes various pages such as Dashboard, Customers, and Shopping Cart, and allows navigation between these pages without making server requests, maintaining the single-page application (SPA) behavior.

## Features

- **Navigation Links**: Added navigation links for Dashboard, Customers, and Shopping Cart in the navbar.
- **React Router**: Used React Router DOM for handling navigation and routing in the application.
- **SPA Behavior**: Ensured navigation links do not trigger server requests, maintaining SPA behavior.
- **Styling**: Styled navigation links to display horizontally using list items.
- **Active Link Highlighting**: Highlighted the active route using `NavLink` and `activeClassName`.
- **Conditional Rendering**: Displayed navigation links based on the user's login status.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

Set up the environment:

1. **Install Node.js**: Download and install Node.js from nodejs.org. Prefer using the LTS version for better compatibility.
2. **Install Visual Studio Code**: Download and install Visual Studio Code from code.visualstudio.com.

Install Create React App:

1. Open the command prompt or terminal on your machine.
2. Run the following command to install Create React App globally:
   ```bash
   npm install create-react-app@3.4.1 -g
   Create a new React application:
   ```

Create a new directory for your React applications:
mkdir c:\react
cd c:\react
Create a new React application:
create-react-app my-first-app
Navigate to the application directory:
cd my-first-app
Install project dependencies:

npm install
Setting Up JSON Server
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
Highlighting Active Links
To highlight the active route, we use the NavLink component from React Router DOM instead of Link. The NavLink component allows us to apply a CSS class to the active link using the activeClassName property.

Replace Link with NavLink: Wherever Link was used, replace it with NavLink.
Apply activeClassName: Use the activeClassName property to apply a CSS class when the route path matches the URL.

## Conditional Rendering of Navigation Links

Conditional Rendering of Navigation Links
To display navigation links based on the user's login status, we use conditional rendering in the NavBar component. The isLoggedIn state is managed in the App component and passed down to NavBar as a prop.

Add isLoggedIn state in App.jsx:

class App extends Component {
constructor(props) {
super(props);
this.state = {
isLoggedIn: false
};
}

// Method to update login status
handleLogin = () => {
this.setState({ isLoggedIn: true });
};

render() {
return (
<BrowserRouter>
<NavBar isLoggedIn={this.state.isLoggedIn} />
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

Conditional rendering in NavBar.jsx:

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {!this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link"
                    activeClassName="active"
                    exact={true}
                  >
                    Login
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/dashboard"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : (
                ""
              )}

### This project is licensed under the MIT License.

# Author

Developed by Mangesh Hagare.
