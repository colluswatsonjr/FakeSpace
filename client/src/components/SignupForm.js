import React, { useState } from "react";

function SignupForm({ setUser }) {
  const [error, setError] = useState(null)
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
    <>
      {error ? <h1>{`${error.errors}`}</h1> : <h1>hello, signup here...</h1>}
      <form onSubmit={handleSubmit}>

        <label>Username:</label><br />
        <input
          type="text"
          id="username"
          onChange={(e) => { setForm({ ...form, username: e.target.value }) }}
          value={form.username}
        />&nbsp;<br />

        <label>First Name:</label><br />
        <input
          type="text"
          id="first_name"
          onChange={(e) => { setForm({ ...form, first_name: e.target.value }) }}
          value={form.first_name}
        />&nbsp;<br />

        <label>Last Name:</label><br />
        <input
          type="text"
          id="last_name"
          onChange={(e) => { setForm({ ...form, last_name: e.target.value }) }}
          value={form.last_name}
        />&nbsp;<br />

        <label>Password:</label><br />
        <input
          type="password"
          id="password"
          onChange={(e) => { setForm({ ...form, password: e.target.value }) }}
          value={form.password}
        />&nbsp;<br />

        <label>Password Confirmation:</label><br />
        <input
          type="password"
          id="passwordConfirmation"
          onChange={(e) => { setForm({ ...form, password_confirmation: e.target.value }) }}
          value={form.password_confirmation}
        />&nbsp;<br />

        <button type="submit">SIGN UP</button>


      </form>

    </>
  );
}

export default SignupForm;
