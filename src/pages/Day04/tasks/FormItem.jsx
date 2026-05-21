import { useState } from "react";

const FormItem = () => {

    // changing form values,
    const [formData, setFormData] = useState({
        id: 1,
        fullName: "",
        username: "",
        email: ""
    });

    const [users, setUsers] = useState([]);

    const handleFormData = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, id: Date.now(), [name]: value }));
    };

    // submitting form data,
    const handleUsers = (e) => {
        e.preventDefault();

        const { fullName, username, email } = formData;

        if (fullName == "" && username == "" && email == "") { alert("Enter valid values"); return; }

        setUsers([...users, formData]);
    };

    return (
        <div className="w-full bg-zinc-950 text-white flex flex-col justify-center items-center gap-15 p-20">

            <h1 className="text-3xl font-bold">User Data</h1>

            <form onSubmit={handleUsers} className="flex flex-col justify-center items-start gap-5">
                <input type="text" placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => handleFormData(e)}
                    name={"fullName"}
                    className="bg-zinc-800 rounded-lg px-3 py-1.5 my-1 border border-white/20"
                />
                <input type="text" placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleFormData(e)}
                    name={"email"}
                    className="bg-zinc-800 rounded-lg px-3 py-1.5 my-1 border border-white/20"
                />
                <input type="text" placeholder="Your username"
                    value={formData.username}
                    onChange={(e) => handleFormData(e)}
                    name={"username"}
                    className="bg-zinc-800 rounded-lg px-3 py-1.5 my-1 border border-white/20"
                />
                <button type="submit" className="bg-purple-600 px-3 py-2 cursor-pointer mt-2 rounded-lg w-full border border-white/20">Add User</button>
            </form>

            {users.length > 0 && <div className="mt-3 flex gap-5 justify-center flex-wrap items-center p-10">
                {
                    users.map((user) => {
                        return (
                            <div className="bg-zinc-800 p-5 rounded-xl">
                                <p>Name : <span>{user.fullName}</span></p>
                                <p>Username : <span>{user.username}</span></p>
                                <p>Email : <span>{user.email}</span></p>
                            </div>
                        );
                    })
                }
            </div>}

        </div>
    );
};

export default FormItem;