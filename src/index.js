import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h1>Hello React!</h1>
      {/* <Aveater />
      <Intro />
      <SkillList /> */}
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
////////// CREAT CARD
// function Aveater() {
//   return (
//     <div>
//       <img src="pizza/funghi.jpg" alt="Funghi Pizza" />
//     </div>
//   );
// }

// function Intro() {
//   return (
//     <div>
//       <h1>Upgrade Ortega</h1>
//       <p>
//         I'm a web developer, 34 year's old, pushing hard to achieve my dreams
//       </p>
//     </div>
//   );
// }
// function SkillList() {
//   return (
//     <div>
//       <Skills name="Javascript" emoji="✔" color="blue" />
//       <Skills name="React" emoji="🤞" color="red" />
//       <Skills name="Python" emoji="🤞" color="yellow" />
//       <Skills name="Html" emoji="😎" color="orange" />
//     </div>
//   );
// }

// function Skills(props) {
//   return (
//     <div style={{ backgroundColor: props.color }}>
//       <h2>
//         <span> {props.name}</span>
//         <span>{props.emoji}</span>
//       </h2>
//     </div>
//   );
// }

function Header() {
  return (
    <div className="header">
      <h1>Ortega Resturant</h1>
    </div>
  );
}
function Menu() {
  const pizza = pizzaData;
  //   const pizza = [];
  const numPizzas = pizza.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizza.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>
          We're still on our menu. come back later<span>🙌</span>
        </p>
      )}

      {/* <Pizza
        name="Margherita Pizza"
        ingredients="Tomato and mozarella"
        photoName="pizzas/Margherita.jpg"
        price={40}
      />
      <Pizza
        name="MSpinaci Pizza"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/Spinaci.jpg"
        price={39}
      />
      <Pizza
        name="Funghi Pizza"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  //   if (hour >= openHour && hour <= closeHour) alert("We're open");
  //   else alert("we're Closed");
  return (
    <footer className="footer">
      {/* <h2>Footer</h2>
      <p>{new Date().toLocaleTimeString()} We're op </p> */}
      {isOpen ? (
        <Order />
      ) : (
        <p>
          We're ready to wellcome you between {openHour} :00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  function Order() {
    return (
      <div className="order">
        <p>
          {new Date().toLocaleTimeString()} We're open until {closeHour}:00.
          Come visit us or oder online.
        </p>
        <button className="btn">Order</button>
      </div>
    );
  }
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
