import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';

const fontAwesomeLinkedin = <FontAwesomeIcon icon={faLinkedin} />;
const fontAwesomeGithub = <FontAwesomeIcon icon={faGithub} />;
const fontAwesomeDiscord = <FontAwesomeIcon icon={faDiscord} />
const Contact = () => {
    return(
        <>
            <h3>je suis contact</h3>
            <a>{fontAwesomeLinkedin}</a>
            <a>{fontAwesomeGithub}</a>
            <a>{fontAwesomeDiscord}</a>
        </>
    )
}

export default Contact;