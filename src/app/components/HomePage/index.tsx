import Highlight from "@/app/components/Highlight";
import Projects from "@/app/components/Projects";
import Footer from "@/app/components/Footer";
import type { Locale } from "@/app/data/portfolio";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <Highlight locale={locale} />
      <Projects locale={locale} />
      <Footer locale={locale} />
    </>
  );
}
