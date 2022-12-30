import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MySpace from './pages/MySpace';
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import WorldSpace from "./pages/WorldSpace";
import CreateSpace from "./pages/CreateSpace";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CssBaseline } from "@mui/material";

function App() {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      } else { console.log(r) }
    });
  }, [])

  if (!user) return <LoginPage setUser={setUser} />;

  return (
    <>
      <Container className="App">
        <BrowserRouter>
          <Navbar setPage={setPage} setUser={setUser} />
          <Routes>
            <Route path="/" element={<WorldSpace user={user} page={page} setPage={setPage} />} />
            <Route path="/create" element={<CreateSpace user={user} page={page} setPage={setPage} />} />
            <Route path="/user" element={<MySpace user={user} setUser={setUser} />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
