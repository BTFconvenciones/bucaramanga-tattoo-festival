import styles from "./HeroButtons.module.css";
import links from "../../data/links";

function HeroButtons() {
    return (
        <div className={styles.buttons}>

            <a
                href={links.inscriptions}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
            >
                INSCRIPCIONES
            </a>

            <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondary}
            >
                CONTACTO
            </a>

        </div>
    );
}

export default HeroButtons;