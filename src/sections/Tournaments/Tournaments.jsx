import styles from "./Tournaments.module.css";
import tournaments from "../../data/tournaments";


function Tournaments() {

    return (

        <section
            className={styles.tournaments}
            id="torneos"
        >

            <div className={styles.container}>

                <span className={styles.badge}>
                    BGA TATTOO GEEK
                </span>


                <h2>
                    Dos mundos. Una misma celebración.
                </h2>


                <p className={styles.description}>
                    El Bucaramanga Tattoo Festival también se encuentra
                    con la cultura Geek. Una programación especial que reúne
                    gaming, cosplay y K-Pop para disfrutar en comunidad.
                </p>


                <div className={styles.intro}>

                    <span>
                        🖋️ TATTOO
                    </span>

                    <strong>
                        ×
                    </strong>

                    <span>
                        🎮 GEEK
                    </span>

                </div>


                <div className={styles.grid}>

                    {tournaments.map((tournament) => (

                        <article
                            key={tournament.id}
                            className={styles.card}
                        >

                            <div className={styles.imageContainer}>

                                <img
                                    src={tournament.image}
                                    alt={tournament.title}
                                    className={styles.image}
                                    loading="lazy"
                                />

                                <span className={styles.category}>
                                    {tournament.category}
                                </span>

                            </div>


                            <div className={styles.content}>

                                <h3>
                                    {tournament.title}
                                </h3>


                                <p>
                                    {tournament.description}
                                </p>


                                <div className={styles.info}>

                                    <div>

                                        <strong>
                                            🎮 Actividad
                                        </strong>

                                        <span>
                                            {tournament.category}
                                        </span>

                                    </div>


                                    <div>

                                        <strong>
                                            📅 Fecha
                                        </strong>

                                        <span>
                                            {tournament.date}
                                        </span>

                                    </div>

                                </div>


                                {tournament.register && (

                                    <a
                                        href={tournament.register}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.button}
                                    >
                                        Conocer más
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


export default Tournaments;