import React, { useEffect, useState } from 'react';
import CircularMenu from "./Circular-menu";

const Apropos = () => {

    const [offset, setOffset] = useState(null);
    const setScroll = () => {
        setOffset(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", setScroll);
        return () => {
            window.removeEventListener("scroll", setScroll);
        };
    }, []);
    console.log(offset);
    if(offset >= 704 && offset <= 800){
        console.log("cool");
    }

    return(
        <>
            <section id={"apropos"}>
                <h3>À propos</h3>
                <div className={"side-container"}>
                    <div className={"description"}>
                        <p>Développeur passionné depuis mes premières lignes de code suite à une reconversion en 2022. </p>
                        <p>J'aime autant coder le back que le front. Chaque projet étant différent d'un autre je trouve
                            toujours intéressant de découvrir et d'en résoudre les problématiques. </p>
                        <p>Déterminé à évoluer dans le développement web je suis curieux, persévérant, minutieux et
                            impatient de travailler avec vous ! </p>
                    </div>
                    <div className={"competences"}>
                        <p>Après avoir fait le tour de ma roue des technos je vous laisse découvrir mes <em className={"emphase"}>compétences</em>.</p>
                        <ul><span className={"fullstack"}>Front-end</span>
                            <li>Le maquetage.</li>
                            <li>La création d'une interface statique et adaptable.</li>
                            <li>Ou d'une interface dynamique.</li>
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