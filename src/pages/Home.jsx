
import About from "../components/About"
import ContactForm from "../components/ContactForm"
import Hero from "../components/Hero"
import Projects from "../components/Projects"


function Home() {
  return (
    <div>
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><ContactForm /></section>
    </div>
  )
}

export default Home