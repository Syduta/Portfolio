import logo from "../logo.png";

const Header = () => {
    return(
        <>
            <header>
                <h2>je suis le header</h2>
                <nav>
                    <ul>
                        <li><a><img className={"logo"} src={logo} alt={"logo"}/></a></li>
                        <li><a>À propos</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;