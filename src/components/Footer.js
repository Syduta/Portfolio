import logo from "../img/logo.webp";

const Footer = () => {
    return(
        <>
            <div className={"footer"}>
                <p>© 2023 Thibault TOUZIN, Tous droits réservés.</p>
                <img className={"logo"} src={logo} alt={"logo"}/>
            </div>
        </>
    )
}

export default Footer;