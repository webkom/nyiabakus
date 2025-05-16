import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import Link from "@/components/Link";
import { MTDT, MTKOM } from "@/utils/constants";

const Header = () => {
  return (
    <InfoSectionWrapper className={styles.header}>
      <img src="/abakus_logo_black.png" alt="Abakus" className={styles.logo} />
      <h1>Velkommen til Abakus!</h1>
      <p>
        Vi er linjeforeningen for studentene ved {MTDT.name} og {MTKOM.name} på
        NTNU, og drives av studenter ved disse studiene. Som linjeforening
        jobber vi for at du som student har det bra under studietiden din. Dette
        gjør vi blant annet ved å arrangere Fadderperioden,
        bedriftspresentasjoner, kurs, fester, lavterskel arrangementer og mye
        mer!
      </p>
      <p>
        Denne nettsiden er spesielt rettet mot deg som er ny student, for å
        hjelpe deg med å samle alt du trenger å vite de første ukene av
        studenttilværelsen din. Vi håper du får en helt nydelig start på
        studiet, og at vi får bli godt kjent med deg de neste fem årene! <br />
        Ikke nøl med å <Link href="/faq#kontakt">kontakte oss</Link> dersom det
        er noe du ikke finner svar på her!
      </p>
    </InfoSectionWrapper>
  );
};

export default Header;
