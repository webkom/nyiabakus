import styles from "@/styles/Home.module.css";
import InfoSectionWrapper from "@/components/InfoSectionWrapper";
import Link from "next/link";
import AboutCard from "../components/AboutCard";

const committees = [
  {
    title: "Arrkom",
    description:
      "Arrkom er arrangementskomiteen til Abakus. Dette er komiteen som er ansvarlig for Abakus sine større sosiale arrangementer. Eksempler er Fadderperioden, Immatrikuleringsballet, Åreturen i januar og mye mer. I tillegg kommer det også andre mindre arrangementer som vi lager på vårt/andre komiteers initiativ.",
    contribution:
      "Arrkom har hovedansvaret for hele Fadderperioden. Det innebærer å planlegge og avholde nesten alle arrangementene, organisere faddere og faddergrupper, koordinere bidrag fra andre komiteer, sørge for god kommunikasjon med faddere og fadderbarn, og mye mye mer. Dersom man lurer på noe relatert til Fadderperiode og oppstart er det Arrkom man kontakter.",
  },
  {
    title: "Bedkom",
    description:
      "Bedkom er bedriftskomiteen til Abakus og arbeider for å oppnå tettere kontakt mellom bedrifter og våre studenter. Dette gjør de blant annet ved å arrangere bedriftspresentasjoner, der bedrifter kommer til campus for å presentere seg selv. I presentasjonen forteller bedriftene om hvilke prosjekter de er involvert i og hvordan hverdagen fortoner seg i bedriften. Etter presentasjonen drar studentene og bedriften til et spisested i byen for å mingle.",
    contribution:
      "Torsdag etter Teknostart vil mange av dere oppleve deres første bedriftspresentasjon. Dette er det Bedkom som arrangerer, i samarbeid med Abakus sin samarbeidspartner, Netcompany.",
  },
  {
    title: "Bankkom",
    description:
      "Bankkom har ansvaret for finans- og økonomistyring i Abakus. Det vil si å ha ansvar for alt av bokføringer, fakturering og administrering av nettbanken til linjeforeningen. Komiteen er en økonomisk sparringspartner for resten av Abakus, og jobber tett sammen med de økonomiansvarlige i de andre komiteene.",
    contribution:
      "Bankkom er ansvarlig for at det økonomiske maskineriet opprettholdes underveis i Fadderperioden. Det vil si å blant annet passe på at de som skal bli betalt blir betalt, og at det er nok penger på kontoene til de komiteene som bruker bankkort til utgifter i Fadderperioden.",
  },
  {
    title: "Fagkom",
    description:
      "Fagkom er komiteen som arrangerer Abakus sine faglige arrangementer. Dette kan være å jobbe tett med bedrifter for å arrangere relevante kurs, der det vil være mingling og mat etterpå. Eller så kan det være eksamensforelesninger slik at Abakuler blir bedre forberedt til eksamen.",
    contribution:
      "Tirsdag, etter deres aller første dag med Teknostart, vil Fagkom avholde et kurs, kalt Ny-I-Trondheim. Dette er et herlig kurs for alle dere nye (og gamle) studenter. Det vil gi en god innføring i hvordan det er å være student, med mange tips og triks å ta med seg videre.",
  },
  {
    title: "readme",
    description:
      "readme er Abakus sitt eget magasin, og har siden 1999 gjort sitt ytterste for å gi studieslitne data- og cybdatstudenter et artig avbrekk fra pensum. Tre ganger i semesteret kommer det en utgave på 28 fargesider i akkurat passe mange eksemplarer.",
    contribution:
      "I goodiebagen dere får etter infomøtet med instituttet deres vil det ligge et par magasiner. Det ene er Uformatert, en guide til Abakus og studentlivet. Det andre er en utgave readme. Begge disse er skrevet, designet, redigert og utgitt av readme.",
  },
  {
    title: "PR",
    description:
      "PR-komiteen til Abakus er ansvarlig for å presentere Abakus på best mulig måte, både innad og utad. Dette innebærer å designe og lage alt fra promoteringsfilmer til plakater. De har hovedansvaret for å utvikle og vedlikeholde Abakus’ grafiske profil, og ansvar for linjeforeningens sosiale medier.",
    contribution:
      "Mange vil nok først og fremst gjenkjenne hvem som er faddere ved å se at de har på seg en egen fadder-t-skjorte. Denne er det PR som har designet og fått laget. I tillegg til dette har de laget alle headere til arrangementer på abakus.no, grafiske kalendere, o.l.",
  },
  {
    title: "Webkom",
    description:
      "Webkom er komiteen som har det tekniske ansvaret for Abakus. Det er Webkom som har laget abakus.no, ababart.abakus.no og mye mer som er helt kritisk for at Abakus skal gå rundt.",
    contribution:
      "Webkom er gjengen som har lagt ned det herlige arbeidet med å utvikle og publisere nettsiden du nå leser på. I tillegg har de skrevet relevante guider for å lage bruker på abakus.no, og generelt driftet nettsiden slik at den er klar for dere nye studenter.",
  },
  {
    title: "Koskom",
    description:
      "Koskom er Kontor- og Sosialkomiteen til Abakus og er ansvarlig for å drifte kontoret og arrangere morsomme lavterskelsarrangementer. Dette inkluderer for eksempel vors på kontoret, quiz på pub, vennespleising, perledag, kanonballturneringer, grillinger og mange andre kreative og morsomme arrangementer i løpet av året.",
    contribution:
      "Etter bedriftspresentasjonen første torsdag i Fadderperioden, vil det bli arrangert en morsom Quizkveld på Den Gode Nabo og Kieglekroa. Dette er det Koskom som arrangerer. I tillegg drifter Koskom Abakus sitt eget kontor, der dere kan ta pauser eller kjøpe snacks og mat mens dere er på Teknostart.",
  },
  {
    title: "LaBamba",
    description:
      "LaBamba er komiteen som drifter Abakus sin helt egne kjeller. Kjelleren vår skal være et samlingspunkt for alle i Abakus. LaBamba skaper et lokale hvor alle er velkomne, uansett klassetrinn. De kan også tilby svært studentvennlige priser (innkjøpspris) og stigende temperatur utover kvelden.",
    contribution:
      "Underveis i Fadderperioden vil det bli arrangert en del vors på Abakus sin helt egne kjeller. Det er det gjengen i LaBamba som er ansvarlige for å drifte utestedet, ved å tilby lave priser og rå stemning.",
  },
  {
    title: "backup",
    description:
      "backup består av personer som har engasjert seg i verv både i og utenfor Abakus, og som ønsker å fortsette å gjøre en innsats for linjeforeningen og være aktiv i Abakus. De jobber med prosjekter som ikke nødvendigvis passer direkte inn under de andre komitéene og som gjerne strekker seg over lengre tid.",
    contribution:
      "backup er ansvarlig for å arrangere Masterfadderperioden - fadderopplegg for nye studenter på de to-årige masterprogrammene til Cybdat og Data. Enkelte dager har vi felles opplegg med Fadderperioden. Faddere består her av abakuler fra 3., 4. og 5. trinn.",
  },
];

