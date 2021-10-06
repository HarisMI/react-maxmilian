  import ExpenseItem from "./ExpenseItem";
  import Card from "../UI/Card";
  import ExpenseFilter from "./ExpensesFilter";
  import "./Expenses.css";
  function Expenses(props){
  
  const filterExpensesHandler = (yearFilter) => {
    
    var ExpenseFilter = props.items.filter(function(expense) {
      const dateExpense = expense.date;
      const yearExpense = dateExpense.getFullYear();

      return yearExpense ===  yearFilter;
    });
    console.log(ExpenseFilter);
  }

  return (
  	<Card className="expenses">
      <ExpenseFilter onFilterExpenses={filterExpensesHandler} />

      <ExpenseItem
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        date={props.items[3].date}
        amount={props.items[3].amount}
      ></ExpenseItem>
    </Card>
  );

 }

 export default Expenses;