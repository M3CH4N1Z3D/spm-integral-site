"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface CarouselItem {
  id: string
  src: string
  alt: string
  title?: string
}

interface ImageCarouselProps {
  items: CarouselItem[]
  autoplay?: boolean
  autoplaySpeed?: number
  transformScale?: number
  height?: string
  width?: string
  background?: string
}

export default function ImageCarousel({
  items,
  autoplay = false,
  autoplaySpeed = 3000,
  transformScale = 1.1,
  height = "300px",
  width = "100%",
  background = "white",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (autoplay && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
      }, autoplaySpeed)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoplay, autoplaySpeed, items.length])

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const handleMouseLeave = () => {
    if (autoplay && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
      }, autoplaySpeed)
    }
  }

  return (
    <div
      className="relative overflow-hidden rounded-lg"
      style={{ height, width }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${items.length * 100}%`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0 h-full flex items-center justify-center p-4"
            style={{
              width: `${100 / items.length}%`,
              backgroundColor: background === "transparent" ? "transparent" : background,
            }}
          >
            <div className="relative w-full h-full max-w-xs mx-auto">
              <div
                className="relative w-full h-full bg-[#bccceb] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:brightness-110"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  <p className="text-sm font-medium">{item.title}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
