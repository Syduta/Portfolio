import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';

const fontAwesomeLinkedin = <FontAwesomeIcon icon={faLinkedin} color={"#5AB0F7"}/>;
const fontAwesomeGithub = <FontAwesomeIcon icon={faGithub} color={"#161414"}/>;
const fontAwesomeDiscord = <FontAwesomeIcon icon={faDiscord} color={"#5460E6"}/>
const Contact = () => {
    return(
        <>
            <section id={"contact"}>
                <h3>je suis contact</h3>
                <a>{fontAwesomeLinkedin}</a>
                <a>{fontAwesomeGithub}</a>
                <a>{fontAwesomeDiscord}</a>
            </section>
        </>
    )
}

export default Contact;