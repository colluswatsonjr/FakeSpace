import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import ShowPage from "../components/ShowPage"

function CreateSpace({ setUser, deleteUserPost }) {

    const [form, setForm] = useState({ title: '', bio: '' })

    const [newPage, setNewPage] = useState(null)

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/pages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
            .then((res) => {
                if (res.ok) {
                    res.json().then((page) => setNewPage(page));
                } else {
                    res.json().then((err) => console.log(err))
                }
            })
        setForm({ title: '', bio: '' })
    }

    function handleAddPost(post) {
        setNewPage({ ...newPage, posts: [...newPage.posts, post] })
        setUser(post)
    }

    return (
        <>
            {newPage ?
                <ShowPage page={newPage} onAddPost={handleAddPost} setPosts={(posts, id)=>{
                    deleteUserPost(id)
                    setNewPage({...newPage, posts: posts})
                }} setPage={setNewPage} />
                :
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField
                        required
                        id="title"
                        variant="outlined"
                        label="Title..."
                        value={form.title}
                        onChange={(e) => { setForm({ ...form, title: e.target.value }) }}
                    />
                    <TextField
                        required
                        id="bio"
                        variant="outlined"
                        label="Bio..."
                        value={form.bio}
                        onChange={(e) => { setForm({ ...form, bio: e.target.value }) }}
                    />
                    <Button variant="contained" onClick={(e) => handleSubmit(e)}>Create Space</Button>
                </Box>
            }
        </>
    )
}

export default CreateSpace