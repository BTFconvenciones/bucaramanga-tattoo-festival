import styles from "./HeroContent.module.css";

import HeroInfo from "./HeroInfo";
import HeroButtons from "./HeroButtons";
import HeroCountdown from "./HeroCountdown";
import HeroStats from "./HeroStats";
import HeroBadges from "./HeroBadges";
import HeroScroll from "./HeroScroll";

function HeroContent() {
  return (
    <div className={styles.content}>

      <span className={styles.badge}>
        11 · 12 · 13 SEPTIEMBRE 2026
      </span>

      <div className={styles.logoWrapper}>
        <img
          src="assets/logo/tattoo-festival.png"
          alt="Bucaramanga Tattoo Festival 2026"
          className={styles.logo}
        />
      </div>

      <p>
        Tres días de arte, tatuaje y cultura alternativa,
        con artistas nacionales e internacionales,
        expositores, concursos, seminarios y experiencias
        para los amantes del arte corporal y mucho más.
      </p>

      <HeroInfo />

      <HeroButtons />

      <HeroCountdown />

      <HeroStats />

      <HeroBadges />

      <HeroScroll />

    </div>
  );
}

export default HeroContent;