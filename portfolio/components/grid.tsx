import React from "react"
import { BentoGrid, BentoGridItem } from "./bento-grid"

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {[{ title: "title1", description: "desc", id: 1 }].map((item, i) => (
          <BentoGridItem
            title={item.title}
            description={item.description}
            key={i}
            id={item.id}
          />
        ))}
      </BentoGrid>
    </section>
  )
}
