import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMessage, faLock } from "@fortawesome/free-solid-svg-icons";
import {useRef} from "react";
import emailjs from '@emailjs/browser';

const user = <FontAwesomeIcon icon={faUser} fontSize={"1em"} />;
const email = <FontAwesomeIcon icon={faEnvelope} fontSize={"1em"} />;
const message = <FontAwesomeIcon icon={faMessage} fontSize={"1em"} />;
const cadenas = <FontAwesomeIcon icon={faLock} fontSize={"1em"} />;
const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const control = form.current[3].value;
        if (control === "15") {
            emailjs.sendForm(`${process.env.REACT_APP_YOUR_SERVICE_ID}`, `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_YOUR_PUBLIC_KEY}`)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return(
        <>
            <form ref={form} autoComplete={"off"} onSubmit={sendEmail}>
                <div className={"input-container"}>
                    <label>{user}</label>
                    <input type={"text"} placeholder={`Votre prénom et nom`} aria-label={"Entrez votre prénom et nom."} name={"user_name"} required />
                </div>
                <div className={"input-container"}>
                    <label>{email}</label>
                    <input type={"email"} placeholder={"Votre adresse email"} aria-label={"Entrez votre adresse email."} name={"user_email"} required />
                </div>
                <div className={"input-container"}>
                    <label>{message}</label>
                    <textarea name={"message"} placeholder={"Le message à envoyer"} aria-label={"Tapez votre message."} />
                </div>
                <div className={"input-container"}>
                    <label>{cadenas}</label>
                    <input name={"lock"} type={"text"} placeholder={`6 + 9 = ?`} aria-label={"combien font six plus neuf ?"} required />
                </div>
                <input type={"submit"} value={"Envoyer"} required />
            </form>
        </>
    )
}

export default ContactForm;