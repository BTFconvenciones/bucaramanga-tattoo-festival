import styles from "./Guests.module.css";

import guests from "../../data/guests";

function Guests() {

    return (

        <section
            className={styles.guests}
            id="invitados"
        >

            <div className={styles.container}>

                {/* ========================= */}
                {/* ENCABEZADO */}
                {/* ========================= */}

                <div className={styles.header}>

                    <span className={styles.badge}>
                        Jurados Oficiales
                    </span>

                    <h2>
                        Nuestros Jurados
                    </h2>

                    <p className={styles.description}>
                        Conoce a los tatuadores que harán parte
                        del jurado oficial del Bucaramanga Tattoo
                        Festival 2026.
                    </p>

                </div>


                {/* ========================= */}
                {/* JURADOS */}
                {/* ========================= */}

                <div className={styles.grid}>

                    {guests.map((guest) => (

                        <article
                            key={guest.id}
                            className={styles.card}
                        >

                            <div className={styles.imageWrapper}>

                                <img
                                    src={guest.image}
                                    alt={guest.name}
                                    className={styles.image}
                                />

                            </div>


                            <div className={styles.content}>

                                <h3>
                                    {guest.name}
                                </h3>

                                <span>
                                    {guest.role}
                                </span>


                                {/* ========================= */}
                                {/* REDES */}
                                {/* ========================= */}

                                {Object.values(guest.social).some(
                                    (social) => social
                                ) && (

                                    <div className={styles.socials}>

                                        {guest.social.instagram && (

                                            <a
                                                href={guest.social.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${guest.name} en Instagram`}
                                            >
                                                Instagram
                                            </a>

                                        )}

                                        {guest.social.facebook && (

                                            <a
                                                href={guest.social.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${guest.name} en Facebook`}
                                            >
                                                Facebook
                                            </a>

                                        )}

                                        {guest.social.youtube && (

                                            <a
                                                href={guest.social.youtube}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${guest.name} en YouTube`}
                                            >
                                                YouTube
                                            </a>

                                        )}

                                        {guest.social.twitch && (

                                            <a
                                                href={guest.social.twitch}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${guest.name} en Twitch`}
                                            >
                                                Twitch
                                            </a>

                                        )}

                                        {guest.social.tiktok && (

                                            <a
                                                href={guest.social.tiktok}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${guest.name} en TikTok`}
                                            >
                                                TikTok
                                            </a>

                                        )}

                                    </div>

                                )}

                            </div>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Guests;