import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/landing/Hero";
import OurProducts from "../components/landing/OurProducts";
import OurStory from "../components/landing/OurStroy";


export default function Landing() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurStory />
        <OurProducts />
      </main>
      <Footer />
    </>
  )
}
