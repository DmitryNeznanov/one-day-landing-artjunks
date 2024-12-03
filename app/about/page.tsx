import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ARTJUNKS | About",
  description: "ARTJUNKS About page",
}
export default function About() {
  return (
    <section>
      <h1 className="text-white  mx-auto w-max">
        This is <span className="text-rose-500">About</span> page!
      </h1>
    </section>
  )
}
