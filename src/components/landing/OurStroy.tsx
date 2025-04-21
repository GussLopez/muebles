type cardProps = {
  titulo: string;
  texto: string;
}

export default function OurStory() {
  const historiaInfo = [
    {
      titulo: "Artesanía Local",
      texto: "Cada pieza es elaborada por artesanos locales con décadas de experiencia, preservando técnicas tradicionales y aportando un toque único a cada creación."
    },
    {
      titulo: "Materiales Sostenibles",
      texto: "Utilizamos maderas de origen sostenible y nos comprometemos con prácticas responsables con el medio ambiente en todo nuestro proceso de producción."
    },
    {
      titulo: "Diseño Personalizado",
      texto: "Ofrecemos servicios de diseño a medida para crear muebles que se adapten perfectamente a tus espacios y necesidades específicas."
    },
  ]


  return (
    <aside className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-4 space-y-5">
        <div className="max-w-2xl mx-auto">
          <h2 className="mb-5 text-center text-3xl font-bold text-[var(--primario)]">Nuestra Historia</h2>
          <p className="mb-15 text-lg text-gray-600 text-center">Desde 2005, MaderArt ha estado creando muebles de madera excepcionales para hogares que valoran la artesanía y la calidad. Somos un negocio familiar con raíces profundas en la tradición maderera de nuestra región.</p>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-10">
          {historiaInfo.map((card: cardProps) => (
            <div className="mb-5 p-5 bg-[var(--claro)] rounded">
              <h4 className="mb-4 text-lg font-bold text-[var(--primario)]">{card.titulo}</h4>
              <p className="text-gray-700">{card.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
