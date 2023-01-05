import { Box, Button, Card, CardContent } from "@mui/material"
import { useState } from "react"

import DisplayPosts from "./DisplayPosts"

function DisplayPage({ user, page, setPage }) {

    const [posts, setPosts] = useState(page.posts)


    return (
        <Box sx={{ padding: '5%' }}>

            <Card key={page.id} sx={{ padding: '5%', textAlign: 'center' }}>
                <CardContent>
                    <h4>{page.title}</h4>
                    <p>{page.bio}</p>
                </CardContent>
                <Button variant="contained" onClick={() => setPage()}>Back</Button>
            </Card>
            <br />
            <DisplayPosts user={user} page={page} posts={posts} setPosts={setPosts} />

        </Box>
    )
}

export default DisplayPage