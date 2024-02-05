import ExpenceItem from "./components/ExpenceItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "pune",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12),location: "pune" },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "pune",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "pune",
    },
  ];

  let data = [];
  for (let i = 0; i < expenses.length; i++) {
    data.push(
      <ExpenceItem
        title={expenses[i].title}
        amount={expenses[i].amount}
        date={expenses[i].date.toISOString()}
        location={expenses[i].location}
      ></ExpenceItem>
    );
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      {data}
    </div>
  );
}

export default App;
