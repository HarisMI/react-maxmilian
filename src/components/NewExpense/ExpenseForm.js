import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

	const [EnteredTitle, setEnteredTitle] = useState('');
	const [EnteredAmount, setEnteredAmount] = useState('');
	const [EnteredDate, setEnteredDate] = useState('');

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	}

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	}

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	}

	const submitHandler = (event) => {
		event.preventDefault();

		const data = {
			title : EnteredTitle,
			amount : EnteredAmount,
			date : new Date(EnteredDate)
		}
		
		props.onSaveExpense(data);

		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
		
	};

	return (
		<form onSubmit={submitHandler} >
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={EnteredTitle} onChange={titleChangeHandler} />
				</div>

				<div className="new-expense__control">
					<label>Amount</label>
					<input type="number" min="0.01" step="0.01" value={EnteredAmount} onChange={amountChangeHandler} />
				</div>

				<div className="new-expense__control">
					<label>Date</label>
					<input type="date" min="2019-01-01" max="2022-12-31" value={EnteredDate} onChange={dateChangeHandler}/>
				</div>
			</div>

			<div className="new-expense__actions">
				<button type="submit">Add</button>
			</div>
		</form>
	);
}

export default ExpenseForm;