import styles from "./Participants.module.css";
import participants from "../../data/participants";

function Participants() {
    return (
        <section className={styles.participants} id="participantes">
            <div className={styles.container}>

                <div className={styles.header}>
                    <span className={styles.badge}>
                        Artistas en Competencia
                    </span>

                    <h2>
                        19 artistas.<br />
                        Una misma pasión.
                    </h2>

                    <p className={styles.description}>
                        Conoce a los tatuadores que llegan al Bucaramanga
                        Tattoo Festival para poner su talento, técnica y
                        creatividad a prueba en la competencia.
                    </p>
                </div>

                <div className={styles.grid}>
                    {participants.map((participant) => (
                        <article
                            key={participant.id}
                            className={styles.card}
                        >
                            <div className={styles.imageWrapper}>
                                <img
                                    src={participant.image}
                                    alt={`Participante ${participant.name}`}
                                    className={styles.image}
                                    loading="lazy"
                                />
                            </div>

                            <div className={styles.info}>
                                <h3>{participant.name}</h3>

                                {participant.instagram && (
                                    <a
                                        href={`https://instagram.com/${participant.instagram.replace("@", "")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.instagram}
                                    >
                                        {participant.instagram}
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Participants;