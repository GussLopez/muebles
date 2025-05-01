import { X } from "lucide-react";
import { MouseEventHandler, ReactNode, useEffect } from "react";


interface ModalProps {
  open: boolean;
  onClose: MouseEventHandler;
  children: ReactNode
}
export default function Modal({ open, onClose, children }: ModalProps) {
  
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    }
  }, [open]);

  if (!open) return null

  return (
    <>
      <div 
        onClick={onClose}
        className={`w-full h-[100vh] top-0 left-0 right-1/2 fixed bg-black/50 z-20
          ${open ? 'block' : 'scale-125 opacity-0 hidden'}
        `}>
        {/* Modal */}
        <div
          onClick={e => e.stopPropagation()}
          className={`
            p-3 lg:p-6 z-50 fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  bg-white rounded-xl shadow transition-all 
            ${open ? ' scale-100 opacity-100' : 'scale-125 opacity-0 hidden'}
          `}>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 cursor-pointer"
          >
            <X size={20} />
          </button>
          {children}
        </div>
      </div>
    </>
  )
}