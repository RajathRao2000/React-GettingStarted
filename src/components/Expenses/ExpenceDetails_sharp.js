import "./ExpenseItem.css";

function ExpenceDetails(props) {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <p>{props.location}</p>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenceDetails;
