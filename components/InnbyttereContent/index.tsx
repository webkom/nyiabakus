import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfoSectionWrapper from "../InfoSectionWrapper";
import styles from "./styles.module.css";
import { MTDT, MTKOM } from "@/utils/constants";
import Card, { CardData, CardWrapper } from "@/components/Card";
import Icon from "@/components/Icon";

const InnbyttereContent: React.FC = () => {
  const { asPath, replace } = useRouter();
  const [hash, setHash] = useState<string>();

  useEffect(() => setHash(asPath.split("#")[1]), [asPath]);

  return (
    <>
    <InfoSectionWrapper className={styles.header}>
      <h1>Velkommen som innbytter til Abakus!</h1>
      <p>
        Skal du, eller har du kanskje allerede byttet til enten {MTDT.name} eller {MTKOM.name}? Da er du kommet til riktig sted!{" "}
      </p>
      <p>
        Her finner du informasjon som kan være nyttig for deg som innbytter. Hvis du lurer på noe mer, er det bare å ta kontakt med <a href="mailto:prosjekt-innbyttere@abakus.no">prosjekt-innbyttere@abakus.no</a> 
      </p>
    </InfoSectionWrapper>
    <InfoSectionWrapper className={styles.infoMeetingSection}>
      <div className={styles.flexRow}>
      <Icon name={'calendar'} className={styles.icon}></Icon>
      <h2 className={styles.faqSectionHeader}>Infomøte for innbyttere høst 2024 </h2>
      
      </div>
    <p>I starten av semesteret skal det arrangeres et infomøte for innbyttere til Abakus, slik at du raskt føler deg som en ekte abakule. Her får du muligheten til å møte andre innbyttere, samt etablerte abakuler med flere tips og triks til hvordan man kan trives best mulig i en av NTNU´s feteste lineforeninger</p>
    <h3>Dato og Sted kommer!</h3>

    </InfoSectionWrapper>
    <InfoSectionWrapper className={styles.info}>
      <h2>Hvilken fadderperiode skal jeg delta på?</h2>
      <p>Abakus arrangerer både vanlig fadderperiode for 1. klassinger i tillegg til en masterfadderperiode for de som begynner på 2-årig master. 
        Som innbytter er du velkommen til å delta på begge, basert på hvilke klassetrinn du helst ønsker bli kjent med! </p> 
       
      
<div className={styles.flexRow}>
      <Card
            icon={'sparkles-outline'}
            title='Fadderperioden'
            description={`Skal du hovedsakelig ha fag med 1. og 2. klassinger? Da er kanskje den vanlige fadderperioden riktig for deg!`}
            buttons={[{href: "/fadderperioden", text: "Les mer"}]}
          />
       <Card
            icon={'sunny-outline'}
            title='Masterfadderperioden'
            description='Skal du ta flest fag med 3. klasse og oppover ønsker du kanskje heller delta på masterfadderperioden!'
            buttons={[{href: "/masterfadderperioden", text: "Les mer"}]}
          />
       </div>
      </InfoSectionWrapper>
    <InfoSectionWrapper >
      <div className={styles.flexRow}>
        
      </div>
  

    </InfoSectionWrapper>
    
    </>
  );
};

export default InnbyttereContent;