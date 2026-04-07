import "./Sidebar.css"

function Sidebar({ searchTerm, setSearchTerm }) {

    return (
        <aside className="sidebar">
            <section className="panel panel--yellow">
                <div className="panel__studs">
                    <span></span><span></span><span></span><span></span>
                </div>
                <h2>Zoeken</h2>
                <label className="label" htmlFor="searchInput">Zoek op naam of setnummer</label>
                <input id="searchInput" className="search-input" type="text" placeholder="Bijv. castle, ghost, 10332..." onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} />
                <p className="helper-text">
                    Typ in het veld en filter direct door de beschikbare sets.
                </p>
                <p className="helper-text">{searchTerm}</p>
            </section>
        </aside>
    )
}

export default Sidebar;