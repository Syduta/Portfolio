import CircularMenu from "./Circular-menu";

const Apropos = () => {

    return(
        <>
            <section id={"apropos"}>
                <h3>À propos</h3>
                <div className={"side-container"}>
                    <div className={"description"}>
                        <p>Développeur curieux et passionné depuis mes premières lignes de code suite à une reconversion en 2022. </p>
                        <p>J'ai fait mes premiers pas à <a href={"https://www.lapiscine.pro/"}>La Piscine</a> et depuis je
                            suis fier de pouvoir dire que je n'ai pas cessé d'apprendre.</p>
                        <p>Déterminé à évoluer je suis persévérant, minutieux, réactif et
                            impatient de travailler avec vous ! </p>
                        <p>Front-end, Back-end, ou les deux, l'important pour moi et de rendre un produit correspondant à vos besoins. </p>

                    </div>
                    <div className={"competences"}>
                        <p>Toutes ces <em>technos</em> qui me font tourner la tête sont celles avec lesquelles
                            je travaille.</p>
                        <p>Laisser moi maintenant vous présenter un certain nombre des
                            <em className={"emphase"}> compétences </em>que je souhaiterai mettre à votre service.</p>
                        <ul><span className={"fullstack"}>Front-end</span>
                            <li>Le maquetage.</li>
                            <li>La création d'une interface statique et adaptable.</li>
                            <li>D'une interface dynamique.</li>
                        </ul>
                        <ul><span className={"fullstack"}>Back-end</span>
                            <li>La création d'une base de données.</li>
                            <li>le développement de composants d'accès à ces données.</li>
                        </ul>
                    </div>
                </div>
                <CircularMenu />
            </section>
        </>
    )
}

export default Apropos;