import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import ShowPage from "../components/ShowPage";

function WorldSpace({ setUser, deleteUserPost }) {

    const [pages, setPages] = useState([])
    const [page, setPage] = useState(null)
    const [search, setSearch] = useState([])

    useEffect(() => {
        fetch("/pages").then((r) => {
            if (r.ok) {
                r.json().then((pages) => setPages(pages));
            } else { console.log(r) }
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
                <ShowPage page={page} onAddPost={handleAddPost} setPosts={handleUpdatePages} setPage={setPage} />
                :
                <Grid container spacing={2} sx={{ padding: '5%', textAlign: 'center' }}>
                    <form>
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button onClick={handleSearch}>search...</button>
                    </form>
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