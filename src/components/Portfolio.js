import {useState} from "react";

const projets = [
    {
        nom: "Le Dressing d'AS",
        technos: "Html - Css - Bootstrap",
        classe: "dressing",
        maquette: "maquette maquette-dressing",
        description: "Projet réalisé pour le plaisir."
    },
    {
        nom: "Ruchesse",
        technos: "Html - Css - Bootstrap",
        classe: "ruchesse",
        maquette: "maquette maquette-ruche",
        description: "Projet réalisé pour le plaisir."
    },
    {
        nom: "New World",
        technos: "Html - Css",
        classe: "newworld",
        maquette: "maquette maquette-nw",
        description: "Projet réalisé en tant qu'exercice de mise en situation."
    },
    {
        nom: "The Underground",
        technos: "Html - Css",
        classe: "underground",
        maquette: "maquette maquette-underground",
        description: "Projet réalisé en tant qu'exercice de mise en situation."
    },
    {
        nom: "Pep's Coaching",
        technos: "Html - Css",
        classe: "peps",
        maquette: "maquette maquette-peps",
        description: "Projet réalisé en tant qu'exercice de mise en situation."
    },
    {
        nom: "Espace Rénovation",
        technos: "Html - Css - Bootstrap",
        classe: "reno",
        maquette: "maquette maquette-reno",
        description: "Projet réalisé en tant qu'exercice de mise en situation."
    },
    {
        nom: "WoW",
        technos: "Html - Css",
        classe: "wow",
        maquette: "maquette maquette-wow",
        description: "Projet réalisé en tant qu'exercice de mise en situation."
    },
    {
        nom: "Travel Together",
        technos: "Html - Css - Sass",
        classe: "travel",
        maquette: "maquette maquette-travel",
        description: "Projet réalisé en tant qu'exercice de mise en situation."
    },
];
const Portfolio = () => {
    const [showCaption, setShowCaption] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [activeImage, setActiveImage] = useState(-1);

    return(
        <>
            <section id={"portfolio"}>
                <h3>Portfolio</h3>
                <div className={"projects-container"}>
                    {
                        projets.map((projet, index) => {
                            return(
                                <div key={index} className={`projet ${projet.classe} ${index === activeImage && showImage ? `${projet.maquette}` : ""}`}
                                     onMouseEnter={() =>{
                                        setShowCaption(true);
                                        setActiveImage(index);
                                    }}
                                     onMouseLeave={() => {
                                         setShowCaption(false);
                                     }}
                                     onClick={() =>{
                                         setActiveImage(index);
                                         setShowImage(prevState => !prevState);
                                     }}
                                >
                                    <figcaption>{index === activeImage && showCaption &&
                                        <div>
                                            <h4>Projet {projet.nom}</h4>
                                            <p>{projet.technos}</p>
                                            <p>{projet.description}</p>
                                        </div>}
                                    </figcaption>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Portfolio;