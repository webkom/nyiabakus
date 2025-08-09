import InfoSectionTrondheim from "@/components/InfoSectionTrondheim";
import Header from "@/components/Header";
import InfoSectionCompanyEvents from "@/components/InfoSectionCompanyEvents";
import InfoSectionPreparation from "@/components/InfoSectionPreparation";
import InfoSectionFP from "@/components/InfoSectionFP";
import InfoSectionStudy from "@/components/InfoSectionStudy";
import InfoSectionStudentPub from "@/components/InfoSectionStudentPub";
import QuickLinks from "@/components/QuickLinks";
import HeaderCards from "@/components/Header/HeaderCards";
import getTaskforce from "@/studio/queries/taskforce";
import InfoSectionTaskforce from "@/components/InfoSectionTaskForce";
import { InferGetStaticPropsType } from "next";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ taskforce }: HomeProps) {
  return (
    <>
      <Header />
      <QuickLinks />
      <HeaderCards />
      <InfoSectionPreparation />
      <InfoSectionTrondheim />
      <InfoSectionCompanyEvents />
      <InfoSectionFP />
      <InfoSectionStudentPub />
      <InfoSectionTaskforce taskforce={taskforce} />
      <InfoSectionStudy />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      taskforce: await getTaskforce(),
    },
    revalidate: 60,
  };
}
