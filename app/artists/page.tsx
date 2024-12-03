import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ARTJUNKS | Artists",
  description: "ARTJUNKS Artists page",
}
export default function Artists() {
  return (
    <section>
      <h1 className="text-white  mx-auto w-max">
        This is <span className="text-rose-500">Artists</span> page!
      </h1>
    </section>
  )
}
