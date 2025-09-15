import FaqContent from "@/components/FaqContent";
import getFAQ from "@/studio/queries/faq";
import { InferGetStaticPropsType } from "next";

type FaqProps = InferGetStaticPropsType<typeof getStaticProps>;

const FAQ = ({ faq }: FaqProps) => {
  return <FaqContent faq={faq} />;
};

export async function getStaticProps() {
  return {
    props: {
      faq: await getFAQ(),
    },
    revalidate: 60,
  };
}

export default FAQ;
