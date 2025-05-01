import { X } from "lucide-react";
import { useState } from "react";

interface ModalProps {
  content: string;
}

export default function Modal({ content }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={`absolute bg-black/20 ${
        isOpen ? 'block' : 'hidden'
      }`}></div>
      <div className={`absolute w-[400px] h-[500px] bg-white ${
        isOpen ? 'block' : 'hidden'
      }`}>
        <button>
          <X
            onClick={() => setIsOpen(false)}
            size={20}
          />
        </button>
        <h2>Hello</h2>
        <img src={content} alt="Imagen del mueble" />
      </div>
    </>
  )
}
