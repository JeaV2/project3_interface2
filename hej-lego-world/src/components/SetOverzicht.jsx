import SetCard from "./SetCard";
import "./SetOverzicht.css"

function SetOverzicht({ sets }) {
        return (
        <section className="content">
            <div className="content__frame">
                <div className="content__topbar">
                    <div>
                        <p className="section-label">Set overzicht</p>
                        <h2>Beschikbare LEGO-sets</h2>
                    </div>
                    <p id="resultCount" className="result-count">{sets.length} resultaten</p>
                </div>

                <div id="results" className="results-grid">
                    {sets.map(set => (
                        <SetCard key={set.setNumber} set={set} />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default SetOverzicht;