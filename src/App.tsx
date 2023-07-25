import styles from "./App.module.css";
import useWindowSize from "./hooks/useWindowSize";
import { useEffect } from "react";
import BurgerNav from "./components/BurgerNav/BurgerNav";
import NavLinks from "./components/NavLinks/NavLinks";
import AboutSection from "./components/AboutSection/AboutSection";
// import ClientSection from "./components/ClientSection/ClientSection";
import ContactSection from "./components/ContactSection/ContactSection";

export default function App() {
  const windowSize = useWindowSize();

  const setScrollVariable = () => {
    document.body.style.setProperty(
      "--scroll",
      (
        window.pageYOffset /
        (document.body.offsetHeight - window.innerHeight)
      ).toString()
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", setScrollVariable);
    setScrollVariable();
    return () => window.removeEventListener("scroll", setScrollVariable);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h3>sponsor_space</h3>
        <nav>{windowSize.w > 480 ? <NavLinks /> : <BurgerNav />}</nav>
      </header>
      <main className={styles.main}>
        <header className={styles.hero}>
          <h1>find your audience</h1>
          <video
            className={`portraitVideo ${styles.heroVideo}`}
            src="/ocean-waves.mp4"
            loop
            muted
            autoPlay
            playsInline
          ></video>
        </header>
        <section id="about" className={styles.about}>
          <AboutSection />
        </section>
        {/* <section id="clients" className={styles.clients}>
          <ClientSection />
        </section> */}
        <section id="contact" className={styles.contact}>
          <ContactSection />
        </section>
      </main>
    </>
  );
}
