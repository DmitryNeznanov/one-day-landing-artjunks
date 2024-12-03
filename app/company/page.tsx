import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ARTJUNKS | Company",
  description: "ARTJUNKS Company page",
}
export default function Company() {
  return (
    <section>
      <h1 className="text-white  mx-auto w-max">
        This is <span className="text-rose-500">Company</span> page!
      </h1>
    </section>
  )
}
