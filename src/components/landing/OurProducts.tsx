import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type productosProps = {
  nombre: string;
  img: string;
}

export default function OurProducts() {
  const productos = [
    {
      nombre: "Sillas",
      img: "/Silla1.webp"
    },
    {
      nombre: "Bancas",
      img: "/productos/sillas/Silla5.webp"
    },
    {
      nombre: "Cajoneras",
      img: "/productos/cajoneras/Cajonera2.webp"
    },
    {
      nombre: "Centros de entretenimiento",
      img: "/productos/centro/centro1.webp"
    },
    {
      nombre: "Roperos",
      img: "/productos/roperos/ropero2.webp"
    },
    {
      nombre: "Mesas de Comedor",
      img: "/product6.webp"
    },
  ]

  return (
    <>
      <aside className="bg-[var(--claro)] py-20">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl mb-4 text-center font-bold text-[var(--primario)]">Nuestros Muebles</h2>
            <p className="text-center text-gray-600">Descubre nuestra colección de muebles artesanales, donde cada pieza cuenta una historia de dedicación y pasión por la madera</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {productos.map((producto: productosProps) => (
              <div className="bg-white rounded-b shadow-lg">
                <div className="w-full h-[300px] overflow-hidden rounded-t">

                  <img src={producto.img} alt="Imagen Producto" loading="lazy" className="object-cover" />
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="mb-3 text-2xl font-semibold text-[var(--primario)]">{producto.nombre}</h3>
                  <Link
                    className="w-full py-2 border border-[var(--primario)] text-center font-medium rounded hover:bg-[var(--primario)] hover:text-white transition-colors"
                    to={'/muebles'}
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              className="flex items-center gap-1 bg-[var(--primario)] text-white py-2 px-3 rounded hover:bg-[var(--secundario)] hover:translate-x-1 transition-all font-medium"
              to={"/muebles"}>
              Ver Catálogo Completo <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
