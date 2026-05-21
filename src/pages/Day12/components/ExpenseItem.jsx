import { FaPenToSquare } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";

const ExpenseItem = ({ expenseData, onDelete, onEdit }) => {
    return (
        <div className="w-full border-2 border-black/10 rounded-xl px-4 p-3 bg-blue-50 flex gap-5 items-center justify-between">
            <p className="font-semibold text-lg w-full flex justify-start items-center capitalize">{expenseData.description}</p>
            <p className="text-gray-700 font-semibold w-full flex justify-start items-center">₹{expenseData.amount}</p>
            <p className="text-purple-500 font-semibold capitalize w-full flex justify-start items-center">{expenseData.category}</p>
            <p className="font-semibold text-green-500 w-full flex justify-start items-center">{expenseData.date}</p>

            <div className="w-fit flex gap-3 items-center justify-center">
                <button
                    title="edit"
                    onClick={() => onEdit(expenseData.id)}
                    className="w-7 h-7 rounded-lg p-1 cursor-pointer hover:shadow-xs bg-white border-blue-500 text-blue-500 border-2 flex justify-center items-center"
                >
                    <FaPenToSquare size={24} />
                </button>
                <button
                    title="delete"
                    onClick={() => onDelete(expenseData.id)}
                    className="w-7 h-7 rounded-lg p-1 cursor-pointer hover:shadow-xs bg-white border-red-500 text-red-500 border-2 flex justify-center items-center"
                >
                    <RiDeleteBin5Line size={24} />
                </button>
            </div>
        </div>
    );
};

export default ExpenseItem;