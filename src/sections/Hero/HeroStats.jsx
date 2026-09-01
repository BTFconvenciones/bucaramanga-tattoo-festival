import styles from "./HeroStats.module.css";

const stats = [
  {
    number: "+5.000",
    label: "Visitantes",
    icon: "👥",
  },
  {
    number: "3",
    label: "Días de festival",
    icon: "📅",
  },
  {
    number: "ARTISTAS",
    label: "Nacionales e internacionales",
    icon: "🖋️",
    compact: true,
  },
  {
    number: "2026",
    label: "Edición oficial",
    icon: "🦋",
  },
];

function HeroStats() {
  return (
    <div className={styles.stats}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.card}>
          <span className={styles.icon}>{stat.icon}</span>

          <span
            className={`${styles.number} ${
              stat.compact ? styles.textNumber : ""
            }`}
          >
            {stat.number}
          </span>

          <span
            className={`${styles.label} ${
              stat.compact ? styles.compactLabel : ""
            }`}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;