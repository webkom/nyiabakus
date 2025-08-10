import Link from "@/components/Link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InfoSectionWrapper from "../InfoSectionWrapper";
import styles from "./styles.module.css";
import { FetchFaqResult } from "@/studio/generated/sanity.types";
import { PortableText } from "next-sanity";

const FaqContent: React.FC<{ faq?: FetchFaqResult }> = ({ faq }) => {
  const { asPath, replace } = useRouter();
  const [hash, setHash] = useState<string>();

  useEffect(() => setHash(asPath.split("#")[1]), [asPath]);

  const renderFaqItems = () =>
    faq?.map(({ question, answer }) => {
      const key = encodeURIComponent(
        question.replace(/\s+/g, "-").toLowerCase()
      );
      const togglePath = () => replace(hash !== key ? "#" + key : "");

      return (
        <div className={styles.faqItem} key={key} id={key}>
          <details open={hash === key}>
            <summary onClick={togglePath}>{question}</summary>
            <PortableText value={answer} />
          </details>
        </div>
      );
    });

  return (
    <InfoSectionWrapper>
      <h2 className={styles.title}>FAQ</h2>

      {faq && faq.length > 0 && renderFaqItems()}

      <p>
        Lurer du på noe mer? Send en mail til Webkom på{" "}
        <Link href="mailto:webkom@abakus.no">webkom@abakus.no</Link>, så hjelper
        vi deg finne svaret - og legger det ut her så andre også kan finne det.
      </p>
    </InfoSectionWrapper>
  );
};

export default FaqContent;
