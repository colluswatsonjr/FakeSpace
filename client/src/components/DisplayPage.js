import { useState } from "react"

import DisplayPosts from "./DisplayPosts"

function DisplayPage({ user, page, setPage }) {

    // const [form, setForm] = useState({ page_id: page.id, text: '' })
    const [posts, setPosts] = useState(page.posts)


    // function handleSubmit(e) {
    //     e.preventDefault()

    //     fetch("/posts", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(form)
    //     })
    //     .then(r=>r.json())
    //     .then(post=>setPosts([...posts, post]))
    //     .catch(err=>console.log(err))

    //     setForm({ page_id: page.id, text: '' })
    // }

    return (
        <div>
            <h3>Page</h3>

            <div key={page.id}>
                <h4>{page.title}</h4>
                <p>{page.bio}</p>
                <button onClick={() => setPage()}>Back</button>
            </div>

            {/* <form>
                <input type='text' placeholder="add post..." value={form.text} onChange={(e) => { setForm({ ...form, text: e.target.value }) }} />
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form> */}

            <DisplayPosts user={user} page={page} posts={posts} setPosts={setPosts} />

        </div>
    )
}

export default DisplayPage