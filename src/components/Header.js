import logo from "../img/logo.webp";
import CV from "../img/CV_Thibault_Touzin.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from "react";


const fontAwesomeHome = <FontAwesomeIcon icon={faHouse}/>;
const Header = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <>
            <div id={"accueil"}></div>
            <header id={"navbar"}>
                <nav className={"desktop-nav"}>
                    <ul className={"main-nav"}>
                        <li className={"nav-li"}><a href={"#accueil"}><img className={"logo"} src={logo} alt={"logo"}/></a></li>
                        <li className={"nav-li"}><a href={"#accueil"} style={{
                            verticalAlign: "0.5em"
                        }}>{fontAwesomeHome}</a></li>
                        <li className={"nav-li"}><a href={"#apropos"}>À propos</a></li>
                        <li className={"nav-li"}><a href={"#portfolio"}>Portfolio</a></li>
                        <li className={"nav-li"}><a href={"#contact"}>Contact</a></li>
                        <li className={"nav-li"}><a href={CV} target={"_blank"} rel="noopener noreferrer" download>Mon CV</a></li>
                    </ul>
                </nav>
                <nav className={"mobile-nav"}>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </div>
                </nav>
                <div className={menu_class}>
                    <ul className={"mob-nav"}>
                        <li className={"nav-li"}><a href={"#accueil"}><img className={"logo"} src={logo} alt={"logo"}/></a></li>
                        <li className={"nav-li"}><a href={"#apropos"}>À propos</a></li>
                        <li className={"nav-li"}><a href={"#portfolio"}>Portfolio</a></li>
                        <li className={"nav-li"}><a href={"#contact"}>Contact</a></li>
                        <li className={"nav-li"}><a href={CV} target={"_blank"} rel="noopener noreferrer" download>Mon CV</a></li>
                    </ul>
                </div>
            </header>
            <section id={"banner"}>
                <div className={"smoke-container"}></div>
                <div className={"smoke-container-2"}></div>
                <div className={"smoke-container-3"}></div>
                <div className={"banner-content"}>
                    <h1>THIBAULT TOUZIN</h1>
                    <h2>développeur web & web mobile</h2>
                </div>
            </section>
        </>
    )
}

export default Header;