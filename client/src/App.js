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
  const [page, setPage] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setPosts(user.posts)
        });
      }
    });
  }, [])

  if (!user) return <LoginPage setUser={setUser} />;

  return (
    <Container maxWidth="lg" sx={{ textAlign:'center'}}>
      <BrowserRouter>
        <Navbar setPage={setPage} setUser={setUser} />
        <Routes>
          <Route path="/" element={<WorldSpace user={user} page={page} setPage={setPage} setPosts={(post)=>setPosts([...posts, post])} />} />
          <Route path="/create" element={<CreateSpace user={user} page={page} setPage={setPage} />} />
          <Route path="/user" element={<MySpace user={user} setUser={setUser} posts={posts} setPosts={setPosts} />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
