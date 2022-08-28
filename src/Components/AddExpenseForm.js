import React, { useContext, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import{ v4 as  uuidv4} from 'uuid';
const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);
	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {
        event.preventDefault();

		const expense = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label for='name-1'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name-1'
						value={name}
						onChange={(event) => setName(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<label for='cost-1'>Cost</label>
					<input
						required='required'
						type='number'
						className='form-control'
						id='cost-1'
						value={cost}
						onChange={(event) => setCost(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddExpenseForm;