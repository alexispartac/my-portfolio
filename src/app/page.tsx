'use client'
import { Navigation } from "../components/Navigation";
import { Preview } from "../components/Preview";    
import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Page() {
    return (
        <>
            <Navigation />
            <Preview />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}