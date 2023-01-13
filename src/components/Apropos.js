import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faNodeJs, faReact, faPhp, faSymfony } from '@fortawesome/free-brands-svg-icons';

const fontAwesomeHtml5 = <FontAwesomeIcon icon={faHtml5} />
const fontAwesomeReact = <FontAwesomeIcon icon={faReact} />
const fontAwesomeJs = <FontAwesomeIcon icon={faJs} />
const fontAwesomeNodejs = <FontAwesomeIcon icon={faNodeJs} />
const fontAwesomePhp = <FontAwesomeIcon icon={faPhp} />
const fontAwesomeCss3 = <FontAwesomeIcon icon={faCss3Alt} />
const fontAwesomeSymfony = <FontAwesomeIcon icon={faSymfony} />
const Apropos = () => {
    return(
        <>
            <section id={"apropos"}>
                <div>
                    <h3>À propos</h3>
                    <p>Développeur passionné depuis mes premières lignes de code. </p>
                    <p>Curieux, persévérant, minutieux et impatient de travailler avec vous !</p>
                    <p>Mes compétences en développement regroupent <ul><li>html<a>{fontAwesomeHtml5}</a> css<a>{fontAwesomeCss3}</a>, </li><li>javascript<a>{fontAwesomeJs}</a> react<a>{fontAwesomeReact}</a> nodejs<a>{fontAwesomeNodejs}</a>, </li><li>php<a>{fontAwesomePhp}</a> symfony<a>{fontAwesomeSymfony}</a>, mysql </li></ul></p>
                </div>
            </section>
        </>
    )
}

export default Apropos;