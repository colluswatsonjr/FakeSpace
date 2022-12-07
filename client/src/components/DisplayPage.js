import CreatePost from "./CreatePost"


function DisplayPage({ page, goBack }) {

    return (
        <div>
            <h3>Page</h3>

            <div key={page.id} onClick={() => console.log(page)}>
                <h4>{page.title}</h4>
                <p>{page.bio}</p>
                <button onClick={()=>goBack(null)}>Back</button>
            </div>

            <CreatePost />
        </div>
    )
}

export default DisplayPage