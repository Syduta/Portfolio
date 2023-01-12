import logo from "../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const fontAwesomeHome = <FontAwesomeIcon icon={faHouse} />;
const Header = () => {
    return(
        <>
            <header id={"accueil"}>
                <nav id={"navbar"}>
                    <ul className={"main-nav"}>
                        <li className={"nav-li"}><a href={"#"}><img className={"logo"} src={logo} alt={"logo"}/></a></li>
                        <li className={"nav-li"}><a href={"#accueil"}>{fontAwesomeHome}</a></li>
                        <li className={"nav-li"}><a href={"#"}>À propos</a></li>
                        <li className={"nav-li"}><a href={"#"}>Portfolio</a></li>
                        <li className={"nav-li"}><a href={"#"}>Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section id={"banner"}>
                <div className={"banner-content"}>
                    <h1>Thibault TOUZIN</h1>
                    <h2>développeur web & web mobile</h2>
                </div>
            </section>
        </>
    )
}

export default Header;