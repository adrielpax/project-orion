// {libs}
import Head from "next/head";

// {components}
import DataAutomationLanding from "../templates/landingpage-automação/index"
import {
    HeroSection,
  StatsSection,
  BenefitsSection,
  CreatorSection,
  TestimonialsSection,
  StepsSection,
  IncludedSection,
  TimelineSection,
  OfferSection,
  ComparisonSection,
  FAQSection,
  GuaranteeSection,
  UrgencySection,
  FinalCTASection
} from "./test/test"

import {COLORS} from "./test/test"

// {mock data}

export default function Home() {

  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>

      <DataAutomationLanding/>

      {/* <HeroSection />
      <StatsSection />
      <BenefitsSection />
      <CreatorSection />
      <TestimonialsSection />
      <StepsSection />
      <IncludedSection />
      <TimelineSection />
      <OfferSection />
      <ComparisonSection />
      <FAQSection />
      <GuaranteeSection />
      <UrgencySection />
      <FinalCTASection />
     */}

    </>
  );
}
