import { useEffect, useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteItem from "../components/NoteItem";

const NoteTaking = () => {

    const [noteData, setNoteData] = useState({
        title: "",
        description: "",
        tags: ""
    });

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
    const [isEdit, setIsEdit] = useState(false);
    const [search, setSearch] = useState("");
    const [tagSearch, setTagSearch] = useState("");

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const handleNoteData = (e) => {
        const { name, value } = e.target;

        setNoteData({
            ...noteData,
            [name]: value,
        });
    };

    const handleAddNote = (e) => {
        e.preventDefault();

        const { title, description, tags } = noteData;

        if (!title && !description && !tags) return;

        const newNote = {
            ...noteData,
            id: Date.now(),
            tags: noteData.tags.split(",").map(tag => tag.trim()).filter(tag => tag),
            createdAt: new Date().toDateString()
        };

        setNotes([...notes, newNote]);

        setNoteData({
            title: "",
            description: "",
            tags: ""
        });
    };

    const handleDeleteNote = (id) => {
        if (confirm("Are you sure want to delete?")) {
            setNotes(notes.filter((note) => note.id !== id));
        }
    };

    const setEditNoteHandle = (id) => {
        const editingNote = notes.find((note) => note.id === id);

        if (editingNote) setIsEdit(true);

        setNoteData({
            ...editingNote,
            tags: editingNote.tags.join(",")
        });
    };

    const handleEditNote = (e) => {
        e.preventDefault();

        const editNote = {
            ...noteData,
            tags: noteData.tags.split(",").map(tag => tag.trim()).filter(tag => tag),
            updatedAt: new Date().toDateString(),
        };

        setNotes(notes.map((note) => (
            note.id === noteData.id ? { ...editNote } : note
        )));

        setNoteData({
            title: "",
            description: "",
            tags: ""
        });

        setIsEdit(false);
    };

    const uniqueTags = [...new Set(notes.flatMap(note => note.tags))];

    const filteredNotes = tagSearch !== "" ?
        notes.filter((note) => note.tags.includes(tagSearch)) :
        notes.filter((note) => note.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    return (
        <div className="w-full py-10">
            <div className="container mx-auto px-3 md:px-0">

                <div className="w-full flex flex-col justify-center items-center gap-10">
                    <h1 className="font-bold text-2xl text-purple-600 uppercase tracking-wide">Note Taking Application</h1>

                    <NoteForm
                        noteData={noteData}
                        handleNoteData={handleNoteData}
                        handleAddNote={handleAddNote}
                        handleEditNote={handleEditNote}
                        isEdit={isEdit}
                    />
                </div>

                {notes.length > 0 && <div className="pt-25 pb-10 w-full md:w-[80%] mx-auto gap-5 flex flex-col items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search note here..."
                        className="border-2 border-black/60 rounded-lg w-full px-3 py-2 focus:border-purple-500 outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <select value={tagSearch} onChange={(e) => setTagSearch(e.target.value)}
                        className="w-fit px-3 py-2 border-2 border-black/60 rounded-lg cursor-pointer"
                    >
                        <option value="">Select tags</option>
                        {uniqueTags.map((tag, idx) => (
                            <option key={idx} value={tag} className="capitalize">{tag}</option>
                        ))}
                    </select>
                </div>}

                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center w-full md:w-[80%] py-10">
                    {
                        filteredNotes.map((note) => (
                            <NoteItem
                                key={note.id}
                                noteItem={note}
                                onDelete={handleDeleteNote}
                                onEdit={setEditNoteHandle}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default NoteTaking;