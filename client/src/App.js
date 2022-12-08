import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MySpace from './pages/MySpace';

import './App.css';
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import WorldSpace from "./pages/WorldSpace";
import CreateSpace from "./pages/CreateSpace";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else { console.log(r) }
    });
  }, [])

  if (!user) return <LoginPage setUser={setUser} />;

  return (
    <div className="App">
      <h1>FakeSpace</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<WorldSpace user={user} />} />
          <Route path="/create" element={<CreateSpace user={user}/>} />
          <Route path="/user" element={<MySpace user={user} setUser={setUser} />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
