import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faNodeJs, faReact, faPhp, faSymfony, faBootstrap, faSass } from '@fortawesome/free-brands-svg-icons';
import mysql from "../img/mysql.png";
import {useState} from "react";

const fontAwesomeHtml5 = <FontAwesomeIcon icon={faHtml5} color={"#e34f26"} fontSize={"1em"}/>;
const fontAwesomeReact = <FontAwesomeIcon icon={faReact} color={"#00CDF2"} fontSize={"1em"} spin/>;
const fontAwesomeJs = <FontAwesomeIcon icon={faSquareJs} color={"#ead41c"} fontSize={"1em"}/>;
const fontAwesomeNodejs = <FontAwesomeIcon icon={faNodeJs} color={"#4F9640"} fontSize={"1em"}/>;
const fontAwesomePhp = <FontAwesomeIcon icon={faPhp} color={"#5C7AAD"} fontSize={"1em"}/>;
const fontAwesomeCss3 = <FontAwesomeIcon icon={faCss3Alt} color={"#1680C0"} fontSize={"1em"}/>;
const fontAwesomeSymfony = <FontAwesomeIcon icon={faSymfony} color={"#000000"} fontSize={"1em"}/>;
const fontAwesomeBootstrap = <FontAwesomeIcon icon={faBootstrap} color={"#523A76"} fontSize={"1em"}/>;
const fontAwesomeSass = <FontAwesomeIcon icon={faSass} color={"#C36192"} fontSize={"1em"}/>;
const logoSql = {
    height: "1em",
    verticalAlign: "-0.3em",
    fontSize: "1em"
};
const notFontAwesomeMysql = < img src={mysql} style={logoSql} alt={""}/>;

const technos = [
    {logo: fontAwesomeHtml5,

        nom: "Html ",
    },
    {logo: fontAwesomeReact,
        nom: "React ",
    },
    {logo: fontAwesomeBootstrap,
        nom: "Bootstrap  ",
    },
    {logo: fontAwesomeNodejs,
        nom: "NodeJs ",
    },
    {logo: fontAwesomePhp,
        nom: "Php ",
    },
    {logo: fontAwesomeCss3,
        nom: "Css  ",
    },
    {logo: fontAwesomeSymfony,
        nom: "Symfony ",
    },
    {logo: fontAwesomeJs,
        nom: "Javascript",
    },
    {logo: fontAwesomeSass,
        nom: "Sass ",
    },
    {logo: notFontAwesomeMysql,
        nom: "MySql ",
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
                <div className={`menu ${isOpen ? "spin" : ""}`}>
                    {
                        technos.map((techno,index) =>(
                            <div key={index} className={`menu-item`} style={{
                                    transform: `rotate(${(360/technos.length)*index}deg) translate(${isOpen ? 175 : 0 }%)`,
                                    transitionDelay: `${isOpen ? (index*75) : 0 }ms`
                            }}>
                                <h4 className={`${isOpen ? "counter-spin" : ""}-${index}`} style={{
                                    transform: `rotate(${-(360/technos.length)*index}deg)`
                                }}>{techno.nom} {techno.logo}
                                </h4>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={`photo ${isOpen ? "" : "move"}`} onClick={handleSetIsOpen}></div>
        </>
    )
}
export default CircularMenu;