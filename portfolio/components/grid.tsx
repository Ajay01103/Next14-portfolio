import React from "react"
import { BentoGrid, BentoGridItem } from "./bento-grid"
import { gridItems } from "@/data"

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          ({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
            <BentoGridItem
              title={title}
              description={description}
              key={id}
              id={id}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  )
}
