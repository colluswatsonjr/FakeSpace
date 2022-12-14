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
    
    function getPage(id){
        fetch(`/pages/${id}`)
        .then((r) => {
            if (r.ok) {
                r.json().then((page) => setPage(page));
            } else { console.log(r) }
        });
    }

    if (page) return <DisplayPage user={user} page={page} setPage={() => setPage(null)} />;

    return (
        <div>
            <h2>WorldSpace</h2>
            {pages.map((page) => {
                return (
                    <div key={page.id} onClick={() => getPage(page.id)}>
                        <h4>{page.title}</h4>
                        <p>{page.bio}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default WorldSpace