import Image from "next/image"
import NavLinks from "./NavLinks"
import OpenMobileMenuButton from "./OpenMobileMenuButton"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
export default function Header() {
  return (
    <header
      className="px-[32px] pt-[32px] bg-transparent text-white"
      id="header"
    >
      <nav className="flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={167}
              height={37}
              alt="logo.svg"
            ></Image>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <NavLinks />
        </div>
        <div className="lg:hidden">
          <OpenMobileMenuButton />
        </div>
        <MobileMenu />
      </nav>
    </header>
  )
}
