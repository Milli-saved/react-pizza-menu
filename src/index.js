import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "img/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "img/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "img/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "img/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "img/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "img/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <menu className="menu">
      <h2>Our Menu</h2>
      {pizzaData.map((eachPizzaData) => {
        return (
          // <div>
          //   <h1>{eachPizzaData.name}</h1>
          //   <p>{eachPizzaData.ingredients}</p>
          //   <p>{eachPizzaData.price}</p>
          //   <img
          //     src={`${eachPizzaData.photoName}`}
          //     alt={`${eachPizzaData.photoName}`}
          //   />
          // </div>
          <Pizza
            name={eachPizzaData.name}
            ingredients={eachPizzaData.ingredients}
            pImg={eachPizzaData.photoName}
            price={eachPizzaData.price}
          />
        );
      })}
    </menu>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pImg} alt="pizza" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{ props.price }</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We'r currently open!
    </footer>
  );
  // return React.createElement('footer', null, "we'r currently open.")
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
