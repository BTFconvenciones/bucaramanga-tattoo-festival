import styles from "./RegistrationHub.module.css";

import links from "../../data/links";

import SectionContainer from "../../components/ui/SectionContainer/SectionContainer";
import SectionTitle from "../../components/ui/SectionTitle/SectionTitle";


const registrations = [
    {
        id:1,
        title:"Comprar Entradas",
        description:
            "Asegura tu entrada y prepárate para vivir tres días de arte, tatuaje y cultura en Bucaramanga.",
        button:"Comprar Entradas",
        link:links.tickets,
    },
    {
        id:2,
        title:"Quiero ser Expositor",
        description:
            "Haz parte de nuestra zona comercial y presenta tu marca, productos o propuesta durante el festival.",
        button:"Solicitar Stand",
        link:links.exhibitor,
    },
    {
        id:3,
        title:"Quiero ser Patrocinador",
        description:
            "Conecta tu marca con el Bucaramanga Tattoo Festival y descubre nuestras opciones de participación.",
        button:"Más información",
        link:links.sponsor,
    },
];


function RegistrationHub() {

    return (

        <section
            className={styles.registration}
            id="registro"
        >

            <SectionContainer>

                <SectionTitle
                    badge="Sé parte del festival"
                    title="Vive el Bucaramanga Tattoo Festival"
                    subtitle="Encuentra aquí las principales formas de participar y hacer parte de esta celebración del arte, el tatuaje y la cultura."
                />

                <div className={styles.grid}>

                    {registrations.map((item) => (

                        <article
                            key={item.id}
                            className={styles.card}
                        >

                            <h3>
                                {item.title}
                            </h3>

                            <p>
                                {item.description}
                            </p>

                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.button}
                            >
                                {item.button}
                            </a>

                        </article>

                    ))}

                </div>

            </SectionContainer>

        </section>

    );

}

export default RegistrationHub;