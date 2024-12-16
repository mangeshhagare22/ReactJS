# React Shopping Cart with AJAX and JSON Server

This project demonstrates how to implement AJAX requests in a React application using JSON Server to simulate a backend. It showcases the use of the Fetch API to make HTTP requests and dynamically update the UI without refreshing the page.

## Features

- **AJAX Requests**: Send HTTP requests in the background and update the UI without refreshing the page.
- **JSON Server**: Simulate a backend server using a JSON file as a database.
- **Fetch API**: Use the Fetch API to make HTTP requests and handle responses.
- **Dynamic Data Loading**: Fetch and display a list of products from the server.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:

   Navigate to the project directory:

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
ShoppingCart.jsx: Shopping cart component that fetches products from the server.
App.jsx: Main application component.
index.js: Entry point of the application.
Implementation Details
AJAX with Fetch API
AJAX is a technique to send HTTP requests in the background and get the response from the server without refreshing the web page. Here's how it's implemented in this project:

Setup JSON Server: JSON Server is used to simulate a backend server. It uses a JSON file as a database.
Fetch Data: The ShoppingCart component makes an HTTP GET request to fetch the list of products from the JSON Server.
Update State: The fetched data is used to update the component's state, which triggers a re-render to display the products.
Example Code
In the ShoppingCart.jsx file:

//Executes after constructor and render method (includes life cycle of child components, if any) of current component
componentDidMount() {
//fetch data from data source

    var promise = fetch("http://localhost:5000/products", { method: "GET" });
    promise.then((response) => {
      console.log(response);

      var promise2 = response.json();
      promise2.then((prods) => {
        console.log(prods);

        this.setState({ products: prods });
      });
    });
    //console.log("componentDidMount - ShoppingCart");

}

Output Screenshots
--please refer src/assets folder

License
This project is licensed under the MIT License.

Author
Developed by Mangesh Hagare.
