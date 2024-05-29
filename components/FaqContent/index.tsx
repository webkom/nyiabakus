import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfoSectionWrapper from "../InfoSectionWrapper";
import styles from "./styles.module.css";

const FaqContent: React.FC = () => {
  const { asPath, replace } = useRouter();
  const [hash, setHash] = useState<string>();

  useEffect(() => setHash(asPath.split("#")[1]), [asPath]);

  const renderFaqItems = (faqItems: FaqItem[]) =>
    faqItems.map(({ title, key, content, subItem }) => (
      <div
        className={`${styles.faqItem} ${subItem ? styles.subItem : ""}`}
        key={key}
      >
        <details open={hash === key}>
          <summary onClick={() => replace("#" + key)}>{title}</summary>
          {typeof content === "string"
            ? content
                .split("\n")
                .map((contentLine) => <p key={contentLine}>{contentLine}</p>)
            : content}
        </details>
      </div>
    ));

  return (
    <InfoSectionWrapper>
      <h1 className={styles.faqSectionHeader}>Generelt</h1>
      {renderFaqItems(generalFaqItems)}
      <h1 className={styles.faqSectionHeader}>Om Abakus</h1>
      {renderFaqItems(abakusFaqItems)}
      <p>
        Lurer du på noe mer? Send en mail til Webkom på{" "}
        <a href="mailto:webkom@abakus.no">webkom@abakus.no</a>, så hjelper vi
        deg finne svaret - og legger det ut her så andre også kan finne det.
      </p>
    </InfoSectionWrapper>
  );
};

export default FaqContent;

interface FaqItem {
  title: string;
  key: string;
  content: React.ReactNode;
  subItem?: boolean;
}

const generalFaqItems: FaqItem[] = [
  {
    title: "Hvordan lage bruker på abakus.no?",
    key: "lag-bruker",
    content: (
      <p>
        Vi har laget en guide som ligger her;{" "}
        <Link href="https://www.notion.so/Hvordan-lage-bruker-p-Abakus-no-17be056689194337a1d44865f577d536">
          hvordan lage bruker på abakus.no
        </Link>
      </p>
    ),
  },
  {
    title: "Pakkeliste til Fadderperioden",
    key: "pakkeliste",
    content:
      "Til Fadderperioden er det en del arrangementer som har tema, som det kan være smart å tenke på før du reiser hjemmefra.\n\n- Hvitt laken uten stretch\n- Outfit til Ops, jeg kom feil\n- Hippieklær\n- Bevegelige klær som tåler å bli våte\n- Dress/Gallakjole",
  },
  {
    title: "Kontaktinformasjon",
    key: "kontakt",
    content: (
      <div>
        <p>
          Leder av Abakus:
          <br />
          Kristoffer Krogh Wetterhus, 958 04 396, kristoffer.wetterhus@abakus.no
        </p>
        <p>
          Leder av Arrangementskomiteen til Abakus:
          <br />
          Kaisa Øyre Larsen, 916 41 758, kaisa.larsen@abakus.no
        </p>
        <p>
          Ansvarlig for kommunikasjon med faddere og fadderbarn:
          <br />
          Sven Jansen, 416 02 761, sven.jansen@abakus.no
        </p>
        <p>
          Ansvarlig for kommunikasjon med faddere og fadderbarn:
          <br />
          Leo Lie McGrath, 407 81 818, leo.mcgrath@abakus.no
        </p>
      </div>
    ),
  },
  {
    title: "Tips & triks på abakus.no",
    key: "tips",
    content: (
      <div>
        <h3>Få Abakus-arrangementer rett i kalenderen din</h3>
        <p>
          I studielivet skjer det mye rart, og da er det nyttig å ha kontroll på
          hva som skjer når!
        </p>
        <p>
          Om du går inn på{" "}
          <a href="https://abakus.no/events">abakus.no/events</a> på PC og blar
          helt nederst på siden, får du alternativene mellom tre mulige
          kalendere. Enten alle arrangementer, alle registreringstidspunkter
          (påmeldingstidspunkt) eller dine møter og favorittarrangementer.
        </p>
        <p>
          De to første kan fort bli overvelmende, men den siste inkluderer alle
          arrangementer der du er påmeldt eller på venteliste, og de du manuelt
          har lagt til som favoritt (ved å trykke på stjernen ved siden av
          navnet til arrangementet på abakus.no).
        </p>
        <p>
          Ved å trykke på lenkene kan du enten få kalenderene rett inn i Google
          Kalender eller hvilken som helst annen kalender som støtter iCalendar
          (så godt som alle).
        </p>
      </div>
    ),
  },
];

