import { useEffect, useState } from "react";

import DisplayPage from "../components/DisplayPage";

function WorldSpace({user}) {
    const [page, setPage] = useState(null)
    const [pages, setPages] = useState([])

    useEffect(() => {
        fetch("/pages").then((r) => {
            if (r.ok) {
                r.json().then((pages) => setPages(pages));
            } else { console.log(r) }
        });
    }, [])

    if (page) return <DisplayPage user={user} page={page} setPage={()=>setPage(null)}/>;

    console.log(page)

    return (
        <div>
            <h2>WorldSpace</h2>
            {pages.map((page) => {
                return (
                    <div key={page.id} onClick={()=>setPage(page)}>
                        <h4>{page.title}</h4>
                        <p>{page.bio}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default WorldSpace