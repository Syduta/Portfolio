import {useState} from "react";

const projets = [
    {
        nom: "New World",
        technos: "Html - Css",
        classe: "newworld",
        maquette: "maquette-nw",
    },
    {
        nom: "The Underground",
        technos: "Html - Css",
        classe: "underground",
        maquette: "maquette-underground",
    },
    {
        nom: "Pep's Coaching",
        technos: "Html - Css",
        classe: "peps",
        maquette: "maquette-peps",
    },
    {
        nom: "Espace Rénovation",
        technos: "Html - Css - Bootstrap",
        classe: "reno",
        maquette: "maquette-reno",
    },
    {
        nom: "WoW",
        technos: "Html - Css",
        classe: "wow",
        maquette: "maquette-wow",
    },
    {
        nom: "",
        technos: "Html - Css",
        classe: "",
        maquette: "maquette",
    },
];
const Portfolio = () => {
    const [showCaption, setShowCaption] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [activeImage, setActiveImage] = useState(-1);
    const handleShowImage = () => {
        setShowImage(prevState => !prevState);
    }

    return(
        <>
            <section id={"portfolio"}>
                <h3>Portfolio</h3>
                <div className={"projects-container"}>
                    {
                        projets.map((projet, index) => {
                            return(
                                <div key={index} className={`projet ${projet.classe} ${showImage ? `${projet.maquette}` : ""}`}
                                     onMouseEnter={() =>{
                                        setShowCaption(true);
                                        setActiveImage(index);
                                    }}
                                     onMouseLeave={() => {
                                         setShowCaption(false);
                                         setActiveImage(-1);
                                     }}
                                     onClick={handleShowImage}
                                >
                                    <figcaption>{index === activeImage && showCaption && <div><h4>Projet {projet.nom}</h4><p>{projet.technos}</p></div>}</figcaption>
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