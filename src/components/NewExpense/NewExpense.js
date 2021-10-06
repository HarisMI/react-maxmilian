import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


const NewExpenses = (props) => {

	const saveExpenseHandler = (dataExpense) => {

		const data = {
			...dataExpense,
			id : Math.random().toString()	
		};
		
		console.log('in new Expenses');
		props.onAddExpenseData(dataExpense);
	};

	return (
				<div className="new-expense" > 
					<ExpenseForm onSaveExpense={saveExpenseHandler} /> 
				</div>
			);
}

export default NewExpenses;