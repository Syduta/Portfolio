import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faNodeJs, faReact, faPhp, faSymfony, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons';
import mysql from "../img/mysql.png";
import React, { useEffect, useState } from 'react';


const fontAwesomeHtml5 = <FontAwesomeIcon icon={faHtml5} color={"#e34f26"}/>;
const fontAwesomeReact = <FontAwesomeIcon icon={faReact} color={"#00CDF2"} spin/>;
const fontAwesomeJs = <FontAwesomeIcon icon={faSquareJs} color={"#ead41c"}/>;
const fontAwesomeNodejs = <FontAwesomeIcon icon={faNodeJs} color={"#4F9640"}/>;
const fontAwesomePhp = <FontAwesomeIcon icon={faPhp} color={"#5C7AAD"}/>;
const fontAwesomeCss3 = <FontAwesomeIcon icon={faCss3Alt} color={"#1680C0"}/>;
const fontAwesomeSymfony = <FontAwesomeIcon icon={faSymfony} color={"#000000"}/>;
const fontAwesomeBoostrap = <FontAwesomeIcon icon={faBootstrap} color={"#523A76"}/>;
const fontAwesomeSass = <FontAwesomeIcon icon={faSass} color={"#C36192"}/>;
const logoSql = {
    height: "1em",
    verticalAlign: "-0.125em"
};
const notFontAwesomeMysql = < img src={mysql} style={logoSql} />

const logos = [
    fontAwesomeHtml5,
    fontAwesomeReact,
    fontAwesomeJs,
    fontAwesomeNodejs,
    fontAwesomePhp,
    fontAwesomeCss3,
    fontAwesomeSymfony,
    fontAwesomeBoostrap,
    fontAwesomeSass,
    notFontAwesomeMysql
]
const Apropos = () => {

    const [offset, setOffset] = React.useState(null);
    const setScroll = () => {
        setOffset(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", setScroll);
        return () => {
            window.removeEventListener("scroll", setScroll);
        };
    }, []);
    console.log(offset);
    if(offset >= 704 && offset <= 800){
        console.log("cool");
    }

    const [open, setOpen] = useState(false);

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
                <div className={"photo"} onClick={()=>{setOpen(!open)}}></div>
                <ul className={`menu-dropdown ${open? "active":"inactive"}`}>
                    {
                        logos.map((logo,index)=>(
                            <div  key={index} style={{transform:`rotate(${(360/logos.length)*index}deg translate(175%)`}}>
                                <li>
                                    <i>{logo}</i>
                                </li>
                            </div>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}

export default Apropos;