import { FaPenToSquare } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";

const NoteItem = ({ noteItem, onDelete, onEdit }) => {
    return (
        <div className="flex flex-col gap-5 relative justify-center items-start bg-blue-50 rounded-xl p-3 px-5">
            <h3 className="font-semibold italic text-2xl">{noteItem.title}</h3>
            <p className="text-gray-800">{noteItem.description}</p>

            <div className="w-full flex gap-3 items-center">
                {
                    noteItem.tags.map((tag, idx) => (
                        <p key={idx} className="px-3 py-1.5 rounded-full text-xs bg-blue-400 text-white uppercase hover:-translate-y-0.5 transition cursor-default">{tag}</p>
                    ))
                }
            </div>

            <div className="flex items-center gap-5">
                <p className="text-sm font-semibold italic text-gray-700">Created: {noteItem.createdAt}</p>
                {noteItem.updatedAt && <p className="text-sm font-semibold italic">Updated: {noteItem?.updatedAt}</p>}
            </div>

            <div className="absolute top-2 right-2 flex gap-3 items-center justify-center">
                <button
                    className="border-2 rounded-lg p-1 border-blue-500 cursor-pointer text-blue-500"
                    onClick={() => onEdit(noteItem.id)}
                >
                    <FaPenToSquare size={16} />
                </button>
                <button
                    className="border-2 rounded-lg p-1 border-red-500 cursor-pointer text-red-500"
                    onClick={() => onDelete(noteItem.id)}
                >
                    <RiDeleteBin6Fill size={16} />
                </button>
            </div>
        </div>
    );
};

export default NoteItem;