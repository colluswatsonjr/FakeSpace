import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
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
        <Grid container spacing={2}>
            {page ?
                <Grid item xs={12}>
                    <TextField fullWidth rows={2} id="outlined-basic" label="Add Post..." variant="filled" value={form.text} onChange={(e) => { setForm({ ...form, text: e.target.value }) }}/>
                    <Button variant="contained" onClick={(e) => handleSubmit(e)}>Submit</Button>
                </Grid>
                :
                null
            }
            {posts.map((post) => {
                return (
                    <Grid item xs={12} md={6} key={post.id}>
                        <Card  sx={{}}>
                            <CardContent>
                                <Typography>{post.text + ' // ' + post.username}</Typography>
                                <Typography></Typography>
                            </CardContent>
                                {post.username === user.username ? <Button variant="contained" onClick={() => handleDelete(post.id)}>x</Button> : null}
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default DisplayPosts