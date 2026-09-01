import styles from "./HeroBadges.module.css";

const badges = [
    "🖋️ Tattoo",
    "🎨 Arte",
    "🦋 Cultura",
    "👨‍🎨 Artistas",
    "🏆 Competencias",
    "🛍️ Zona Comercial",
    "📚 Seminarios",
    "🤝 Comunidad"
];

function HeroBadges() {

    return (

        <div className={styles.badges}>

            {badges.map((badge) => (

                <span
                    key={badge}
                    className={styles.badge}
                >
                    {badge}
                </span>

            ))}

        </div>

    );

}

export default HeroBadges;