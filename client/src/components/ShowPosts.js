import { Button, Grid } from "@mui/material"
import { useState } from "react";
import ShowPost from "./ShowPost"


function ShowPosts({ userId, posts, setPosts }) {
    const [err, setErr] = useState(null)
    // fetch delete requst post, send new posts and send id to parent component
    function handleDeletePost(id) {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                r.json().then((r)=>{
                const newPosts = posts.filter((post) => post.id !== id);
                setPosts(newPosts, id)
                setErr(r)
                })
            }
        });
    }
    console.log(err)
    return (
        <Grid container spacing={2} sx={{ padding: '5%' }}>
            {posts.map((post) => {
                return (
                    <Grid item xs={12} md={6} key={post.id}>
                        <ShowPost post={post} />
                        {post.user_id === userId ? <Button variant="contained" onClick={() => handleDeletePost(post.id)}>x</Button> : null }
                        {/* <Button variant="contained" onClick={() => handleDeletePost(post.id)}>x</Button> */}
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ShowPosts