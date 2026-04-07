import "./HeroHeader.css"

function HeroHeader() {
    return (
        <header className="hero">
            <div className="hero__left">
                <p className="hero__eyebrow">Hej Lego World</p>
                <h1>Kiosk Zodiac Park</h1>
                <p className="hero__text">
                    Ontdek bouwsets. Zoek op naam of setnummer en bekijk direct het overzicht,
                    <br />
                    en ontdek welke lego set het beste bij jouw sterrenbeeld past!
                </p>
            </div>
        </header>
    )
}

export default HeroHeader
