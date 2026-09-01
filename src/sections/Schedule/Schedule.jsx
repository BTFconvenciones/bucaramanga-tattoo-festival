import styles from "./Schedule.module.css";


function Schedule() {

    return (

        <section
            className={styles.schedule}
            id="agenda"
        >

            <div className={styles.container}>

                <span className={styles.badge}>
                    Agenda
                </span>

                <h2>
                    Cronograma del Festival
                </h2>

                <p className={styles.description}>
                    Estamos preparando la programación oficial del
                    Bucaramanga Tattoo Festival.
                    Muy pronto podrás consultar horarios, actividades,
                    artistas y experiencias de los tres días del festival.
                </p>

                <div className={styles.comingSoon}>

                    <div className={styles.icon}>
                        📅
                    </div>

                    <span className={styles.label}>
                        11 · 12 · 13 SEPTIEMBRE 2026
                    </span>

                    <h3>
                        Próximamente
                    </h3>

                    <p>
                        El cronograma oficial estará disponible
                        muy pronto.
                    </p>

                </div>

            </div>

        </section>

    );

}

export default Schedule;