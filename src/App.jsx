import "./styles/app.css";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero/Hero";

import Marquee from "./sections/Marquee/Marquee";

import Guests from "./sections/Guests/Guests";

import Participants from "./sections/Participants/Participants";

import Exhibitors from "./sections/Exhibitors/Exhibitors";

import Tournaments from "./sections/Tournaments/Tournaments";

import RegistrationHub from "./sections/RegistrationHub/RegistrationHub";

import Schedule from "./sections/Schedule/Schedule";

import Sponsors from "./sections/Sponsors/Sponsors";

import Faq from "./sections/Faq/Faq";

import Footer from "./sections/Footer/Footer";

import Analytics from "./components/system/Analytics";


function App() {

    return (

        <div className="app">

            <Analytics />

            <Navbar />

            <main className="main-layout">

                <Hero />

                <Marquee />

                <Guests />

                <Participants />

                <Exhibitors />

                <Tournaments />

                <RegistrationHub />

                <Schedule />

                <Sponsors />

                <Faq />

            </main>

            <Footer />

        </div>

    );

}

export default App;