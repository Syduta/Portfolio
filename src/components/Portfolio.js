import {useState} from "react";

const Portfolio = () => {
    const [showcaption, setshowCaption] = useState(false);
    return(
        <>
            <section id={"portfolio"}>
                <h3>Portfolio</h3>
                <div className={"project-container"}>
                    <div className={"projet newworld"}><div
                        onMouseEnter={() => {setshowCaption(true);}}
                        onMouseLeave={() => {setshowCaption(false);}}
                    ><figcaption>{showcaption && <h1>Hello, World!</h1>}</figcaption></div></div>
                    <div className={"projet underground"}><div><figcaption>coucou</figcaption></div></div>
                    <div className={"projet peps"}><div><figcaption>coucou</figcaption></div></div>
                    <div className={"projet reno"}><div><figcaption>coucou</figcaption></div></div>
                    <div className={"projet wow"}><div><figcaption>coucou</figcaption></div></div>
                    <div className={"projet"}><div><figcaption>coucou</figcaption></div></div>
                </div>
            </section>
        </>
    )
}

export default Portfolio;