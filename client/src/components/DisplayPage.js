import { useState } from "react"
import CreatePost from "./CreatePost"
import DisplayPosts from "./DisplayPosts"


function DisplayPage({ user, page, setPage }) {

    console.log(user, page)

    const [posts, setPosts] = useState(page.posts)

    return (
        <div>
            <h3>Page</h3>

            <div key={page.id} onClick={() => console.log(page)}>
                <h4>{page.title}</h4>
                <p>{page.bio}</p>
                <button onClick={setPage}>Back</button>
            </div>

            <CreatePost pageId={page.id} posts={posts} setPosts={setPosts}/>
            <DisplayPosts userId={user.username} posts={posts} setPosts={setPosts}/>

        </div>
    )
}

export default DisplayPage