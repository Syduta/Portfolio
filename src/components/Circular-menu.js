import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faNodeJs, faReact, faPhp, faSymfony, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons';
import mysql from "../img/mysql.png";
import { useState } from "react";

const fontAwesomeHtml5 = <FontAwesomeIcon icon={faHtml5} color={"#e34f26"}/>;
const fontAwesomeReact = <FontAwesomeIcon icon={faReact} color={"#00CDF2"} spin/>;
const fontAwesomeJs = <FontAwesomeIcon icon={faSquareJs} color={"#ead41c"}/>;
const fontAwesomeNodejs = <FontAwesomeIcon icon={faNodeJs} color={"#4F9640"}/>;
const fontAwesomePhp = <FontAwesomeIcon icon={faPhp} color={"#5C7AAD"}/>;
const fontAwesomeCss3 = <FontAwesomeIcon icon={faCss3Alt} color={"#1680C0"}/>;
const fontAwesomeSymfony = <FontAwesomeIcon icon={faSymfony} color={"#000000"}/>;
const fontAwesomeBootstrap = <FontAwesomeIcon icon={faBootstrap} color={"#523A76"}/>;
const fontAwesomeSass = <FontAwesomeIcon icon={faSass} color={"#C36192"}/>;
const logoSql = {
    height: "1em",
    verticalAlign: "-0.125em"
};
const notFontAwesomeMysql = < img src={mysql} style={logoSql} alt={""}/>

const technos = [
    {logo: fontAwesomeHtml5,
        nom: "Html "
    },
    {logo: fontAwesomeReact,
        nom: "React "
    },
    {logo: fontAwesomeJs,
        nom: "Javascript "
    },
    {logo: fontAwesomeNodejs,
        nom: "NodeJs "
    },
    {logo: fontAwesomePhp,
        nom: "Php "
    },
    {logo: fontAwesomeCss3,
        nom: "Css "
    },
    {logo: fontAwesomeSymfony,
        nom: "Symfony "
    },
    {logo: fontAwesomeBootstrap,
        nom: "Bootstrap "
    },
    {logo: fontAwesomeSass,
        nom: "Sass "
    },
    {logo: notFontAwesomeMysql,
        nom: "MySql "
    },
];

const CircularMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleSetIsOpen = () => {
        setIsOpen(prevState => !prevState);
    }

    return(
        <>
            <div className={"container"}>
                <div className={"menu"}>
                    <div className={"button"} onClick={handleSetIsOpen}></div>
                    {
                        technos.map((techno,index) =>(
                            <div key={index} className={"menu-item"} style={{
                                transform: `rotate(${(360/technos.length)*index}deg) translate(${isOpen ? 175 : 0 }%)`,
                                transitionDelay: `${isOpen ? (index*75) : 0 }ms`
                            }}>
                                <h4 style={{
                                transform: `rotate(${-(360/technos.length)*index}deg)`
                            }}>{techno.nom}{techno.logo}
                                </h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CircularMenu;