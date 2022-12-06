import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MySpace from './pages/MySpace';

import './App.css';
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }else{console.log(r)}
    });
  }, [])

  if (!user) return <LoginPage setUser={setUser} />;

  return (
    <div className="App">
      <h1>FakeSpace</h1>
      <BrowserRouter>
        <Navbar />
        {/* <MySpace user={user} /> */}
        <Routes>
          <Route path="/" element={<MySpace user={user} setUser={setUser} />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
