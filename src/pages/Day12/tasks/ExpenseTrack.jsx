import { useEffect, useState } from "react";

import ExpenseItem from "../components/ExpenseItem";
import ExpenseForm from "../components/ExpenseForm";

const ExpenseTrack = () => {

    const [expense, setExpense] = useState({
        description: "",
        amount: "",
        category: "",
    });
    const [expensesData, setExpensesData] = useState(JSON.parse(localStorage.getItem('expenses')) || []);
    const [isUpdate, setIsUpdate] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expensesData));
    }, [expensesData]);

    const handleExpenseChange = (e) => {
        const { name, value } = e.target;

        setExpense({
            ...expense,
            [name]: value,
        });
    };

    const addExpenseHandle = (e) => {
        e.preventDefault();

        if (!expense.description && !expense.amount && !expense.category === "") return;

        setExpensesData(
            [...expensesData, { ...expense, id: Date.now(), date: new Date().toDateString() }]
        );

        setExpense({
            description: "",
            amount: "",
            category: "",
        });
    };

    const deleteExpenseHandle = (id) => {
        if (confirm("Are youre want to delete?")) {
            setExpensesData(expensesData.filter((data) => data.id != id));
        }
    };

    const editingExpense = (id) => {
        const editingExpense = expensesData.find((data) => data.id === id);
        setExpense(editingExpense);
        setIsUpdate(true);
    };

    const editExpenseHandle = (e) => {
        e.preventDefault();

        const { id, description, amount, category } = expense;

        setExpensesData(
            expensesData.map((data) => (
                data.id === id ?
                    {
                        ...data,
                        description: description,
                        amount: amount,
                        category: category
                    } :
                    data
            ))
        );

        setExpense({
            description: "",
            amount: "",
            category: "",
        });
        setIsUpdate(false);
    };

    const totalExpenses = expensesData.reduce((acc, expense) => {
        return acc + parseInt(expense.amount);
    }, 0);

    const filteredExpenses = expensesData.filter((data) => (
        data.description.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    ));

    return (
        <div className="w-full py-10">
            <div className="container mx-auto px-3 md:px-0">

                <div className="w-full flex flex-col justify-center items-center gap-10">
                    <ExpenseForm
                        expense={expense}
                        handleExpenseChange={handleExpenseChange}
                        addExpenseHandle={addExpenseHandle}
                        editExpenseHandle={editExpenseHandle}
                        isUpdate={isUpdate}
                    />

                    {expensesData.length > 0 && <div className="w-full md:w-[70%]">
                        <input
                            type="text"
                            placeholder="Search expenses"
                            className="w-full p-2 border-2 border-black/50 rounded-lg"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>}

                    {expensesData.length > 0 && <div className="w-full md:w-[70%] space-y-3">
                        <h3 className="italic font-bold">Expenses</h3>

                        <div className="w-full flex flex-col justify-center items-center gap-3">
                            {
                                filteredExpenses.map((data, idx) => (
                                    <ExpenseItem
                                        key={data.id + idx}
                                        expenseData={data}
                                        onDelete={deleteExpenseHandle}
                                        onEdit={editingExpense}
                                    />
                                ))
                            }
                        </div>
                    </div>}

                    {expensesData.length > 0 && <div className="w-full md:w-[70%] flex justify-center items-center bg-green-300 rounded-lg p-3">
                        <h2 className="font-semibold">Total Expenses : ₹{totalExpenses}</h2>
                    </div>}

                    {
                        expensesData.length == 0 && <div className="w-full md:w-[70%] flex justify-center items-center bg-gray-100 rounded-lg p-3">
                            <h2 className="font-semibold">No Expenses Found.</h2>
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default ExpenseTrack;