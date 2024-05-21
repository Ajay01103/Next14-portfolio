import { Grid } from "@/components/grid"
import { Hero } from "@/components/hero"
import { FloatingNav } from "@/components/ui/floating-nav"
import { FaHome } from "react-icons/fa"

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]} />
        <Hero />
        <Grid />
      </div>
    </main>
  )
}
