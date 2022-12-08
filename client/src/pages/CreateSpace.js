import { useState } from "react"
import DisplayPage from "../components/DisplayPage"


function CreateSpace({ user }) {
    const [page, setPage] = useState(null)
    const [form, setForm] = useState({ title: '', bio: '' })
    function handleSubmit(e) {
        e.preventDefault()
        // setPage(form)
        // fetch("/pages", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(form)
        // })
        //     .then((res) => {
        //         if (res.ok) {
        //             res.json().then((page) => { setPage(page) });
        //         } else {
        //             res.json().then((err) => console.log(err))
        //         }
        // })
    }
    // if (page) return <DisplayPage user={user} page={page} setPage={() => setPage(null)} />;

    return (
        <div>
            <h2>CreateSpace</h2>
            <label>Title:</label><br />
            <input
                type="text"
                id="title"
                onChange={(e) => { setForm({ ...form, title: e.target.value }) }}
                value={form.title}
            />&nbsp;<br />

            <label>Bio:</label><br />
            <textarea
                rows='10'
                cols='20'
                id="bio"
                onChange={(e) => { setForm({ ...form, bio: e.target.value }) }}
                value={form.bio}
            />&nbsp;<br />
            <button onClick={(e) => handleSubmit(e)}>Create Space</button>

        </div>
    )
}

export default CreateSpace