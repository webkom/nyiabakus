import InfoSectionTrondheim from "@/components/InfoSectionTrondheim";
import Header from "@/components/Header";
import InfoSectionPreparation from "@/components/InfoSectionPreparation";
import InfoSectionFP from "@/components/InfoSectionFP";
import InfoSectionStudy from "@/components/InfoSectionStudy";
import InfoSectionStudentPub from "@/components/InfoSectionStudentPub";
import QuickLinks from "@/components/QuickLinks";
import HeaderCards from "@/components/Header/HeaderCards";

export default function Home() {
  return (
    <>
      <Header />
      <QuickLinks />
      <HeaderCards />
      <InfoSectionPreparation />
      <InfoSectionTrondheim />
      <InfoSectionStudentPub />
      <InfoSectionFP />
      <InfoSectionStudy />
    </>
  );
}
