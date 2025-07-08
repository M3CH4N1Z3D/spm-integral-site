"use client"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface CarouselItem {
  image: string
  label: string
  url?: string
}

interface ImageCarouselProps {
  items: CarouselItem[]
  autoplay?: boolean
  transformScale?: number
  autoplaySpeed?: number
  height?: string
  width?: string
  background?: string
}

export default function ImageCarousel({
  items,
  autoplay = true,
  transformScale = 1.1,
  autoplaySpeed = 3000,
  height = "60vh",
  width = "100vw",
  background = "#ffffff",
}: ImageCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const scrollRef = useRef<number>(0)

  const duplicatedItems = [...items, ...items]

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      if (!paused && containerRef.current) {
        containerRef.current.scrollLeft += 1
        scrollRef.current += 1
        if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
          containerRef.current.scrollLeft = 0
        }
      }
    }, autoplaySpeed / 100)
    return () => clearInterval(interval)
  }, [autoplay, paused, autoplaySpeed])

  return (
    <div
      className="overflow-hidden relative w-full"
      style={{ height, background }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={containerRef}
        className="flex gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-transform duration-300 ease-in-out hover:scale-105 w-48 sm:w-56 lg:w-64 xl:w-72"
          >
            <div className="w-full h-24 sm:h-28 lg:h-32 xl:h-36 flex items-center justify-center mb-3 sm:mb-4">
              <Link
                href={item.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.label}
                  className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all duration-300"
                />
              </Link>
            </div>
            <p className="text-center text-gray-700 font-semibold text-sm sm:text-base lg:text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
