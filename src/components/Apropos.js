import CircleMenu from "./Circle-menu";
import React, { useEffect, useState } from 'react';

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
                <div className={"description"}>
                    <h3>À propos</h3>
                    <p>Développeur passionné depuis mes premières lignes de code suite à une reconversion en 2022. </p>
                    <p>Déterminé à évoluer dans le développement web je suis curieux, persévérant, minutieux et
                        impatient de travailler avec vous ! </p>
                    <p>J'aime autant coder le back que le front. Chaque projet étant différent d'un autre je trouve
                        toujours intéressant d'en découvrir et de résoudre les problématiques. </p>
                </div>
                <CircleMenu />
            </section>
        </>
    )
}

export default Apropos;