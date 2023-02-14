import { Button, Card, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import ShowPage from "../components/ShowPage";

function WorldSpace({ userId, user, setUser, deleteUserPost }) {
    //hold pages

    const [pages, setPages] = useState([])
    const [page, setPage] = useState(null)
    const [search, setSearch] = useState([])
    // fetch all pages and set to pages state
    useEffect(() => {
        fetch("/pages").then((r) => {
            if (r.ok) {
                r.json().then((pages) => setPages(pages));
            }
        });
    }, [])

    function handleSearch(e) {
        e.preventDefault()
        fetch(`/search?search=${search}`)
            .then((r) => {
                if (r.ok) {
                    r.json().then((pages) => setPages(pages));
                } else { console.log(r) }
            });
    }
    // takes post, send post to parent component, setPage to current page with posts adding passed in post
    // for each page in pages, if title matches replace with updated page/posts, if not return page. set pages to new collection of pages
    function handleAddPost(post) {
        setUser(post)
        setPage({ ...page, posts: [...page.posts, post] })

        const updatePages = []

        pages.forEach((x) => {
            if (x.title === page.title) {
                updatePages.push({ ...page, posts: [...page.posts, post] })
            } else {
                updatePages.push(x)
            }
        })

        return setPages(updatePages)
    }

    // take posts, and post id, send delted id to parent compo.
    //set page to posts
    // for each page in pages, if title matches replace with updated page/posts, if not return page. set pages to new collection of pages

    function handleUpdatePages(posts, id) {
        deleteUserPost(id)
        setPage({ ...page, posts: posts })

        const updatePages = []

        pages.forEach((x) => {
            if (x.title === page.title) {
                updatePages.push({ ...page, posts: posts })
            } else {
                updatePages.push(x)
            }
        })
        return setPages(updatePages)
    }



    return (
        <>


            {page ?
                <ShowPage userId={userId} page={page} onAddPost={handleAddPost} setPosts={handleUpdatePages} setPage={setPage} />
                :
                <Grid container spacing={2} sx={{ padding: '5%', textAlign: 'center' }}>

                    <Grid item xs={12}>
                        <TextField fullWidth rows={2} id="outlined-basic" label="Title of Space..." variant="filled" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <Button variant="contained" onClick={handleSearch}>search...</Button>
                    </Grid>
                    <br />
                    {pages.map((page) => {
                        return (
                            <Grid item xs={12} md={6} key={page.id} onClick={() => setPage(page)}>
                                <Card sx={{ padding: '5%', textAlign: 'center' }}>
                                    <h4>{page.title}</h4>
                                    <p>{page.bio}</p>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            }
        </>
    )
}

export default WorldSpace