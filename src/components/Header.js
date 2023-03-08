import logo from "../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const fontAwesomeHome = <FontAwesomeIcon icon={faHouse}/>;
const Header = () => {
    return(
        <>
            <div id={"accueil"}></div>
            <header id={"navbar"}>
                <nav>
                    <ul className={"main-nav"}>
                        <li className={"nav-li"}><a href={"#accueil"}><img className={"logo"} src={logo} alt={"logo"}/></a></li>
                        <li className={"nav-li"}><a href={"#accueil"} style={{
                            verticalAlign: "0.5em"
                        }}>{fontAwesomeHome}</a></li>
                        <li className={"nav-li"}><a href={"#apropos"}>À propos</a></li>
                        <li className={"nav-li"}><a href={"#portfolio"}>Portfolio</a></li>
                        <li className={"nav-li"}><a href={"#contact"}>Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section id={"banner"}>
                <div className={"banner-content"}>
                    <h1>THIBAULT TOUZIN</h1>
                    <h2>développeur web & web mobile</h2>
                </div>
            </section>
        </>
    )
}

export default Header;