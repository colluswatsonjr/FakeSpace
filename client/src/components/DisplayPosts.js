import { useState } from "react";


function DisplayPosts({ user, page, setPosts, posts }) {

    const [form, setForm] = useState({ text: '' })

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ page_id: page.id, ...form })
        })
            .then(r => r.json())
            .then(post => setPosts([...posts, post]))
            .catch(err => console.log(err))

        setForm({ text: '' })
    }

    function handleDelete(id) {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                const updatePosts = posts.filter((post) => post.id !== id);
                setPosts(updatePosts);
            }
        });
    }

    return (
        <div>
            <h3>Posts</h3>
            <form>
                <input type='text' placeholder="add post..." value={form.text} onChange={(e) => { setForm({ ...form, text: e.target.value }) }} />
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        {post.text + ' // ' + post.username}
                        {post.username === user.username ? <button onClick={() => handleDelete(post.id)}>x</button> : null}
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayPosts