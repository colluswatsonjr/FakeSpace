import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function SignupForm({ setUser }) {
  const [error, setError] = useState('')
  const [form, setForm] = useState({ username: '', first_name: '', last_name: '', password: '', password_confirmation: '' })

  function handleSubmit(e) {
    e.preventDefault()

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => {
            setUser(user)
          });
        } else {
          res.json().then((err) => setError(err))
        }
      })
  }


  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {error ? <h1>{`${error.errors}`}</h1> : <Typography component="h1" variant="h5">Sign up</Typography>}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username:"
                autoFocus
                value={form.username}
                onChange={(e) => { setForm({ ...form, username: e.target.value }) }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="first_name"
                label="First Name:"
                value={form.first_name}
                onChange={(e) => { setForm({ ...form, first_name: e.target.value }) }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="last_name"
                label="Last Name:"
                value={form.last_name}
                onChange={(e) => { setForm({ ...form, last_name: e.target.value }) }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={form.password}
                onChange={(e) => { setForm({ ...form, password: e.target.value }) }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="passwordConfirmation"
                autoComplete="new-password"
                value={form.password_confirmation}
                onChange={(e) => { setForm({ ...form, password_confirmation: e.target.value }) }}
              />
            </Grid>

          </Grid>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
        </form>
      </Box>
    </Container>
  );
}

export default SignupForm;
