import "./ExpenceItem.css"

function ExpenceItem(props) {

  // const expenseDate=new Date(2023,2,23)
  // const expenceTitle="Car Insurance"
  // const expenseAmpont =294.67
  // const locationOfExpenditure="pune"

  return (
    <div className="expense-item">
      <div>{props.date}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p>{props.location}</p>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenceItem;
