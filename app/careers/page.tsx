import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ARTJUNKS | Careers",
  description: "ARTJUNKS Careers page",
}
export default function Careers() {
  return (
    <section>
      <h1 className="text-white  mx-auto w-max">
        This is <span className="text-rose-500">Careers</span> page!
      </h1>
    </section>
  )
}
