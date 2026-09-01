import styles from "./Marquee.module.css";

function Marquee() {

    const text = [

        "🖋️ TATUAJE",

        "🎨 ARTE",

        "🦋 CULTURA",

        "🖋️ ARTISTAS",

        "🏆 COMPETENCIAS",

        "📚 SEMINARIOS",

        "🛍️ EXHIBIDORES",

        "🤝 COMUNIDAD",

        "⭐ INVITADOS"

    ];

    const items = [...text, ...text];

    return (

        <section
            className={styles.marquee}
            aria-label="Bucaramanga Tattoo Festival"
        >

            <div className={styles.track}>

                {items.map((item, index) => (

                    <span key={index}>
                        {item}
                    </span>

                ))}

            </div>

        </section>

    );

}

export default Marquee;