import { useState } from "react"

function CreateSpace({ user }) {

    const [form, setForm] = useState({ title: '', bio: '' })
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)

        fetch("/pages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
            .then((res) => {
                if (res.ok) {
                    res.json().then((page) => console.log(page));
                } else {
                    res.json().then((err) => console.log(err))
                }
        })
    }
    // console.log(page)
    // if (page) return <DisplayPage user={user} page={page} />;

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