

function DisplayPosts({ userId, setPosts, posts }) {

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