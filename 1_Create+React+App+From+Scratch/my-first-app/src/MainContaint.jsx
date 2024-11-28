import { Component } from "react";

export default class MainContent extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Mangesh",
        phone: "123-456",
        address: { city: "New Mumbai" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Raj",
        phone: "456-789",
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Ajay",
        phone: "567-566",
        address: { city: "Mumbai" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Santu",
        phone: "",
        address: { city: "Pune" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "Hem",
        phone: "",
        address: { city: "Nagpur" },
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  customerNameStyle = (custName) => {
    if (custName.startsWith("M")) return "green-highlight border-left";
    else if (custName.startsWith("S")) return "red-highlight border-right";
    else return "";
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
        <table className="table">
          <thead>
            <th>#</th>
            <th>Photo</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>City</th>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  //Executes when the user clicks on Refresh button
  onRefreshClick = () => {
    console.log("Refresh clicked");
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          {/*Render css classes- <td className={this.customerNameStyle(cust.name)}>{cust.name}</td>*/}
          <td>{cust.name}</td>
          <td>
            {/* Render Data Conditionally and by calling methode  
              {cust.phone ? (
                cust.phone
              ) : (
                <div className="bg-warning p-2 text-center">No Phone</div>
              )} 
               */}
            {this.getPhoneToRender(cust.phone)}
          </td>
          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  //Executes when the user clicks on "Change Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    //console.log(cust);
    //console.log(index);

    //get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/1019/60";

    //update "customers" array in the state
    this.setState({ customers: custArr });
  };
}
