import styles from "./Experience.module.css";

import experience from "@/data/experience";

import ExperienceCard from "./ExperienceCard";

import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";


function Experience() {

    return (

        <section
            id="experience"
            className={styles.experience}
        >

            <div className={styles.container}>

                <SectionHeader
                    badge="Todo en un solo lugar"
                    title="Vive la experiencia Tattoo"
                    description="Tres días de arte, tatuaje y cultura en Bucaramanga, con artistas nacionales e internacionales, exhibidores, competencias, experiencias y una programación especial que conecta el mundo Tattoo con la cultura Geek."
                />

                <div className={styles.grid}>

                    {experience.map((item) => (

                        <ExperienceCard
                            key={item.id}
                            {...item}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Experience;