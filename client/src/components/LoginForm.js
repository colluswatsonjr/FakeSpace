import { useState } from "react";

function LoginForm({setUser}) {
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
      .then((res)=>{
        if (res.ok){
          res.json().then((user)=>setUser(user));
        }else{
          res.json().then((err)=>setError(err))
        }
      })
    }
    console.log(error)

    return (
        <>
      {error ? <h1>{`${error.errors}`}</h1> : <h1>welcome back, login here...</h1>}
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />&nbsp;<br />

                <label>Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />&nbsp;

                <button type="submit">LOGIN</button>

            </form>
        </>
    )

}

export default LoginForm;