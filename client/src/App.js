import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MySpace from './pages/MySpace';
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import WorldSpace from "./pages/WorldSpace";
import CreateSpace from "./pages/CreateSpace";

import Container from '@mui/material/Container';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, [])

  function handleDeleteUserPost(id){
    const deletePost = user.posts.filter((post)=>post.id !== id)
    setUser({...user, posts: deletePost})
  }

  if (!user) return <LoginPage setUser={setUser} />;

  return (
    <Container maxWidth="lg" sx={{ textAlign:'center'}}>
      <BrowserRouter>
        <Navbar setUser={setUser} />
        <Routes>
          <Route path="/" element={<WorldSpace user={user} setUser={(post)=>setUser({...user, posts:[...user.posts, post]})} deleteUserPost={handleDeleteUserPost} />} />

          <Route path="/create" element={<CreateSpace user={user} setUser={(post)=>setUser({...user, posts:[...user.posts, post]})} deleteUserPost={handleDeleteUserPost} />} />

          <Route path="/user" element={<MySpace user={user} setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;


// DELTE POST WHEN ON CREATE PAGE AND WORLD SPACE > PASS ID > FILTER BY ID >