import { Card, CardContent, Typography } from "@mui/material"


function ShowPost({ post }) {

    return (
        <Card>
            <CardContent>
                <Typography>{post.text}</Typography>
                <Typography>{post.username}</Typography>
            </CardContent>
        </Card>
    )
}

export default ShowPost