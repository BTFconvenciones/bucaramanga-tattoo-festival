import styles from "./HeroInfo.module.css";

function HeroInfo() {

    const items = [

        {
            icon: "📍",
            title: "Neomundo",
            text: "Bucaramanga"
        },

        {
            icon: "📅",
            title: "11 · 12 · 13",
            text: "Septiembre 2026"
        },

        {
            icon: "🖋️",
            title: "Artistas",
            text: "Nacionales e internacionales"
        },

        {
            icon: "🎨",
            title: "Tattoo",
            text: "Cultura y arte"
        }

    ];

    return (

        <div className={styles.info}>

            {items.map((item, index) => (

                <div
                    key={index}
                    className={styles.card}
                >

                    <div className={styles.icon}>
                        {item.icon}
                    </div>

                    <h3>
                        {item.title}
                    </h3>

                    <span>
                        {item.text}
                    </span>

                </div>

            ))}

        </div>

    );

}

export default HeroInfo;