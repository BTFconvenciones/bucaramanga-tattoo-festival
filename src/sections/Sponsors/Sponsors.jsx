import styles from "./Sponsors.module.css";

import sponsors from "../../data/sponsors";

function Sponsors() {

    const sponsorsOfficial = sponsors.filter(
        (item) => item.type === "sponsor"
    );

    const allies = sponsors.filter(
        (item) => item.type === "ally"
    );


    function Logo({ item }) {

        const content = (
            <div className={styles.logoCard}>

                <div className={styles.logoWrapper}>

                    <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                    />

                </div>

            </div>
        );


        if (!item.link) {
            return content;
        }


        return (
            <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.logoLink}
                aria-label={`Visitar ${item.name}`}
            >
                {content}
            </a>
        );

    }


    return (

        <section
            className={styles.sponsors}
            id="patrocinadores"
        >

            <div className={styles.container}>

                {/* ========================= */}
                {/* ENCABEZADO */}
                {/* ========================= */}

                <div className={styles.header}>

                    <span className={styles.badge}>
                        Patrocinadores
                    </span>

                    <h2>
                        Quienes hacen posible el festival
                    </h2>

                    <p className={styles.description}>
                        Marcas, empresas y organizaciones que hacen parte
                        del Bucaramanga Tattoo Festival 2026.
                    </p>

                </div>


                {/* ========================= */}
                {/* PATROCINADORES */}
                {/* ========================= */}

                {sponsorsOfficial.length > 0 && (

                    <div className={styles.section}>

                        <div className={styles.titleRow}>

                            <span className={styles.line}></span>

                            <h3>
                                PATROCINADORES
                            </h3>

                            <span className={styles.line}></span>

                        </div>


                        <div className={styles.logoGrid}>

                            {sponsorsOfficial.map((item) => (

                                <Logo
                                    key={item.id}
                                    item={item}
                                />

                            ))}

                        </div>

                    </div>

                )}


                {/* ========================= */}
                {/* ALIADOS */}
                {/* ========================= */}

                {allies.length > 0 && (

                    <div className={styles.section}>

                        <div className={styles.titleRow}>

                            <span className={styles.line}></span>

                            <h3>
                                ALIADOS
                            </h3>

                            <span className={styles.line}></span>

                        </div>


                        <div className={styles.logoGrid}>

                            {allies.map((item) => (

                                <Logo
                                    key={item.id}
                                    item={item}
                                />

                            ))}

                        </div>

                    </div>

                )}

            </div>

        </section>

    );

}

export default Sponsors;