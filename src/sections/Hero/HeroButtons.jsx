import styles from "./HeroButtons.module.css";

function HeroButtons() {

    return (

        <div className={styles.buttons}>

            <a
                href="#inscripciones"
                className={styles.secondary}
            >
                INSCRIPCIONES
            </a>

            <a
                href="#contacto"
                className={styles.secondary}
            >
                CONTACTO
            </a>

        </div>

    );

}

export default HeroButtons;