import './ExpenseForm.css';

const ExpenseForm=()=>{
    const titlePutHandle=(event)=>{
        console.log(event.target.value);
    }
    const amountPutHandle=(event)=>{
        console.log(event.target.value);
    }
    const datePutHandle=(event)=>{
        console.log(event.target.value);
    }
    return(
        <from>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titlePutHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step='0.01' onChange={amountPutHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2022-01-01' onChange={datePutHandle}/>
                </div>
            </div>
            <div className="new-expense__action">
                   <button type="submit">Add Expense</button>
                </div>
        </from>
    )

}
export default ExpenseForm;