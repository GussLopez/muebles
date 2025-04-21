import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {

  return (
    <section className="bg-[var(--claro)] py-20">
      <div className="max-w-[1400px] mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">


        <div className="space-y-6">
          <h1 className="font-bold text-5xl leading-tight text-[var(--primario)]">Muebles de madera con carácter y tradición</h1>
          <p className="text-lg text-gray-600">Creamos piezas únicas que transforman tu hogar con la calidez y belleza natural de la madera. Diseño y calidad.</p>
          <div className="flex">
            <Link
              className="flex items-center gap-1 bg-[var(--primario)] text-white py-2 px-3 rounded hover:bg-[var(--secundario)] hover:translate-x-1 transition-all font-medium"
              to={'/muebles'}>
              Ver Muebles
              <ArrowRight size={24} />
            </Link>

          </div>
        </div>
        <div className="max-h-[400px] rounded shadow-xl overflow-hidden">
          <img src="/slide1.jpg" alt="Place holder img" className="object-cover" />
        </div>
      </div>
    </section>
  )
}
