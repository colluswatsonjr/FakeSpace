import { useState } from "react"


function EditUserForm({ user, setUser, setEditing }) {

    const [editForm, setEditForm] = useState({ username: user.username, first_name: user.first_name, last_name: user.last_name, password: '', passwordConfirmation: '' })

    function handleEditSubmit(e) {
        e.preventDefault()

        fetch(`users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                editForm
            ),
        })
            .then((r) => r.json())
            .then((data) => setUser(data))
            .catch((err) => console.log(err))
            setEditForm({ username: '', first_name: '', last_name: '', password: '', password_confirmation: '' })
            setEditing(false)
    }
    return (
        <form>
            <label>Username:</label><br />
            <input
                type="text"
                id="username"
                onChange={(e) => { setEditForm({ ...editForm, username: e.target.value }) }}
                value={editForm.username}
            />&nbsp;<br />

            <label>First Name:</label><br />
            <input
                type="text"
                id="first_name"
                onChange={(e) => { setEditForm({ ...editForm, first_name: e.target.value }) }}
                value={editForm.first_name}
            />&nbsp;<br />

            <label>Last Name:</label><br />
            <input
                type="text"
                id="last_name"
                onChange={(e) => { setEditForm({ ...editForm, last_name: e.target.value }) }}
                value={editForm.last_name}
            />&nbsp;<br />

            <label>Password:</label><br />
            <input
                type="password"
                id="password"
                onChange={(e) => { setEditForm({ ...editForm, password: e.target.value }) }}
                value={editForm.password}
            />&nbsp;<br />

            <label>Password Confirmation:</label><br />
            <input
                type="password"
                id="passwordConfirmation"
                onChange={(e) => { setEditForm({ ...editForm, passwordConfirmation: e.target.value }) }}
                value={editForm.passwordConfirmation}
            />&nbsp;<br />

            <button onClick={handleEditSubmit}>SUBMIT EDIT</button><br />
            {/* <button onClick={() => setEditing(false)}>CANCEL EDIT</button> */}
        </form>

    )
}

export default EditUserForm