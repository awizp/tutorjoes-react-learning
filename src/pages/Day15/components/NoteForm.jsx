const NoteForm = ({ noteData, handleNoteData, handleAddNote, handleEditNote, isEdit }) => {
    return (
        <form className="w-full md:w-[60%] flex flex-col justify-center items-center gap-5">
            <input
                type="text"
                placeholder="Add note title"
                name="title"
                className="w-full border-2 border-black/50 rounded-lg p-2 px-3 focus:border-2 focus:border-purple-600 focus:outline-none"
                value={noteData.title}
                onChange={handleNoteData}
            />
            <textarea
                placeholder="Add note description"
                name="description"
                className="w-full border-2 border-black/50 rounded-lg p-2 px-3 focus:border-2 focus:border-purple-600 focus:outline-none"
                value={noteData.description}
                onChange={handleNoteData}
            />
            <input
                type="text"
                placeholder="Add tags (comma-seperated)"
                name="tags"
                className="w-full border-2 border-black/50 rounded-lg p-2 px-3 focus:border-2 focus:border-purple-600 focus:outline-none"
                value={noteData.tags}
                onChange={handleNoteData}
            />
            <button
                type="submit"
                className="w-full border-2 border-purple-500/50 rounded-lg p-2 px-3 bg-purple-500 hover:border-purple-500 hover:shadow hover:-translate-y-0.5 transition font-semibold text-white cursor-pointer mt-3"
                onClick={isEdit ? handleEditNote : handleAddNote}
            >
                {isEdit ? 'Update' : 'Add'} Note
            </button>
        </form>
    );
};

export default NoteForm;