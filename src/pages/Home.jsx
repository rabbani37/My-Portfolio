
import About from "../components/About"
import Contact from "../components/Contact"
import Education from "../components/Education"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import SectionDivider from "../components/SectionDivider"
import SkillBadge from "../components/SkillBadge"


function Home() {
    return (
        <div>
            <section id="home" >
                <Hero />
            </section>

            <SectionDivider />

            <section id="about"><About /></section>
            <SectionDivider />
            <section id="skills"> <SkillBadge /> </section>
            <SectionDivider />
            <section id="education"><Education /></section>
            <SectionDivider />


            <section id="projects"><Projects /></section>
            <SectionDivider />
            <section id="contact"><Contact /></section>
            <SectionDivider />
        </div>
    )
}

export default Home