import styles from "./Footer.module.css";

import footer from "../../data/footer";

function Footer() {

    return (

        <footer className={styles.footer}>

            <div className={styles.container}>

                <div className={styles.top}>

                    <div className={styles.brand}>

                        <img
                            src="/assets/logo/tattoo-festival.png"
                            alt="Bucaramanga Tattoo Festival 2026"
                        />

                        <h2>
                            {footer.brand}
                        </h2>

                        <p>
                            {footer.slogan}
                        </p>

                    </div>


                    <div className={styles.info}>

                        <h3>
                            Festival
                        </h3>

                        <p>
                            {footer.dates}
                        </p>

                        <p>
                            {footer.location}
                        </p>

                    </div>


                    <div className={styles.contact}>

                        <h3>
                            Contacto
                        </h3>

                        <p>
                            {footer.email}
                        </p>

                        <p>
                            {footer.phone}
                        </p>

                    </div>


                    <div className={styles.social}>

                        <h3>
                            Síguenos
                        </h3>

                        {footer.social.map((item) => (

                            item.url ? (

                                <a
                                    key={item.id}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.name}
                                </a>

                            ) : (

                                <span key={item.id}>
                                    {item.name}
                                </span>

                            )

                        ))}

                    </div>

                </div>


                <div className={styles.bottom}>

                    <p>
                        {footer.copyright}
                    </p>

                </div>

            </div>

        </footer>

    );

}

export default Footer;