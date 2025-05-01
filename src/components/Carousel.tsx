import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


interface dataProps {
  path: string;
  data: {
    img: string;
  }[]
}

export default function ProdcutCarousel({ path, data = [] }: dataProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showLeftButton, setShowLeftButton] = useState(false)
  const [showRightButton, setShowRightButton] = useState(true)
  const scrollAmount = 400;
  const handleScroll = () => {
    if (!carouselRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    setShowLeftButton(scrollLeft > 0)
    setShowRightButton(scrollLeft + clientWidth < scrollWidth - 10)
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll)
      handleScroll()

      return () => {
        carousel.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }


  return (
    <div className="relative w-full">
      {showLeftButton && (
        <button
          className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-8 w-8" width={20} />
          <span className="sr-only">Anterior</span>
        </button>
      )}

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div
        ref={carouselRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth py-2 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {data.map((mueble, i) => (
          <div key={i} className="bg-white rounded-b flex-shrink-0">
            <div className="overflow-hidden rounded-md">
              <img
                src={`${path}${mueble.img}`}
                alt="Imagen Producto"
                className="w-[300px] h-[300px] object-cover"
              />
            </div>
          </div>
        ))}

      </div>

      {showRightButton && (
        <button
          className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-md rounded-full"
          onClick={scrollRight}
        >
          <ChevronRight className="h-8 w-8" size={20} />
          <span className="sr-only">Siguiente</span>
        </button>
      )}
    </div>
  )
}