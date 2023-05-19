import Card from "../Card/Card";
import styles from "./FPInfoSection.module.css";

const FPInfo = [
	{
		title: "Abakus-kontoret",
		description:
			"Hold kontakten med resten av Abakus!\n Her har vi alt fra event-reminders, kjøp og salg, memes og forum for å finne sted å bo",
	},
	{
		title: "Komtek-loungen",
		description: "TATATATA",
	},
	{
		title: "A3",
		description:
			"Hold kontakten med resten av Abakus! \n Her har vi alt fra event-reminders, kjøp og salg, memes og forum for å finne sted å bo",
	},
	{
		title: "Kjelleren LaBamba",
		description:
			"Hold kontakten med resten av Abakus! \nHer har vi alt fra event-reminders, kjøp og salg, memes og forum for å finne sted å bo",
	},
	{
		title: "Immatrikulering",
		description:
			"Hold kontakten med resten av Abakus! \nHer har vi alt fra event-reminders, kjøp og salg, memes og forum for å finne sted å bo",
	},
];
export default function FPInfoSection() {
	return (
		<div className={styles.FPInfoSection}>
			<h1 className={styles.title}>Når du kommer til Trondheim</h1>
			<p>Alle som for å bli med er det bare å møte opp på immatrikuleringen</p>
			<div className={styles.cardContainer}>
				{FPInfo.map((info) => (
					<Card title={info.title} description={info.description} />
				))}
			</div>
		</div>
	);
}
