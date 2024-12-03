import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ARTJUNKS | News",
  description: "ARTJUNKS News page",
}
export default function News() {
  return (
    <section>
      <h1 className="text-white  mx-auto w-max">
        This is <span className="text-rose-500">News</span> page!
      </h1>
    </section>
  )
}
