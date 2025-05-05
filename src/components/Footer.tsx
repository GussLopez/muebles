import { Link } from "react-router-dom"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 md:flex justify-between py-10">
        <Link to={'/'}>
          <h2 className="text-center mb-3 md:mb-0 text-2xl font-bold text-blue-900 hover:text-blue-400 transition-colors">Muebleria Llano Largo</h2>
        </Link>

        <p className="text-gray-500 text-center mb:text-start">© {year} Muebleria Llano Largo - Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