const OmAbakus = () => {
  return (
    <InfoSectionWrapper contentClassName={styles.fpInfo}>
      <h2 className={styles.title}>Om Abakus</h2>

      <h3 className={styles.subTitle}>Hva er Abakus?</h3>
      <p>
        Abakus er linjeforeningen for studentene ved <b>Dateteknologi</b> og{" "}
        <b>Cybersikkerhet og datakommunikasjon</b> på NTNU. Linjeforeningen
        består av omtrent 1000 studenter og har som formål å gi studentene
        veiledning i studiesituasjonen, arrangere faglige kurs, fremme kontakten
        med næringslivet og bidra med sosiale aktiviteter. For å oppnå dette har
        Abakus en rekke <b>komiteer</b>, <b>undergrupper</b> og{" "}
        <b>interessegrupper</b> som jobber for å skape et godt miljø for
        studentene.
      </p>
      <p>
        Hvis du ønsker å lese mer detaljert om linjeforeningen vår, kan du finne
        mer informasjon på vår offisielle hjemmeside{" "}
        <Link href="https://abakus.no/pages/info-om-abakus">abakus.no</Link>.
        Merk at du må være logget inn får å se alt, så dette kan være en god
        anledning til å{" "}
        <Link href="https://abakuswebkom.notion.site/Hvordan-lage-bruker-p-Abakus-no-17be056689194337a1d44865f577d536">
          opprette en bruker på abakus.no
        </Link>
        .
      </p>
      <br />

      <AboutCard title="Hovedstyret" logo="/abakus_hs.webp">
        <p>
          Hovedstyret er Abakus høyeste organ etter Generalforsamlingen, har
          ansvar for linjeforeningens daglige drift og styrer linjeforeningen i
          henhold statuttene og strategidokumentet.
        </p>
        <p>
          I Hovedstyret sitter Abakus sin leder, nestleder og økonomiansvarlig,
          samt tre gruppeansvarlige som velges av Generalforsamlingen. Hver av
          de gruppeansvarlige har ansvar for en gruppe med komiteer.
          Hovedstyrets oppgaver innebærer å sette opp budsjetter, holde
          kontakten med hovedsamarbeidspartneren til Abakus, fordele penger i
          linjeforeningen, holde kontakt med fakultetet og instituttene og
          representere Abakus utad ved forskjellige anledninger.
        </p>
        <h4 className={styles.subTitle}>Roller i hovedstyret:</h4>
        <ul>
          <li>Leder: Kristoffer Krogh Wetterhus</li>
          <li>Nestleder: Tiril Sjøberg</li>
          <li>Økans: Aurora Johansen</li>
          <li>Øvrig styremedlem: Emrik Sjølie Moe</li>
          <li>Øvrig styremedlem: Hanna Jacobsen</li>
          <li>Øvrig styremedlem: Ingeborg Lundamo Lien</li>
        </ul>
        <p>
          <a href="https://abakus.no/pages/styrer/12">
            Les mer om Hovedstyret på abakus.no (krever innlogging)
          </a>
        </p>
      </AboutCard>
      <br />

      <AboutCard title="Hvordan engasjere seg?">
        <b>Komiteene og revyen</b>
        <p>
          Opptak til{" "}
          <Link href="https://abakus.no/pages/grupper/104-revyen">revyen</Link>{" "}
          og <Link href="#comittees">komiteene</Link> skjer vanligvis i
          september etter semesterstart.{" "}
          <Link href="https://abakus.no/pages/komiteer/5">backup</Link> har
          vanligvis opptak i februar. <br /> Opptaket gjennomføres på{" "}
          <Link href="https://opptak.abakus.no">opptak.abakus.no</Link> og vil
          annonseres på <Link href="https://abakus.no">abakus.no</Link> og i
          sosiale medier.
        </p>
        <br />
        <b>Undergrupper</b>
        <p>
          Undergruppene sine opptak varierer fra gruppe til gruppe. Se hver
          enkelt undergruppe sin side på{" "}
          <Link href="https://abakus.no/pages/grupper/31-undergrupper">
            abakus.no
          </Link>{" "}
          for mer informasjon.
        </p>
        <br />
        <b>Interessegrupper</b>
        <p>
          Interessegruppene i Abakus er åpne for alle. Man kan melde seg inn ved
          å trykke på {'"'}Bli med i gruppen{'"'} på interessegruppens side på{" "}
          <Link href="https://abakus.no/interest-groups">abakus.no</Link>. I
          tillegg har de fleste interessegruppene en Facebook-gruppe for
          kommunikasjon.
        </p>
      </AboutCard>

      <br />

      <h3 id="comittees" className={styles.subTitle}>
        Komiteer
      </h3>
      <p>
        En komité er en gjeng som gjør forskjellig type arbeid for å drifte
        linjeforeningen og arrangere faglige og sosiale arrangementer for
        medlemmene. Hver komite tar gjerne opp 7-8 medlemmer hvert år, og
        komitemedlemskap er en god sosial plattform, også for å bli kjent på
        tvers av trinn. Det lar deg i tillegg gjøre meningsfullt arbeid for
        andre, som bedrer studiehverdagen til Abakus&apos; mange medlemmer
      </p>

      <p>
        <a href="https://abakus.no/pages/komiteer/4">
          Les mer om komitéene på abakus.no (krever innlogging)
        </a>
      </p>

      {committees.map((committee) => (
        <AboutCard
          key={committee.title}
          title={committee.title}
          logo={`/abakus_${committee.title.toLowerCase()}.png`}
          description={committee.description}
          contributions={committee.contribution}
        />
      ))}

      <br />
      <h3 className={styles.subTitle}>
        Revy, undergrupper og interessegrupper
      </h3>

      <p>
        I tillegg til komiteene har Abakus også en revy, undergrupper og
        interessegrupper. Les mer om disse under.
      </p>

      <AboutCard title="Abakusrevyen" logo="/abakus_revy.webp">
        <p>
          Abakus har en helt egen revy kalt *trommevirvel* Abakusrevyen.
          Abakusrevyen er et sosialt tilbud der du er med å skape et show
          bestående av flere sketsjer, sangnumre og dansenumre, og er et
          samarbeid mellom over 100 mennesker! I revyen kan du møte mange
          hyggelige mennesker, på tvers av linje og klassetrinn, og med ulike
          interesser! De vil vise fram en av de mange sketsjene deres på
          Immatrikuleringsballet.
        </p>
        <p>
          <a href="https://abakus.no/pages/grupper/104-revyen">
            Les mer om revyen på abakus.no
          </a>
        </p>
      </AboutCard>

      <AboutCard title="Undergrupper">
        <p>
          Undergrupper er grupper som får kontinuerlig økonomisk støtte til å
          drive med forskjellige aktiviteter. Abakus har for eksempel et
          fotball-lag, kalt Datakameratene, et kvinnelag og et herrelag. En
          annen undergruppe i Abakus er Ababand, som er Abakus sitt eget band.
          De spiller blant annet på Immatrikuleringsball, Julebord og Vaargalla.
          Det finnes også en undergruppe ved navn AbelLan som arrangerer LAN et
          par ganger i året for Abakuler. Dette er et par eksempler, og det er
          med andre ord mye å finne på gjennom undergrupper.
        </p>
        <p>
          <a href="https://abakus.no/pages/grupper/31-undergrupper">
            Les mer om undergrupper på abakus.no
          </a>
        </p>
      </AboutCard>

      <AboutCard title="Interessegrupper">
        <p>
          En interessegruppe er en gjeng abakuler som møtes for å snakke om
          eller dyrke en interesse. Alt fra sportslag, brettspillklubber eller
          turgrupper kan være interessegrupper. Slike grupper får økonomisk
          støtte fra Abakus til å drive med interessen sin. Det er også mulig å
          opprette en egen interessegruppe. Interessegrupper er åpne for alle,
          og ikke bindende i det hele tatt, så man kan bli med på det man vil,
          når man vil. Eksempler er FormelAba som ser på Formel 1, Abahæng som
          drar på maccern når de er hæng og dunker chili cheese, Turgruppa som
          arrangerer turer i skog og fjell, og AbaCraft som miner og crafter.
        </p>
        <p>
          <a href="https://abakus.no/interest-groups">
            Finn alle interessegruppene på abakus.no (krever innlogging)
          </a>
          <br />
          NB: Interessegruppene pleier å kommunisere via Facebook - dette står
          det informasjon om inne på siden til den enkelte interessegruppen. Om
          du skal finne dem på Facebook skal alle gruppene innholde &quot;Abakus
          interessegruppe&quot; i navnet for å være lettere å søke etter.
        </p>
        <p>
          <a href="https://abakus.no/pages/grupper/39-praktisk-informasjon">
            Les mer om interessegrupper på abakus.no
          </a>
        </p>
      </AboutCard>
    </InfoSectionWrapper>
  );
};

export default OmAbakus;
