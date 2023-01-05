import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import DisplayPage from "../components/DisplayPage";

function WorldSpace({ user, page, setPage }) {
    const [pages, setPages] = useState([])

    useEffect(() => {
        fetch("/pages").then((r) => {
            if (r.ok) {
                r.json().then((pages) => setPages(pages));
            } else { console.log(r) }
        });
    }, [page])

    function getPage(id) {
        fetch(`/pages/${id}`)
            .then((r) => {
                if (r.ok) {
                    r.json().then((page) => setPage(page));
                } else { console.log(r) }
            });
    }

    if (page) return <DisplayPage user={user} page={page} setPage={() => setPage(null)} />;

    return (
        <Grid container spacing={2} sx={{padding:'5%', textAlign:'center'}}>
            {pages.map((page) => {
                return (
                    <Grid item xs={12} md={6} key={page.id} onClick={() => getPage(page.id)}>
                        <Card  sx={{padding:'5%', textAlign:'center'}}>
                            <h4>{page.title}</h4>
                            <p>{page.bio}</p>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default WorldSpace