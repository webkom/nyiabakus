import styles from "./styles.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import Link from "@/components/Link";

const InfoSectionCompanyEvents = () => {
  return (
    <InfoSectionWrapper
      id="labamba"
      className={styles.companyEventsSection}
      contentClassName={styles.companyEventsSectionContent}
    >
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>Bedriftspresentasjoner og -kurs</h2>
        <p>
          Gjennom Bedkom og Fagkom arrangerer Abakus bedriftspresentasjoner og
          faglige kurs gjennom hele studieåret.
        </p>
        <p>
          Bedriftspresentasjoner er arrangementer der bedrifter kommer til
          Trondheim for å presentere seg selv og hva de driver med. Etter
          presentasjonen vil bedriften ofte ta med studentene ut for å spise og
          bli kjent med hverandre. Abakus inviterer et bredt spekter av
          bedrifter, med målet om å kunne knytte enhver Abakule til drømmejobben
          sin!
        </p>
        <p>
          Videre arrangerer vi både faglige og ikke-faglige kurs. Enten du
          ønsker å lære et nytt programmeringsspråk eller å ta et klatrekurs,
          vil Fagkom arrangere noe for deg. Kursene kan holdes av bedrifter,
          enkeltpersoner og andre studenter, og her er det kun fantasien som
          setter grensene.
        </p>

        <p>
          Både bedriftspresentasjoner og kurs er en ypperlig mulighet til å lære
          noe nytt og å knytte bånd med næringslivet. Vi anbefaler å bruke denne
          muligheten, og gleder oss til å se deg det kommende året!
        </p>

        <p>
          Følg{" "}
          <Link href={"https://www.instagram.com/abakusbedrift/"}>
            @abakusbedrift
          </Link>{" "}
          på Instagram for oppdateringer om påmeldinger, konkurranser med
          premier og mer!
        </p>
      </div>
    </InfoSectionWrapper>
  );
};

export default InfoSectionCompanyEvents;
