"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type CarouselProps = {
  images: {
    src: string;
    alt?: string;
  }[];
};

export default function Carousel({ images }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    startX.current = e.pageX;
    scrollLeft.current = containerRef.current!.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const walk = (e.pageX - startX.current) * 1.2;
    containerRef.current!.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = () => setDragging(false);

  return (
    <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        className="
            flex gap-4 overflow-x-auto
            cursor-grab active:cursor-grabbing
            snap-x snap-mandatory
            scroll-smooth
            touch-pan-x
            select-none
    ">
    {images.map((img, i) => (
        <div key={i} className="relative min-w-[300px] shrink-0 snap-start">

            <Image
            src={img.src}
            alt={img.alt ?? ""}
            width={200}
            height={600}
            className="w-full h-auto rounded-xl pointer-events-none"
            draggable={false}
            />
        </div>
    ))}
    </div>
  );
}
