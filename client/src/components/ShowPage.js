import { Box, Button, Card, CardContent, Grid, TextField } from "@mui/material"
import { useState } from "react"
import ShowPosts from "./ShowPosts"


function ShowPage({ page, onAddPost, setPosts, setPage }) {

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
            .then(post => onAddPost(post))
            .catch(err => console.log(err))

        setForm({ text: '' })
    }

    return (
        <Box sx={{ padding: '5%' }}>

            <Card key={page.id} sx={{ padding: '5%', textAlign: 'center' }}>
                <CardContent>
                    <h4>{page.title}</h4>
                    <p>{page.bio}</p>
                </CardContent>
                <Button variant="contained" onClick={()=>setPage(null)}>Back</Button>
            </Card>

            <Grid item xs={12}>
                <TextField fullWidth rows={2} id="outlined-basic" label="Add Post..." variant="filled" value={form.text} onChange={(e) => { setForm({ ...form, text: e.target.value }) }} />
                <Button variant="contained" onClick={(e) => handleSubmit(e)}>Submit</Button>
            </Grid>

            <ShowPosts posts={page.posts} setPosts={setPosts}/>

        </Box>
    )
}

export default ShowPage