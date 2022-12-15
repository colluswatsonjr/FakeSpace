import { useState } from "react"
import DisplayPage from "../components/DisplayPage"

function CreateSpace({ user, page, setPage }) {

    const [form, setForm] = useState({ title: '', bio: '' })
    const [newPage, setNewPage] = useState(null)

    //after request returns page, return or navigate to /page/id
    //create show route for page to get page to display

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/pages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
            .then((res) => {
                if (res.ok) {
                    res.json().then((page) => setNewPage(page));
                } else {
                    res.json().then((err) => console.log(err))
                }
        })
        setForm({ title: '', bio: '' })
    }
    if (newPage) return <DisplayPage user={user} page={newPage} setPage={() => setNewPage(null)}/>;

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