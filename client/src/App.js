import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MySpace from './pages/MySpace';
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import WorldSpace from "./pages/WorldSpace";
import CreateSpace from "./pages/CreateSpace";

import Container from '@mui/material/Container';
import { Button } from "@mui/material";

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
  function handleDeleteUserPost(id){
    const deletePost = user.posts.filter((post)=>post.id !== id)
    setUser({...user, posts: deletePost})
  }

  function getLongestPosts(){
    console.log('heres top 5 posts longest posts')

    fetch('/getPosts').then((r)=>{
      if (r.ok){
        r.json().then((posts)=>console.log(posts))
      }
    })
  }

  function getPagesUserPostedOn() {
    console.log('heres user related pages')
    let unique = user.pages.filter((v,i,a)=>a.findIndex(v2=>(v2.id===v.id))===i)
    console.log(unique)
}


  //if user not present show loginpage
  if (!user) return <LoginPage setUser={setUser} />;

  return (
    <Container maxWidth="lg" sx={{ textAlign:'center'}}>
      <BrowserRouter>
        <Navbar setUser={setUser} />
        <Button onClick={()=>getLongestPosts()}>Get Longest Posts</Button>
        <Button onClick={() => getPagesUserPostedOn()}>Get Pages Current User Posted On</Button>

        <Routes>
          
          <Route path="/" element={<WorldSpace userId={user.id} user={user} setUser={(post)=>setUser({...user, posts:[...user.posts, post]})} deleteUserPost={handleDeleteUserPost} />} />

          <Route path="/page/new" element={<CreateSpace userId={user.id} user={user} setUser={(post)=>setUser({...user, posts:[...user.posts, post]})} deleteUserPost={handleDeleteUserPost} />} />

          <Route path="/profile" element={<MySpace userId={user.id} user={user} setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;


// DELTE POST WHEN ON CREATE PAGE AND WORLD SPACE > PASS ID > FILTER BY ID >