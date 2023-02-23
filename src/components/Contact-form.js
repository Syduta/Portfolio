


const ContactForm = () => {
    return(
        <>
            <form>
                <label>Nom</label>
                <input type={"text"} placeholder={"Votre prénom et nom"} name={"user_name"} required />
                <label>Email</label>
                <input type={"email"} placeholder={"Votre adresse email"} name={"user_email"} required />
                <label>Message</label>
                <textarea name={"message"} placeholder={"Le message à envoyer"} />
                <input type={"submit"} value={"Envoyer"} required />
            </form>
        </>
    )
}

export default ContactForm;