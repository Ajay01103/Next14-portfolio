import React from "react"
import { Spotlight } from "./ui/spotlight"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { Button } from "./ui/button"
import { OtherTextGenerateEffect } from "./ui/other-text-gen"

export const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      {/* Back Grids */}

      <div className="h-screen absolute w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.1] flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <OtherTextGenerateEffect
            words="Dynamic Web Magic with Next.js"
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
          />
          {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </h2> */}

          <TextGenerateEffect
            className="text-center md:text-5xl lg:text-6xl"
            words="Transforming digital Concepts and Ideas into Reality"
          />

          {/* <p className="text-center md:tracking-wide mb-4 text-sm md:text-lg lg:text-xl">
            Hi, I&apos;m Ajay a Next.js & React developer from India
          </p> */}

          <OtherTextGenerateEffect
            className="text-center md:tracking-wide mb-4 text-sm md:text-lg lg:text-xl"
            words=" Hi, I'm Ajay a Next.js & React developer from India"
          />

          <a
            href="#"
            className="mt-4"
          >
            <Button text="See my work" />
          </a>
        </div>
      </div>
    </div>
  )
}
