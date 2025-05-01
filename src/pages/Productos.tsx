import ReactPlayer from "react-player";
import ProdcutCarousel from "../components/Carousel";
import Header from "../components/Header"
import { silla, cajoneras, mesas, roperos, centro, sillones, otros } from '../data/index.js'
import Footer from "../components/Footer.js";

export default function sillas() {
  

  return (
    <>
      <Header />
      <div className="bg-[var(--claro)]">

        <div className="grid grid-cols-3 gap-8 items-center mb-5  max-w-[1400px] mx-auto px-4 overflow-hidden">
          <div className="col-span-2">
            <h1 className="text-5xl font-semibold text-[var(--primario)]">Nuestros Muebles</h1>
            <p className="mb-10 text-xl text-gray-800">Contamos con una amplia variedad de diseños, tamaños y pueden ser pintados del color que desee</p>
          </div>
          <ReactPlayer
            url={'/productos/video/heroVideo.mp4'}
            playing={true}
            muted={true}
            loop={true}

          />
        </div>
      </div>
      <main className="max-w-[1400px] mx-auto px-4 py-5">


        <section className="mb-20">
          <h2 className="text-2xl mb-5 font-medium text-[var(--primario)]">Sillas - Bancas</h2>
          <ProdcutCarousel path='/productos/sillas/' data={silla} />
        </section>
        <section className="mb-20">
          <h2 className="text-2xl mb-5 font-medium text-[var(--primario)]">Cajoneras</h2>
          <ProdcutCarousel path='/productos/cajoneras/' data={cajoneras} />
        </section>

        <section className="mb-20">
          <h2 className="text-2xl mb-5 font-medium text-[var(--primario)]">Mesas - Comedores</h2>
          <ProdcutCarousel path='/productos/mesas/' data={mesas} />
        </section>

        <section className="mb-20">
          <h2 className="text-2xl mb-5 font-medium text-[var(--primario)]">Roperos</h2>
          <ProdcutCarousel path='/productos/roperos/' data={roperos} />
        </section>

        <section className="mb-20">
          <h2 className="text-2xl mb-5 font-medium text-[var(--primario)]">Centros de entretenimiento</h2>
          <ProdcutCarousel path='/productos/centro/' data={centro} />
        </section>

        <section className="mb-20">
          <h2 className="text-2xl mb-5 font-medium text-[var(--primario)]">Sillones</h2>
          <ProdcutCarousel path='/productos/sillones/' data={sillones} />
        </section>

        <section className="mb-20">
          <h2 className="text-2xl mb-5 font-medium text-[var(--primario)]">Otros Mubeles</h2>
          <ProdcutCarousel path='/productos/' data={otros} />
        </section>
      </main>
      <Footer />
    </>
  )
}
