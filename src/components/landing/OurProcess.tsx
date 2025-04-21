type cardProps = {
  id: number,
  titulo: string;
  texto: string;
}

export default function OurProcess() {
  const info = [
    {
      id: 1,
      titulo: 'Selección de Madera',
      texto: 'Elegimos cuidadosamente cada pieza de madera, evaluando su calidad, veta y características únicas.'
    },
    {
      id: 2,
      titulo: 'Selección de Madera',
      texto: 'Elegimos cuidadosamente cada pieza de madera, evaluando su calidad, veta y características únicas.'
    },
    {
      id: 3,
      titulo: 'Selección de Madera',
      texto: 'Elegimos cuidadosamente cada pieza de madera, evaluando su calidad, veta y características únicas.'
    },
    {
      id: 4,
      titulo: 'Selección de Madera',
      texto: 'Elegimos cuidadosamente cada pieza de madera, evaluando su calidad, veta y características únicas.'
    },
  ]
  return (
    <aside className="bg-white my-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[var(--principal)] text-center mb-4">Nuestro Proceso</h2>
          <p className="text-center text-gray-600">Cada mueble que creamos pasa por un meticuloso proceso artesanal que garantiza su calidad y durabilidad.</p>
        </div>
        <ul className="grid md:grid-cols-4">
          {info.map((card: cardProps) => (
            <li key={card.id}>
              <div className="flex justify-center items-center w-16 h-16 text-2xl mx-auto font-black rounded-full bg-[var(--primario)] text-white">{card.id}</div>
              <h3 className="">{card.titulo}</h3>
              <p>{card.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
