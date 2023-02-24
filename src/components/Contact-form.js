import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";

const user = <FontAwesomeIcon icon={faUser} fontSize={"1em"} />;
const email = <FontAwesomeIcon icon={faEnvelope} fontSize={"1em"} />;
const message = <FontAwesomeIcon icon={faMessage} fontSize={"1em"} />;
const ContactForm = () => {
    return(
        <>
            <form>
                <div className={"input-container"}>
                    <label>{user}</label>
                    <input type={"text"} placeholder={"Votre prénom et nom"} name={"user_name"} required />
                </div>
                <div className={"input-container"}>
                    <label>{email}</label>
                    <input type={"email"} placeholder={"Votre adresse email"} name={"user_email"} required />
                </div>
                <div className={"input-container"}>
                    <label>{message}</label>
                    <textarea name={"message"} placeholder={"Le message à envoyer"} />
                </div>
                <input type={"submit"} value={"Envoyer"} required />
            </form>
        </>
    )
}

export default ContactForm;