import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const fontAwesomeHome = <FontAwesomeIcon icon={faHouse} />;
const Header = () => {
    return(
        <>
            <h2>je suis le header</h2>
            <header>
                <nav>
                    <ul className={"main-nav"}>
                        <li className={"nav-li"}><a href={"#"}><img className={"logo"} src={logo} alt={"logo"}/></a></li>
                        <li className={"nav-li"}><a href={"#"}>{fontAwesomeHome}</a></li>
                        <li className={"nav-li"}><a href={"#"}>À propos</a></li>
                        <li className={"nav-li"}><a href={"#"}>Portfolio</a></li>
                        <li className={"nav-li"}><a href={"#"}>Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;