import { useState } from "react";

function CreatePost({pageId, posts, setPosts}) {
    const [form, setForm] = useState({ page_id: pageId, text: '' })

    function handleSubmit(e) {
        e.preventDefault()
        
        fetch("/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
        })
        .then((res)=>{
          if (res.ok){
            res.json().then((post)=>{
                setPosts([...posts, post])
            });
          }else{
            res.json().then((err)=>console.log(err))
          }
        })
      }

    return (
        <div>
            <h5>Create Post:</h5>
            <input type='text' placeholder="add post..." value={form.text} onChange={(e) => {setForm({ ...form, text: e.target.value })}} />
            <button onClick={(e)=>handleSubmit(e)}>Submit</button>
        </div>
    )
}

export default CreatePost;