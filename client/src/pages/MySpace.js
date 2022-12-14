import { useEffect, useState } from "react";
import DisplayPosts from "../components/DisplayPosts";
import EditUserForm from "../components/EditUserForm";


function MySpace({ user, setUser }) {

    const [isEditing, setIsEditing] = useState(false);
    const [posts, setPosts] = useState(user.posts)

    useEffect(() => {
        fetch(`/posts/${user.id}`)
            .then((r) => r.json())
            .then(setPosts);
    }, [user]);

    function handleLogout() {
        console.log('logout')
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        });
    }
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
        <div>
            <h2>MySpace</h2>
            {isEditing ?
                <div>
                    <EditUserForm user={user} setUser={setUser} setEditing={setIsEditing} />
                    <button onClick={() => setIsEditing(false)}>CANCEL</button>
                </div>
                :
                <div>
                    <h3>{user.username}</h3>
                    <p>{user.first_name + ' ' + user.last_name}</p>
                    <button onClick={() => setIsEditing(true)}>UPDATE</button>
                    <button onClick={() => handleLogout()}>LOGOUT</button>
                    <button onClick={handleDelete}>DEACTIVATE ACCOUNT</button>
                </div>
            }
            <DisplayPosts user={user} setPosts={setPosts} posts={posts} />

        </div>
    )
}

export default MySpace