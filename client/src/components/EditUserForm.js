import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"


function EditUserForm({ user, setUser, setEditing }) {

    const [editForm, setEditForm] = useState({ username: user.username, first_name: user.first_name, last_name: user.last_name, password: '', passwordConfirmation: '' })

    function handleEditSubmit(e) {
        e.preventDefault()

        fetch(`/users/${user.id}`, {
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
            <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username:"
                    autoFocus
                    value={editForm.username}
                    onChange={(e) => { setEditForm({ ...editForm, username: e.target.value }) }}
                />
            </Grid>
            <br />
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="first_name"
                    name="first name"
                    label="First Name:"
                    onChange={(e) => { setEditForm({ ...editForm, first_name: e.target.value }) }}
                    value={editForm.first_name} />
            </Grid>
            <br />

            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    fullWidth
                    id="last_name"
                    label="Last Name:"
                    onChange={(e) => { setEditForm({ ...editForm, last_name: e.target.value }) }}
                    value={editForm.last_name} />
            </Grid>
            <br />
            <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => { setEditForm({ ...editForm, password: e.target.value }) }}
                    value={editForm.password} />
            </Grid>
            <br />
            <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="passwordConfirmation"
                    autoComplete="new-password"
                    onChange={(e) => { setEditForm({ ...editForm, passwordConfirmation: e.target.value }) }}
                    value={editForm.passwordConfirmation} />
            </Grid>
            <br />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleEditSubmit}
            >
                Submit Edit
            </Button>
            {/* <button onClick={handleEditSubmit}>SUBMIT EDIT</button><br /> */}
            {/* <button onClick={() => setEditing(false)}>CANCEL EDIT</button> */}
        </form>

    )
}

export default EditUserForm