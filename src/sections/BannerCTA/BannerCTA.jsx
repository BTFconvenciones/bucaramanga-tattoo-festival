import styles from "./BannerCTA.module.css";
import links from "../../data/links";

function BannerCTA() {

    return (

        <section className={styles.banner}>

            <div className={styles.overlay}></div>

            <div className={styles.content}>

                <span className={styles.badge}>
                    BGA TATTOO GEEK
                </span>

                <h2>
                    ¿ESTÁS LISTO PARA
                    <br />
                    VIVIR LA EXPERIENCIA?
                </h2>

                <p>
                    Gaming, cosplay y K-Pop hacen parte
                    de la programación BGA Tattoo Geek
                    dentro del Bucaramanga Tattoo Festival.
                </p>

                <a
                    href={links.tournaments}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                >
                    🎮 MÁS INFORMACIÓN
                </a>

            </div>

        </section>

    );

}

export default BannerCTA;