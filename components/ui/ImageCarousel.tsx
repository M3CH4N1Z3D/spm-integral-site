"use client"
import Link from "next/link"
import type React from "react"

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
  height?: string // e.g. "60vh"
  width?: string // e.g. "100vw"
  background?: string // e.g. "#f0f0f0"
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
    }, autoplaySpeed / 100) // smooth scroll
    return () => clearInterval(interval)
  }, [autoplay, paused, autoplaySpeed])

  return (
    <div
      className="overflow-hidden relative"
      style={{ height, width, background }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={containerRef} className="flex gap-6 px-8 py-8 overflow-x-auto scroll-smooth no-scrollbar">
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex flex-col items-center justify-between bg-[#bccceb] rounded-xl shadow-md p-4 transition-transform duration-300 ease-in-out hover:scale-[1.05] basis-full sm:basis-1/2 lg:basis-1/3"
            style={{ "--scale": transformScale } as React.CSSProperties}
          >
            <div className="w-full aspect-[4/3] flex items-center justify-center">
              <Link href={item.url || "#"} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.label}
                  className="object-contain max-h-full w-auto"
                />
              </Link>
            </div>
            <p className="mt-4 text-center text-gray-700 font-semibold text-lg">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
