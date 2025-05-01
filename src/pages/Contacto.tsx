import Footer from "../components/Footer"
import Header from "../components/Header"

export default function Contacto() {

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 px-4 pt-[100px]">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contáctanos</h1>
          <p className="text-gray-600 mb-6">
            Si tienes dudas o necesitas más información, escríbenos por WhatsApp.
          </p>

          <a
            href="https://wa.me/5215512345678?text=Hola,%20quisiera%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium transition"
          >
            <img src="/whatsapp-icon.svg" alt="Whats app logo" className="w-10 h-10" />
            Enviar mensaje por WhatsApp
          </a>
        </div>
      </div>
      <Footer />
    </>
  )
}
