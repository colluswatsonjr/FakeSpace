import { Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material";
import { useState } from "react";

function LoginForm({ setUser }) {
  const [error, setError] = useState('')
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault()

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((user) => setUser(user));
        } else {
          res.json().then((err) => setError(err))
        }
      })
      .catch(err => setError(err))
  }

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {error ? <h1>{`${error.errors}`}</h1> : <Typography component="h1" variant="h5">Sign in...</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>


        </form>
      </Box>
    </Container>
  )

}

export default LoginForm;