import { useState } from "react";

import styles from "./Navbar.module.css";

import links from "../../data/links";

import Button from "../Button/Button";


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);


    const closeMenu = () => {

        setMenuOpen(false);

    };


    return (

        <header className={styles.navbar}>

            <div className={styles.container}>


                {/* ========================= */}
                {/* LOGO */}
                {/* ========================= */}

                <a
                    href="#inicio"
                    className={styles.logo}
                    onClick={closeMenu}
                >

                    <img
                        src="assets/logo/tattoo-festival.png"
                        alt="Bucaramanga Tattoo Festival 2026"
                    />

                </a>


                {/* ========================= */}
                {/* MENÚ DESKTOP */}
                {/* ========================= */}

                <nav className={styles.menu}>

                    <a href="#inicio">
                        Inicio
                    </a>

                    <a href="#invitados">
                        Artistas
                    </a>

                    <a href="#participantes">
                        Participantes
                    </a>

                    <a href="#zona-comercial">
                        Expositores
                    </a>

                    <a href="#torneos">
                        BGA Tattoo Geek
                    </a>

                    <a href="#agenda">
                        Agenda
                    </a>

                    <a href="#patrocinadores">
                        Aliados
                    </a>

                    <a href="#faq">
                        FAQ
                    </a>

                </nav>


                {/* ========================= */}
                {/* BOTONES DESKTOP */}
                {/* ========================= */}

                <div className={styles.actions}>

                    <Button
                        href={links.exhibitor}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                    >
                        Quiero ser Expositor
                    </Button>


                    <Button
                        href={links.tickets}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                    >
                        Comprar Entradas
                    </Button>

                </div>


                {/* ========================= */}
                {/* HAMBURGUESA */}
                {/* ========================= */}

                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={
                        menuOpen
                            ? "Cerrar menú"
                            : "Abrir menú"
                    }
                    aria-expanded={menuOpen}
                >

                    <span></span>
                    <span></span>
                    <span></span>

                </button>

            </div>


            {/* ========================= */}
            {/* MENÚ MÓVIL */}
            {/* ========================= */}

            <div
                className={`
                    ${styles.mobileMenu}
                    ${menuOpen ? styles.show : ""}
                `}
            >

                <button
                    className={styles.close}
                    onClick={closeMenu}
                    aria-label="Cerrar menú"
                >
                    ✕
                </button>


                <a
                    href="#inicio"
                    onClick={closeMenu}
                >
                    Inicio
                </a>


                <a
                    href="#invitados"
                    onClick={closeMenu}
                >
                    Artistas
                </a>


                <a
                    href="#participantes"
                    onClick={closeMenu}
                >
                    Participantes
                </a>


                <a
                    href="#zona-comercial"
                    onClick={closeMenu}
                >
                    Expositores
                </a>


                <a
                    href="#torneos"
                    onClick={closeMenu}
                >
                    BGA Tattoo Geek
                </a>


                <a
                    href="#agenda"
                    onClick={closeMenu}
                >
                    Agenda
                </a>


                <a
                    href="#patrocinadores"
                    onClick={closeMenu}
                >
                    Aliados
                </a>


                <a
                    href="#faq"
                    onClick={closeMenu}
                >
                    FAQ
                </a>


                {/* ========================= */}
                {/* BOTONES MÓVILES */}
                {/* ========================= */}

                <div className={styles.mobileButtons}>

                    <Button
                        href={links.exhibitor}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                    >
                        Quiero ser Expositor
                    </Button>


                    <Button
                        href={links.tickets}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                    >
                        Comprar Entradas
                    </Button>

                </div>

            </div>

        </header>

    );

}


export default Navbar;