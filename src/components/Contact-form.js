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

        const mail = form.current[1].value;
        const control = form.current[3].value;

        const serviceId = process.env.REACT_APP_YOUR_SERVICE_ID;
        const templateId = process.env.REACT_APP_YOUR_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_YOUR_PUBLIC_KEY;
        const reacherAuthToken = process.env.REACT_APP_REACHER_AUTH_TOKEN;
        const reacherUrl = process.env.REACT_APP_REACHER_URL;

        const verifyMail = async () => {
            const options = {
                method: 'POST',
                headers: {'Content-Type': 'application/json', Authorization: reacherAuthToken},
                body: JSON.stringify({"to_email":mail})
            };
            await fetch(`${reacherUrl}`, options)
                .then(response => response.json())
                .then(response => {
                    const isReachable = response;
                    if (isReachable.is_reachable === "safe"){
                        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
                            .then((result) => {
                                return(
                                    alert.success("message envoyé")
                                )
                            }, (error) => {
                                return(
                                    alert.err("erreur, vérifiez les champs")
                                )
                            });
                    }else{
                        return(
                            alert.err("email non valide")
                        )
                    }
                })
                .catch(err => console.error(err));
        }

        if (control === "15") {
             verifyMail();
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