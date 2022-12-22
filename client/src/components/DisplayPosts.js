import { useState } from "react";


function DisplayPosts({ userId, page, setPosts, posts }) {
    const [form, setForm] = useState({ page_id: page.id, text: '' })

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
            .then((res) => {
                if (res.ok) {
                    res.json().then((post) => {
                        setPosts([...posts, post])
                    });
                } else {
                    res.json().then((err) => console.log(err))
                }
            })
        setForm({ page_id: page.id, text: '' })
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

    function DisplayDeleteBtn(post) {
        if (post.username === userId) {
            return <button onClick={() => handleDelete(post.id)}>x</button>
        } 
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
                        {DisplayDeleteBtn(post)}
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayPosts