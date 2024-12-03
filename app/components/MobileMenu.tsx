import CloseMobileMenuButton from "./CloseMobileMenuButton"
import NavLinks from "./NavLinks"

export default function MobileMenu() {
  return (
    <div
      className="absolute top-0 right-0 overflow-hidden transition-width w-[0%] h-screen z-[9999] bg-[#000000b4]"
      id="mobileMenu"
    >
      <div className="p-[35px]">
        <div className="ml-auto w-max">
          <CloseMobileMenuButton />
        </div>
        <div className="mt-[15px]">
          <NavLinks />
        </div>
      </div>
    </div>
  )
}
