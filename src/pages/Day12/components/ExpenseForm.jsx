const ExpenseForm = ({ expense, handleExpenseChange, addExpenseHandle, isUpdate, editExpenseHandle }) => {
    return (
        <form className="w-full md:w-[70%]">
            <div className="w-full flex items-center gap-5 justify-center">
                <input
                    type="text"
                    placeholder="Add description"
                    name="description"
                    value={expense.description}
                    onChange={handleExpenseChange}
                    className="w-full p-2 border-2 border-black/50 rounded-lg"
                />
                <input
                    type="text"
                    placeholder="Add amount"
                    name="amount"
                    value={expense.amount}
                    onChange={handleExpenseChange}
                    className="w-105 p-2 border-2 border-black/50 rounded-lg"
                />
                <select
                    name="category"
                    value={expense.category}
                    onChange={handleExpenseChange}
                    className="w-fit border-2 border-black/50 rounded-lg p-2"
                >
                    <option value="">Select</option>
                    <option value="transport">Transport</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="shopping">Shopping</option>
                    <option value="food">Food</option>
                    <option value="bills">Bills</option>
                    <option value="others">Others</option>
                </select>
            </div>

            <button
                type="submit"
                onClick={isUpdate ? editExpenseHandle : addExpenseHandle}
                className="w-full mt-2 px-3 py-2 cursor-pointer bg-blue-600 rounded-lg hover:shadow transition text-white font-semibold"
            >
                {isUpdate ? 'Update' : 'Add'} Expense
            </button>
        </form>
    );
};

export default ExpenseForm;