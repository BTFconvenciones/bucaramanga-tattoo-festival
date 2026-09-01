import { useState } from "react";

import styles from "./Exhibitors.module.css";

import exhibitors from "../../data/exhibitors";

import SearchBar from "@/components/SearchBar/SearchBar";


function Exhibitors() {

    const [search, setSearch] = useState("");

    const filtered = exhibitors.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );


    function Profile({ item }) {

        return (

            <a
                href={item.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.profile}
            >

                <div className={styles.imageWrapper}>

                    <img
                        src={item.image}
                        alt={item.name}
                        className={styles.logo}
                        loading="lazy"
                    />

                </div>


                <div className={styles.info}>

                    <h3>
                        {item.name}
                    </h3>

                    <span>
                        Visitar Instagram →
                    </span>

                </div>

            </a>

        );

    }


    return (

        <section
            id="zona-comercial"
            className={styles.exhibitors}
        >

            <div className={styles.container}>

                <span className={styles.badge}>
                    Zona Comercial
                </span>

                <h2>
                    Nuestros Expositores
                </h2>

                <p className={styles.description}>
                    Descubre estudios, marcas, artistas, emprendimientos
                    y propuestas que harán parte del Bucaramanga Tattoo Festival.
                </p>


                <SearchBar
                    value={search}
                    onChange={setSearch}
                />

            </div>


            {search === "" ? (

                <div className={styles.exhibitorGrid}>

                    {exhibitors.map((item) => (

                        <Profile
                            key={item.id}
                            item={item}
                        />

                    ))}

                </div>

            ) : (

                <div className={styles.results}>

                    {filtered.length > 0 ? (

                        filtered.map((item) => (

                            <Profile
                                key={item.id}
                                item={item}
                            />

                        ))

                    ) : (

                        <p className={styles.empty}>
                            No encontramos expositores con ese nombre.
                        </p>

                    )}

                </div>

            )}

        </section>

    );

}


export default Exhibitors;