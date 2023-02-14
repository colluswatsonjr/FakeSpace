import { useEffect, useState } from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";

import MySpace from './pages/MySpace';
import Navbar from "./components/Navbar";
// import LoginPage from "./pages/LoginPage";
import WorldSpace from "./pages/WorldSpace";
import CreateSpace from "./pages/CreateSpace";

import Container from '@mui/material/Container';
import { Button } from "@mui/material";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import PageNotFound from "./components/PageNotFound";

function App() {
  //set user to pass to componenets
  const [user, setUser] = useState(null)
  // fetch logged in user and sets user state
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
        });
      }
    });
  }, [])
  //takes id and filters through user posts removing it, and setting user to orignal user with new posts
  function handleDeleteUserPost(id) {
    const deletePost = user.posts.filter((post) => post.id !== id)
    setUser({ ...user, posts: deletePost })
  }

  function getLongestPosts() {
    console.log('heres top 5 posts longest posts')

    fetch('/getPosts').then((r) => {
      if (r.ok) {
        r.json().then((posts) => console.log(posts))
      }
    })
  }

  function getPagesUserPostedOn() {
    console.log('heres user related pages')
    let unique = user.pages.filter((v, i, a) => a.findIndex(v2 => (v2.id === v.id)) === i)
    console.log(unique)
  }


  //if user not present show loginpage
  // if (!user) return <LoginPage setUser={setUser} />;

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <BrowserRouter>
        {user ?
          <>
            <Navbar setUser={setUser} />
            <Button onClick={() => getLongestPosts()}>Get Longest Posts</Button>
            <Button onClick={() => getPagesUserPostedOn()}>Get Pages Current User Posted On</Button>
          </>
          :
          null
        }

        <Routes>
          {!user ?
            <>
              <Route path="/" element={
                <>
                  <LoginForm setUser={setUser} />Don't have an account?&nbsp; <Link to="/signup"> Signup </Link>
                </>
              } />
              <Route path="/signup" element={
                <>
                  <SignupForm setUser={setUser} /> Already have an account? &nbsp; <Link to="/">Signin </Link>
                </>
              } />
              <Route path="*" element={<PageNotFound />} />

            </>
            :
            <>
              <Route path="/" element={!user ? <Navigate to="/" replace /> : <WorldSpace userId={user.id} user={user} setUser={(post) => setUser({ ...user, posts: [...user.posts, post] })} deleteUserPost={handleDeleteUserPost} />} />
              <Route path="/page" element={!user ? <Navigate to="/" replace /> : <CreateSpace userId={user.id} user={user} setUser={(post) => setUser({ ...user, posts: [...user.posts, post] })} deleteUserPost={handleDeleteUserPost} />} />
              <Route path="/profile" element={!user ? <Navigate to="/" replace /> : <MySpace userId={user.id} user={user} setUser={setUser} />} />
              <Route path="*" element={<PageNotFound />} />
            </>
          }
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

