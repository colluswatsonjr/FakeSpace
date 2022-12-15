import { useEffect, useState } from "react";

import DisplayPage from "../components/DisplayPage";

function WorldSpace({ user, page, setPage }) {
    const [pages, setPages] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch("/pages").then((r) => {
            if (r.ok) {
                r.json().then((pages) => setPages(pages));
            } else { console.log(r) }
        });
    }, [page])

    function handleSearch() {
        fetch("/pages").then((r) => {
            if (r.ok) {
                r.json().then((pages) => console.log(pages));
            } else { console.log(r) }
        });
    }
    function getPage(id){
        fetch(`/pages/${id}`)
        .then((r) => {
            if (r.ok) {
                r.json().then((page) => setPage(page));
            } else { console.log(r) }
        });
    }

    if (page) return <DisplayPage user={user} page={page} setPage={() => setPage(null)} />;

    console.log(search)
    return (
        <div>
            <h2>WorldSpace</h2>
            <div>
                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit" onClick={handleSearch}>search</button>
            </div>
            {pages.map((page) => {
                return (
                    // <div key={page.id} onClick={() => setPage(page)}>
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