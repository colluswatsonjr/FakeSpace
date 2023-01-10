import { Avatar, Box, Button, Card, CardHeader, Grid, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import DisplayPosts from "../components/DisplayPosts";
import EditUserForm from "../components/EditUserForm";


function MySpace({ user, setUser }) {

    const [isEditing, setIsEditing] = useState(false);
    const [posts, setPosts] = useState([])
    // const [myPosts, setMyPosts] = useState([])

    // useEffect(() => {
    //     fetch(`/posts/${user.id}`)
    //         .then((r) => r.json())
    //         .then(setPosts);
    // }, [user]);

    useEffect(() => {
        fetch("/posts")
            .then((r) => r.json())
            .then(setPosts);
    }, []);


    function handleDelete() {
        fetch(`/users/${user.id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <Box sx={{ padding: '5%' }}>
            {isEditing ?
                <div>
                    <EditUserForm user={user} setUser={setUser} setEditing={setIsEditing} />
                    <button onClick={() => setIsEditing(false)}>CANCEL</button>
                </div>
                :
                <Card sx={{ padding: '5%', textAlign: 'center' }}>
                    <CardHeader
                        avatar={<Avatar sx={{ bgcolor: 'black', color: 'white' }} aria-label="recipe"></Avatar>}
                        action={<IconButton aria-label="settings"></IconButton>}
                        title={`${user.username}`}
                        subheader={`${user.first_name} ${user.last_name}`}
                    />
                    <Button variant="contained" onClick={() => setIsEditing(true)}>UPDATE</Button>
                    <Button variant="contained" onClick={handleDelete}>DELETE</Button>
                </Card>
            }
            <Grid container spacing={2} sx={{ padding: '5%' }}>
                <DisplayPosts user={user} setPosts={setPosts} posts={posts} />
            </Grid>
        </Box>
    )
}

export default MySpace