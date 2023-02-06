import { Box, Button, Card, CardHeader } from "@mui/material";
import { useState } from "react";
import EditUserForm from "../components/EditUserForm";
import ShowPosts from "../components/ShowPosts";


function MySpace({ userId, user, setUser}) {

    const [isEditing, setIsEditing] = useState(false);

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
                        title={`${user.username}`}
                        subheader={`${user.first_name} ${user.last_name}`}
                    />
                    <Button variant="contained" onClick={() => setIsEditing(true)}>UPDATE</Button>
                    <Button variant="contained" onClick={handleDelete}>DELETE</Button>
                </Card>
            }

            <ShowPosts userId={userId} posts={user.posts} setPosts={(posts)=>setUser({...user, posts: posts})} />

        </Box>
    )
}

export default MySpace