const abakusFaqItems: FaqItem[] = [
  {
    title: "Hva er en linjeforening?",
    key: "linjeforening",
    content:
      "En linjeforening er en forening av og for studentene som går ett eller flere studier. I Trondheim finnes det derfor veldig mange forskjellige linjeforeninger - men du forholder deg hovedsakelig kun til den studieretningen din tilhører.",
  },
  {
    title: "Hva består Abakus av?",
    key: "abakus",
    content: (
      <div>
        <p>
          Abakus består av omtrent 1000 studenter, fra Cybdat og Data. Alle
          medlemmene i Abakus kalles abakuler.
        </p>
        <p>
          Innad i disse har vi et Hovedstyre, 10 komitéer, 1 revy, 5
          undergrupper og masse interessegrupper.
        </p>
        <p>
          Under har vi lagt inn beskrivelser av hva alt dette er, og hvordan de
          bidrar i studiehverdagen din!
        </p>
        <br />
        <p>
          Hvis du ønsker å finne ut mer informasjon om linjeforeningen vår
          ligger det mye på <Link href="https://abakus.no">abakus.no</Link>{" "}
          under{" "}
          <Link href="https://abakus.no/pages/info-om-abakus">Om Abakus</Link>.
          Merk at du må være logget inn med en bruker for å se alt, så det kan
          være greit å skaffe seg en bruker (
          <Link href={"#lag-bruker"}>hvordan lage bruker på abakus.no</Link>).
        </p>
      </div>
    ),
  },
  {
    title: "Hovedstyret",
    key: "om-hovedstyret",
    subItem: true,
    content: (
      <div>
        <p>
          Hovedstyret er Abakus høyeste organ etter Generalforsamlingen og har
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
        <p>De forskjellige rollene i Hovedstyret er:</p>
        <ul>
          <li>Leder: Henriette Bjørheim</li>
          <li>Nestleder: Maria Karlsen</li>
          <li>Økonomiansvarlig: Kristoffer Wetterhus</li>
          <li>
            Gruppeansvarlig Inter (ansvarlig for Bedkom og Fagkom): Mona Helness
          </li>
          <li>
            Gruppeansvarlig Media (ansvarlig for PR, readme og Webkom): Elena
            Willmann
          </li>
          <li>
            Gruppeansvarlig Sosial (ansvarlig for Arrkom, Koskom og LaBamba):
            Maria Hurtado Beisvåg
          </li>
        </ul>
        <p>
          <a href="https://abakus.no/pages/styrer/12">
            Les mer om Hovedstyret på abakus.no (krever innlogging)
          </a>
        </p>
      </div>
    ),
  },
  {
    title: "Komitéer",
    key: "om-komiteer",
    subItem: true,
    content: (
      <div>
        <p>
          En komité er en gjeng som gjør forskjellig type arbeid for å drifte
          linjeforeningen og arrangere faglige og sosiale arrangementer for
          medlemmene. Hver komite tar gjerne opp 7-8 medlemmer hvert år, og
          komitemedlemskap er en god sosial plattform, også for å bli kjent på
          tvers av trinn. Det lar deg i tillegg gjøre meningsfullt arbeid for
          andre, som bedrer studiehverdagen til Abakus&apos; mange medlemmer
        </p>
        <h2>Hva gjør komitéene?</h2>
        <dl>
          <dt>Arrkom</dt>
          <dd>
            Arrkom er arrangementskomiteen til Abakus. Dette er komiteen som er
            ansvarlig for Abakus sine større sosiale arrangementer. Eksempler er
            Fadderperioden, Immatrikuleringsballet, Åreturen i januar og mye
            mer. I tillegg kommer det også andre mindre arrangementer som vi
            lager på vårt/andre komiteers initiativ.
          </dd>
          <dt>Bedkom</dt>
          <dd>
            Bedkom er bedriftskomiteen til Abakus og arbeider for å oppnå
            tettere kontakt mellom bedrifter og våre studenter. Dette gjør de
            blant annet ved å arrangere bedriftspresentasjoner, der bedrifter
            kommer til campus for å presentere seg selv. I presentasjonen
            forteller bedriftene om hvilke prosjekter de er involvert i og
            hvordan hverdagen fortoner seg i bedriften. Etter presentasjonen
            drar studentene og bedriften til et spisested i byen for å mingle.
            Minglingen gir en unik mulighet for studentene til å bli kjent med
            bedriften i uformelle omgivelser med god mat og drikke.
          </dd>
          <dt>Bankkom</dt>
          <dd>
            Bankkom har ansvaret for finans- og økonomistyring i Abakus. Det vil
            si å ha ansvar for alt av bokføringer, fakturering og administrering
            av nettbanken til linjeforeningen. Komiteen er en økonomisk
            sparringspartner for resten av Abakus, og jobber tett sammen med de
            økonomiansvarlige i de andre komiteene. Bankkom ble opprettet høsten
            2021, og er derfor den nyeste komiteen i Abakus.
          </dd>
          <dt>Fagkom</dt>
          <dd>
            Fagkom er komiteen som arrangerer Abakus sine faglige arrangementer.
            Dette kan være å jobbe tett med bedrifter for å arrangere relevante
            kurs, der det vil være mingling og mat etterpå. Eller så kan det
            være eksamensforelesninger slik at Abakuler blir bedre forberedt til
            eksamen. Det kan også være mindre faglig relevante, men mer gøyale
            kurs, som vinsmaking-kurs, brattkort-kurs og lignende.
          </dd>
          <dt>readme</dt>
          <dd>
            readme er Abakus sitt eget magasin, og har siden 1999 gjort sitt
            ytterste for å gi studieslitne data- og cybdatstudenter et artig
            avbrekk fra pensum. Tre ganger i semesteret kommer det en utgave på
            28 fargesider i akkurat passe mange eksemplarer. Av innhold kan de
            by på artikler om Abakus-arrangement, faglig berikelse av ulik sort
            og ikke minst underholdning.
          </dd>
          <dt>PR</dt>
          <dd>
            PR-komiteen til Abakus er ansvarlig for å presentere Abakus på best
            mulig måte, både innad og utad. Dette innebærer å designe og lage
            alt fra promoteringsfilmer til plakater. De har hovedansvaret for å
            utvikle og vedlikeholde Abakus’ grafiske profil, og ansvar for
            linjeforeningens sosiale medier der de poster bilder og videoer fra
            alt det morsomme Abakus holder på med. I tillegg er de tilstede på
            de fleste arrangementer der de tar bilder og filmer, har ansvar for
            merch og designer logoer, pins og daljer (medaljer).
          </dd>
          <dt>Webkom</dt>
          <dd>
            Webkom er komiteen som har det tekniske ansvaret for Abakus. Det er
            Webkom som har laget abakus.no, abanav.abakus.no og mye mer som er
            helt kritisk for at Abakus skal gå rundt.
          </dd>
          <dt>Koskom</dt>
          <dd>
            Koskom er Kontor- og Sosialkomiteen til Abakus og er ansvarlig for å
            drifte kontoret og arrangere morsomme lavterskelsarrangementer.
            Dette inkluderer for eksempel vors på kontoret, quiz på pub,
            vennespleising, perledag, kanonballturneringer, grillinger og mange
            andre kreative og morsomme arrangementer i løpet av året. På
            kontoret kan du kjøpe diverse mat, snacks og brus, og Koskom sørger
            dessuten for at det alltid er gratis kaffe og te tilgjengelig. I
            tillegg er kontoret alle abakulers favorittplass for å møtes til
            lunsj eller bare ta en liten pause med hyggelige medstudenter!
          </dd>
          <dt>LaBamba</dt>
          <dd>
            LaBamba er komiteen som drifter Abakus sin helt egne kjeller.
            Kjelleren vår skal være et samlingspunkt for alle i Abakus. LaBamba
            skaper et lokale hvor alle er velkomne, uansett klassetrinn. De kan
            også tilby svært studentvennlige priser (innkjøpspris) og stigende
            temperatur utover kvelden
          </dd>
          <dt>backup</dt>
          <dd>
            backup består av personer som har engasjert seg i verv både i og
            utenfor Abakus, og som ønsker å fortsette å gjøre en innsats for
            linjeforeningen og være aktiv i Abakus. De jobber med prosjekter som
            ikke nødvendigvis passer direkte inn under de andre komitéene og som
            gjerne strekker seg over lengre tid. Alle medlemmer i backup står
            fritt til å starte nye prosjekter. Eksempler på eksisterende
            prosjekter er Interessegrupper, Masterfadderperioden, podcast,
            Kickstart, HÆLGA, buddyordningen, baksida, ledertrening
          </dd>
        </dl>
        <h2>Bidrag i Fadderperioden</h2>
        <p>
          Alle komiteene i Abakus bidrar med hvert sitt til Abakus sin
          Fadderperiode. Alt er ikke like synlig, men alt er likevel veldig
          viktig for at Fadderperioden blir såpass bra gjennomført. Her er en
          oversikt over hva de forskjellige komiteene bidrar med i
          Fadderperioden:
        </p>
        <dl>
          <dt>Arrkom</dt>
          <dd>
            Arrkom har hovedansvaret for hele Fadderperioden. Det innebærer å
            planlegge og avholde nesten alle arrangementene, organisere faddere
            og faddergrupper, koordinere bidrag fra andre komiteer, sørge for
            god kommunikasjon med faddere og fadderbarn, og mye mye mer. Dersom
            man lurer på noe relatert til Fadderperiode og oppstart er det
            Arrkom man kontakter. Se kontaktinformasjon
          </dd>
          <dt>Bedkom</dt>
          <dd>
            Torsdag etter Teknostart vil mange av dere oppleve deres første
            bedriftspresentasjon. Dette er det Bedkom som arrangerer, i
            samarbeid med Abakus sin samarbeidspartner, Netcompany
          </dd>
          <dt>Bankkom</dt>
          <dd>
            Bankkom er ansvarlig for at det økonomiske maskineriet opprettholdes
            underveis i Fadderperioden. Det vil si å blant annet passe på at de
            som skal bli betalt blir betalt, og at det er nok penger på kontoene
            til de komiteene som bruker bankkort til utgifter i Fadderperioden.
          </dd>
          <dt>Fagkom</dt>
          <dd>
            Tirsdag, etter deres aller første dag med Teknostart, vil Fagkom
            avholde et kurs, kalt Ny-I-Trondheim. Dette er et herlig kurs for
            alle dere nye (og gamle) studenter. Det vil gi en god innføring i
            hvordan det er å være student, med mange tips og triks å ta med seg
            videre
          </dd>
          <dt>readme</dt>
          <dd>
            I goodiebagen dere får etter infomøtet med instituttet deres vil det
            ligge et par magasiner. Det ene er Uformatert, en guide til Abakus
            og studentlivet. Det andre er en utgave readme. Begge disse er
            skrevet, designet, redigert og utgitt av readme.
          </dd>
          <dt>PR</dt>
          <dd>
            Mange vil nok først og fremst gjenkjenne hvem som er faddere ved å
            se at de har på seg en egen fadder-t-skjorte. Denne er det PR som
            har designet og fått laget. I tillegg til dette har de laget alle
            headere til arrangementer på abakus.no, grafiske kalendere, o.l.
          </dd>
          <dt>Webkom</dt>
          <dd>
            Webkom er gjengen som har lagt ned det herlige arbeidet med å
            utvikle og publisere nettsiden du nå leser på. I tillegg har de
            skrevet relevante guider for å lage bruker på abakus.no, og generelt
            driftet nettsiden slik at den er klar for dere nye studenter.
          </dd>
          <dt>Koskom</dt>
          <dd>
            Etter bedriftspresentasjonen første torsdag i Fadderperioden, vil
            det bli arrangert en morsom Quizkveld på Den Gode Nabo og
            Kieglekroa. Dette er det Koskom som arrangerer. I tillegg drifter
            Koskom Abakus sitt eget kontor, der dere kan ta pauser eller kjøpe
            snacks og mat mens dere er på Teknostart. Koskom vil også arrangere
            et par Vors på Kontoret underveis i Fadderperioden.
          </dd>
          <dt>LaBamba</dt>
          <dd>
            Underveis i Fadderperioden vil det bli arrangert en del vors på
            Abakus sin helt egne kjeller. Det er det gjengen i LaBamba som er
            ansvarlige for å drifte utestedet, ved å tilby lave priser og rå
            stemning
          </dd>
          <dt>backup</dt>
          <dd>
            backup er ansvarlig for å arrangere Masterfadderperioden -
            fadderopplegg for nye studenter på de to-årige masterprogrammene til
            Cybdat og Data. Enkelte dager har vi felles opplegg med
            Fadderperioden. Faddere består her av abakuler fra 3., 4. og 5.
            trinn.
          </dd>
        </dl>
        <p>
          <a href="https://abakus.no/pages/komiteer/4">
            Les mer om komitéene på abakus.no (krever innlogging)
          </a>
          . Siden lenker til Arrangementskomitéen, se i sidemenyen for å finne
          resten av komitéene
        </p>
      </div>
    ),
  },
  {
    title: "Revy",
    key: "om-revy",
    subItem: true,
    content: (
      <div>
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
      </div>
    ),
  },
  {
    title: "Undergrupper",
    key: "om-undergrupper",
    subItem: true,
    content: (
      <div>
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
      </div>
    ),
  },
  {
    title: "Interessegrupper",
    key: "om-interessegrupper",
    subItem: true,
    content: (
      <div>
        <p>
          En interessegruppe er en gjeng abakuler som møtes for å snakke om
          eller dyrke en interesse. Alt fra sportslag, brettspillklubber eller
          turgrupper kan være interessegrupper. Slike grupper får økonomisk
          støtte fra Abakus til å drive med interessen sin. Det er også mulig å
          opprette en egen interessegruppe. Interessegrupper er åpne for alle,
          og ikke bindende i det hele tatt, så man kan bli med på det man vil,
          når man vil. Eksempler er FormelAba, som ser på Formel 1, Abahæng, som
          drar på maccern når de er hæng og dunker chili cheese, og Turgruppa,
          som arrangerer turer i skog og fjell.
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
      </div>
    ),
  },
];
