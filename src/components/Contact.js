import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';
import ContactForm from "./Contact-form";
import Footer from "./Footer";

const fontAwesomeLinkedin = <FontAwesomeIcon icon={faLinkedin} color={"#5AB0F7"} fontSize={"1.5em"}/>;
const fontAwesomeGithub = <FontAwesomeIcon icon={faGithub} color={"#161414"} fontSize={"1.5em"}/>;
const fontAwesomeDiscord = <FontAwesomeIcon icon={faDiscord} color={"#5460E6"} fontSize={"1.5em"}/>
const Contact = () => {
    return(
        <>
            <section id={"contact"}>
                <h3>Contact</h3>
                <div className={"form-container"}>
                    <p>Je suis joignable par mail,</p>
                    <ContactForm />
                    <p>ou sur </p>
                    <div>
                        <a href={"https://www.linkedin.com/in/thibaulttouzin/"} target={"_blank"} rel="noreferrer" >{fontAwesomeLinkedin}</a>
                        <a href={"https://github.com/Syduta"} target={"_blank"} rel="noreferrer" >{fontAwesomeGithub}</a>
                        <a href={"https://discordapp.com/users/634639038766383105/"} target={"_blank"} rel="noreferrer" >{fontAwesomeDiscord}</a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact;
