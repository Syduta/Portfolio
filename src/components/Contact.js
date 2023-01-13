import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';

const fontAwesomeLinkedin = <FontAwesomeIcon icon={faLinkedin} />;
const fontAwesomeGithub = <FontAwesomeIcon icon={faGithub} />;
const fontAwesomeDiscord = <FontAwesomeIcon icon={faDiscord} />
const Contact = () => {
    return(
        <>
            <h2>je suis contact</h2>
            <a>{fontAwesomeLinkedin}</a>
            <a>{fontAwesomeGithub}</a>
            <a>{fontAwesomeDiscord}</a>
        </>
    )
}

export default Contact;