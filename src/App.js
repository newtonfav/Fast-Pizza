import pizzaData from "./data";

export default function App() {
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
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const numPizza = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Authentic italian cuisine, 6 creative dishes to choose from. All
            from our stone oven, All authentic , All Delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza obj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>There are no Pizza available, Please come back later😔</p>
      )}
    </main>
  );
}

function Pizza({ obj }) {
  return (
    <li className={`pizza ${obj.soldOut ? "sold-out" : ""}`}>
      <img src={obj.photoName} alt={obj.name} />
      <div>
        <h3>{obj.name}</h3>
        <p>{obj.ingredients}</p>
        <span>{obj.soldOut ? "SOLD OUT" : obj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHour={closedHour} />
      ) : (
        <p>
          Our opening time is between {openHour}:00 and {closedHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closedHour }) {
  return (
    <div className="order">
      <p>
        We're currently open until {closedHour}:00, you can visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
