import { Button, Grid } from "@mui/material"
import ShowPost from "./ShowPost"


function ShowPosts({ posts, setPosts }) {

    function handleDeletePost(id) {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                const newPosts = posts.filter((post) => post.id !== id);
                setPosts(newPosts, id)
            }
        });

    }

    return (
        <Grid container spacing={2} sx={{ padding: '5%' }}>
            {posts.map((post) => {
                return (
                    <Grid item xs={12} md={6} key={post.id}>
                        <ShowPost post={post} />
                        <Button variant="contained" onClick={() => handleDeletePost(post.id)}>x</Button>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ShowPosts