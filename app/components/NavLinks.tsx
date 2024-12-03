import Link from "next/link"

export default function NavLinks() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-x-[35px]">
      <ul className="flex flex-col justify-between lg:flex-row lg:items-center gap-[20px] lg:gap-[35px] text-white">
        {[
          ["/", "home"],
          ["about", "about"],
          ["artists", "artists"],
          ["careers", "careers"],
          ["news", "news"],
          ["company", "company"],
        ].map(([link, text], i) => {
          return (
            <li key={i}>
              <Link
                className="p-lg capitalize hover:underline "
                href={link}
              >
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="mt-[20px] lg:mt-0">
        <Link
          className="button-primary"
          href="/careers"
        >
          Get started
        </Link>
      </div>
    </div>
  )
}
